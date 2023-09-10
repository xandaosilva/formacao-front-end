import { useEffect, useState, useRef } from "react"

const HookUseRef = () => {
    const numberRef = useRef(0);
    const inputref = useRef();
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setText("");
        inputref.current.focus();
    }

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    });

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current}</p>
            <p>Contador A: {counterA}</p>
            <button onClick={() => setCounterA(counterA + 1)}>Contador A</button>
            <p>Contador B: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setText(e.target.value)} value={text} ref={inputref} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default HookUseRef