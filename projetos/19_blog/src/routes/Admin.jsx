import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './Admin.css'

const Admin = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await blogFetch.get("/posts");
            const data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async(id) => {
        await blogFetch.delete(`/posts/${id}`);
        const filteredPosts = posts.filter((post) => post.id !== id);
        setPosts(filteredPosts);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="admin">
            <h1>Gerenciar Posts</h1>
            {posts.length === 0 ? (<p>Carregando post</p>) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="actions">
                            <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">Editar</Link>
                            <button className="btn delete-btn" onClick={() => deletePost(post.id)}>Deletar</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Admin