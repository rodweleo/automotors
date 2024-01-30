import { NavLink } from "react-router-dom"
import { BsBell, BsPlus } from "react-icons/bs";
export const Header = () =>{
    return <header>
        <h1>AutoMotors</h1>
        <nav>
            <NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
            <NavLink to="cars"><i className="fa-solid fa-car"></i> Cars</NavLink>
            <NavLink to="dealers"><i className="fa-solid fa-users-gear"></i> Dealers</NavLink>
            <NavLink to="messages"><i className="fa-regular fa-comments"></i> Messages</NavLink>
            <NavLink to="history">Activities</NavLink>
        </nav>

        <ul>
            <li><BsPlus size={24} /></li>
            <li><BsBell size={18} /></li>
        </ul>
    </header>
}