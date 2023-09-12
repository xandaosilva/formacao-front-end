import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import useToast from "../hook/useToast";

import "./Form.css";

const EditParty = () => {
    const { id } = useParams();
    const [party, setParty] = useState(null);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadServices = async() => {
            const res = await partyFetch.get("/services");
            setServices(res.data);
            loadParty();
        };

        const loadParty = async() =>{
            const res = await partyFetch.get(`/parties/${id}`);
            setParty(res.data);
        };

        loadServices();
    }, []);

    const handleServices = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        const filteredServices = services.filter((s) => s._id === value);

        let partyServices = party.services;

        if(checked){
            partyServices = [...partyServices, filteredServices[0]];
        }
        else{
            partyServices = partyServices.filter((s) => s._id !== value);
        }

        setParty({ ...party, services: partyServices });
    }

    const updateParty = async(e) => {
        e.preventDefault();
        
        try {
            const res = await partyFetch.put(`/parties/${party._id}`, party);

            if(res.status === 200){
                navigate(`/party/${id}`);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useToast(res.data.msg);
            }
        } catch (error) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useToast(error.response.data.msg, "error");
        }
    }

    if(!party){
        return <p>Carregando festa</p>
    }

    return (
        <div className="form-page">
            <h2>Editando: {partyFetch.title}</h2>
            <p>Ajuste as informações da sua festa</p>
            <form onSubmit={(e) => updateParty(e)}>
                <label>
                    <span>Nome da festa:</span>
                    <input type="text" onChange={(e) => setParty({ ...party, title: e.target.value })} value={party.title} placeholder="Seja criativo" required />
                </label>
                <label>
                    <span>Anfitrião:</span>
                    <input type="text" onChange={(e) => setParty({ ...party, author: e.target.value })} value={party.author} placeholder="Quem está dando a festa?" required />
                </label>
                <label>
                    <span>Descrição:</span>
                    <textarea onChange={(e) => setParty({ ...party, description: e.target.value })} value={party.description} placeholder="Conte mais sobre a festa..." required></textarea>
                </label>
                <label>
                    <span>Orçamento:</span>
                    <input type="number" onChange={(e) => setParty({ ...party, budget: e.target.value })} value={party.budget} placeholder="Quanto você pretende investir?" required />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input type="text" onChange={(e) => setParty({ ...party, image: e.target.value })} value={party.image} placeholder="Insira a URL de uma imagem" />
                </label>
                <div>
                    <h2>Escolha os serviços</h2>
                    <div className="services-container">
                        {services.length === 0 && <p>Carregando serviços</p>}
                        {services.length > 0 && services.map((service) => (
                        <div className="service" key={service._id}>
                            <img src={service.image} alt={service.name} />
                            <p className="service-name">{service.name}</p>
                            <p className="service-price">R${service.price}</p>
                            <div className="checkbox-container">
                                <input type="checkbox" onChange={(e) => handleServices(e)} value={service._id} checked={party.services.find((partyService) => partyService._id === service._id) || ""} />
                                <p>Marque para solicitar</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <input type="submit" value="Editar festa" className="btn" />
            </form>
        </div>
    )
}

export default EditParty