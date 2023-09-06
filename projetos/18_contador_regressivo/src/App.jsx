import Counter from "./components/Counter";
import Title from "./components/Title";

import NewYear from "./assets/newyear.jpg";

import "./App.css";

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title={"Apocalipse"} />
        <div className="countdown-container">
          <Counter title={"Dias"} number={2} />
          <Counter title={"Horas"} number={18} />
          <Counter title={"Minutos"} number={20} />
          <Counter title={"Segundos"} number={13} />
        </div>
      </div>
    </div>
  )
}

export default App;
