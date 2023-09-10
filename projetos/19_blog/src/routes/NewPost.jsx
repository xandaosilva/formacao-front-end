import blogFetch from '../axios/config'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import './NewPost.css'

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const cleanForm = () => {
    setTitle("");
    setBody("");
  }

  const createPost = async(e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post
    });

    navigate("/");
    cleanForm();
  }

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Digite o título do Post" />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" onChange={(e) => setBody(e.target.value)} value={body} placeholder="Digite o conteúdo do Post"></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  )
}

export default NewPost