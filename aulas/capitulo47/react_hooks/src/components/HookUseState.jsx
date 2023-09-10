import { useState } from "react"

const HookUseState = () => {
    const [name, setName] = useState("Alexandre");
    const [age, setAge] = useState(30)

    return (
        <div>
            <h2>useState</h2>
            <p>useState: {name}</p>
            <p>useState: {age}</p>
            <form>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />    
                <input type="text" name="age" onChange={(e) => setAge(e.target.value)} value={age} />    
            </form>
        </div>
    )
}

export default HookUseState