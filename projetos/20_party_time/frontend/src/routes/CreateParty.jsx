import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

import "./Form.css";

const CreateParty = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [image, setImage] = useState("");
  const [partyServices, setPartyServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadServices = async() => {
      const res = await partyFetch.get("/services");
      setServices(res.data);
    }

    loadServices();
  }, []);

  const handleServices = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const filteredServices = services.filter((s) => s._id === value);

    if(checked){
      setPartyServices((services) => [...services, filteredServices[0]]);
    }
    else{
      setPartyServices((services) => services.filter((s) => s._id !== value));
    }
  }

  const createParty = async(e) => {
    e.preventDefault();

    try {
      const party = {
        title,
        author,
        description,
        budget,
        image,
        services: partyServices
      };
  
      const res = await partyFetch.post("/parties", party);
  
      if(res.status === 201){
        navigate("/");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useToast(res.data.msg);
      }
    } catch (error) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useToast(error.response.data.msg, "error");
    }
  }

  return (
    <div className="form-page">
      <h2>Crie a sua próxima festa</h2>
      <p>Defina o orçamento e escolha os serviços</p>
      <form onSubmit={(e) => createParty(e)}>
        <label>
          <span>Nome da festa:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Seja criativo" required />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Quem está dando a festa?" required />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Conte mais sobre a festa..." required></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input type="number" onChange={(e) => setBudget(e.target.value)} value={budget} placeholder="Quanto você pretende investir?" required />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Insira a URL de uma imagem" />
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
                  <input type="checkbox" onChange={(e) => handleServices(e)} value={service._id} />
                  <p>Marque para solicitar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <input type="submit" value="Criar festa" className="btn" />
      </form>
    </div>
  )
}

export default CreateParty