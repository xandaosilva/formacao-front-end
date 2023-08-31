import { useState } from "react"

const ListRender = () => {
    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div>
            <h2>ListRender</h2>
            <div>
                <ul>
                    {list.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ListRender