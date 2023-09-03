import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css'

const url = 'http://localhost:3000/products'

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  /* const [products, setProducts] = useState([]) */

  const cleanForm = () => {
    setName("")
    setPrice("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = { name, price }
    httpConfig(product, "POST")
    cleanForm()
  }

  const { data: items, httpConfig, loading, error } = useFetch(url)

  return (
    <div className="App">
      <h1>Http em React</h1>
      {loading && <p>Carregando lista de produtos</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Nome</span>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <label htmlFor="price">
            <span>Preço</span>
            <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </div>
  )
}

export default App
