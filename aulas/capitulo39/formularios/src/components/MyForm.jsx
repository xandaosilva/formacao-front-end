import { useState } from 'react'

import './MyForm.css'

const MyForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [role, setRole] = useState("")

    const cleanForm = () => {
        setName("")
        setEmail("")
        setMessage("")
        setRole("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Nome: ${name} - Email: ${email} - Mensagem: ${message} - Função: ${role}`)
        cleanForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <span>Nome</span>
                        <input type="text" name="name" id="name" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input type="email" name="email" id="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        <span>Mensagem</span>
                        <textarea name="message" id="message" placeholder="Deixe aqui a sua mensagem" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                </div>
                <div>
                    <label htmlFor="role">
                        <span>Função no sistema</span>
                        <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm