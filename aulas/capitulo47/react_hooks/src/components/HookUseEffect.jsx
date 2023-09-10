import { useEffect, useState } from "react"

const HookUseEffect = () => {
    const [number, setNumber] = useState(1);
    const [anotherNumber, setAnotherNumber] = useState(0);
    
    const changeNumber = () => {
        setNumber(number + 1);
    }
    
    useEffect(() => {
        console.log("Executando useEffect");
    });

    useEffect(() => {
        console.log("Executado apenas uma vez");
    }, []);

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Executado apenas quando o valor do outro número for alterado");
        }
    }, [anotherNumber]);

    /* useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello world");
            setAnotherNumber(anotherNumber + 1);
        }, 2000);
        return () => clearTimeout(timer);
    }, [anotherNumber]); */

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeNumber}>Alterar número</button>
            <p>Outro número: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Alterar o outro número</button>
        </div>
    )
}

export default HookUseEffect