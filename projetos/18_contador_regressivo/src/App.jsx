import Counter from "./components/Counter";
import Title from "./components/Title";

import NewYear from "./assets/newyear.jpg";

import useCountdown from "./hooks/useCountdown";

import "./App.css";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title={"Apocalipse"} />
        <div className="countdown-container">
          <Counter title={"Dias"} number={day} />
          <Counter title={"Horas"} number={hour} />
          <Counter title={"Minutos"} number={minute} />
          <Counter title={"Segundos"} number={second} />
        </div>
      </div>
    </div>
  )
}

export default App;
