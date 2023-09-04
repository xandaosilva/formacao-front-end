const UserForm = ({data, updatefieldHandler}) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" value={data.name || ""} onChange={(e) => updatefieldHandler("name", e.target.value)} placeholder="Digite o seu nome" required />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={data.email || ""} onChange={(e) => updatefieldHandler("email", e.target.value)} placeholder="Digite o seu email" required />
        </div>
    </div>
  )
}

export default UserForm