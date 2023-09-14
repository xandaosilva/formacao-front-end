import axios from "../axios-config"

import { useState } from "react"

import { toast } from "react-toastify"

import { useNavigate } from "react-router-dom"

import './AddMemory.css'

const AddMemory = () => {
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", inputs.title);
        formData.append("description", inputs.description);

        try {
            const response = await axios.post("/memories", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            toast.success(response.data.msg);
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    }

    const handleChange = (event) => {
        if(event.target.name === "image"){
            setImage(event.target.files[0]);
        }
        else{
            setInputs({ ...inputs, [event.target.name]: event.target.value });
        }
    }

    return (
        <div className="add-memory-page">
            <h2>Crie uma nova memória</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Título:</p>
                    <input type="text" name="title" id="title" onChange={handleChange} placeholder="Defina um título" />
                </label>
                <label>
                    <p>Descrição:</p>
                    <textarea name="description" id="description" onChange={handleChange} placeholder="Explique o que aconteceu"></textarea>
                </label>
                <label>
                    <p>Foto:</p>
                    <input type="file" name="image" id="image" onChange={handleChange} />
                </label>
                <input type="submit" className="btn" value="Enviar" />
            </form>
        </div>
    )
}

export default AddMemory
