import './App.css'
import city from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (message) => {
    setMessage(message);
  }

  function showMessage(){
    console.log("Teste")
  }

  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        {/* Imagem na pasta public */}
        <img src="/img.jpg" alt="Imagem de uma paisagem" />
        {/* Imagem em assets */}
        <img src={city} alt="Imagem de uma cidade" />
        <Data />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Alexandre" />
        <ShowUserName name="Rogério" />
        <ShowUserName name="Silva" />
        <ShowUserName name="Nunes" />
        <Container>
          <p>Componente pai</p>
        </Container>
        <Container>
          <h2>Testando componente pai</h2>
          <p>Texto do componente pai</p>
        </Container>
        <ExecuteFunction myFunction={showMessage} />
        <Message message={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
