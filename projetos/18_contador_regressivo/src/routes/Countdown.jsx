import Counter from "../components/Counter";
import Title from "../components/Title";

import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
    const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");

    return (
        <>
            <Title title={"Apocalipse"} />
            <div className="countdown-container">
                <Counter title={"Dias"} number={day} />
                <Counter title={"Horas"} number={hour} />
                <Counter title={"Minutos"} number={minute} />
                <Counter title={"Segundos"} number={second} />
            </div>
        </>
    )
}

export default Countdown;
