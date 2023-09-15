import { useState, ChangeEvent } from "react";

const State = () => {
    const [text, setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>Texto digitado: {text}</p>
            <input type="text" name="text" id="text" onChange={handleChange} />
        </div>
    )
}

export default State
