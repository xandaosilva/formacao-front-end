import React from 'react'

const CreateParty = () => {
  return (
    <div className="form-page">
      <h2>Crie a sua próxima festa</h2>
      <p>Defina o orçamento e escolha os serviços</p>
      <form>
        <label>
          <span>Nome da festa:</span>
          <input type="text" placeholder="Seja criativo" required />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input type="text" placeholder="Quem está dando a festa?" required />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea placeholder="Conte mais sobre a festa..." required></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input type="number" placeholder="Quanto você pretende investir?" required />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" placeholder="Insira a URL de uma imagem" />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            <p>Serviços</p>
          </div>
        </div>
        <input type="submit" value="Criar festa" className="btn" />
      </form>
    </div>
  )
}

export default CreateParty