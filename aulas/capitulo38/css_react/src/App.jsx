import MyComponent from "./components/MyComponent"
import Title from "./components/Title";

function App() {
  const x = 11;
  const darkCyanTitle = true

  return (
    <>
      <div className="App">
        <h1>Css no React</h1>
        <MyComponent />
        <p style={{color: "blue", padding: "10px"}}>Estilo inline</p>
        <h2 style={x > 10 ? {color: "purple"} : {color: "gold"}}>Css dinâmico</h2>
        <h2 className={darkCyanTitle ? "dark-cyan-title" : "title"}>Classe dinâmica</h2>
        <Title />
      </div>
    </>
  )
}

export default App
