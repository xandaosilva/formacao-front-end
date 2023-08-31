import { useState } from "react"

const Data = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>useState</h2>
            <div>
                <button onClick={() => setCount(count + 1)}>Aumentar o valor</button>
                <button onClick={() => setCount(count - 1)}>Dominuir o valor</button>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default Data