import { useState, useEffect } from 'react'

import './App.css'

const url = 'http://localhost:3000/products'

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([])

  const cleanForm = () => {
    setName("")
    setPrice("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { name, price }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    cleanForm()
  }

  useEffect(() => {
    async function getData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Http em React</h1>
      <ul>
        {products.map((product) => (
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
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
