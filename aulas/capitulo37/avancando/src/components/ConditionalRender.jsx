import { useState } from "react"

const ConditionalRender = () => {
    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    /* const [list] = useState([]); */

    return (
        <div>
            <h2>Renderização ternária</h2>
            { list.length > 0 ? (<ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>):(<p>A lista está vazia</p>) }
        </div>
    )
}

export default ConditionalRender