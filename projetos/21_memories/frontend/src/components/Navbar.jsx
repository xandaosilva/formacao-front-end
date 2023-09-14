import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h2>
                <Link to={"/"}>Memories</Link>
            </h2>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/add-memory"}>Adicionar memória</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
