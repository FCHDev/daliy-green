import logo from '../Assets/logos/dailygreen-logo.png'
import {Link} from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
import {UserAuth} from "../Context/AuthContext";
import {useNavigate} from "react-router-dom"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';



const Header = ({handleCategoryChange, setSelectedCategory, productsList}) => {
    const totalProducts = productsList.length
    const totalDecoProducts = productsList.filter((item) => item.category.includes("Décoration")).length
    const totalEntretienProducts = productsList.filter((item) => item.category.includes("Entretien")).length
    const totalHygieneProducts = productsList.filter((item) => item.category.includes("Hygiène")).length
    const {user, logout} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            alert("Vous êtes bien déconnecté(e) 😢")
        } catch (e) {
            console.log(e.message)
        }
    }

    const connectedUser = (
            <div className="personal-infos">
                <Link to="/account" style={{padding:"6px 8px", height:"36px", width:"64px"}}>
                    <AccountCircleIcon
                        style={{color: "white"}}
                    />
                </Link>
                <Link to="/cart" style={{padding:"6px 8px", height:"36px", width:"64px"}}>
                    <ShoppingCartIcon
                        style={{color: "white"}}
                    />
                </Link>
                <Link to="/admin" style={{padding:"6px 8px", height:"36px", width:"64px"}}>
                    <SettingsIcon
                        style={{color: "white"}}
                    />
                </Link>
                <Link to="/" style={{padding:"6px 8px", height:"36px", width:"64px"}}>
                    <LogoutIcon
                        style={{color: "white"}}
                        onClick={handleLogout}
                    />
                </Link>
            </div>
        )

    const notConnectedUser = (
        <div className="personal-infos">
            <ModalLogin />
            <ModalSignUp />
            <Link to="/cart" style={{padding:"6px 8px", height:"36px", width:"64px"}}>
                <ShoppingCartIcon
                    style={{color: "white"}}
                />
            </Link>
        </div>
    )



    const handleClick = () => {
        setSelectedCategory()
    }



    return (
        <div className="header">
            {/*Logo*/}
            <div className="logo-container">
                <img src={logo} alt="daily green" id="logo"/>
            </div>

            {/*Navigation*/}
            <div className="nav-container">
                <div className="dropdown">
                    <Link to="/">
                        <button className="dropbtn" onClick={handleClick}>Accueil</button>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to="/">
                        <button className="dropbtn" onClick={handleClick}>Catalogue</button>
                    </Link>
                    <div className="dropdown-content">
                        <Link style={{textDecoration: 'none'}} to="/">
                            <span id="All" onClick={handleClick}>All ({totalProducts})</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/">
                            <span id="Décoration" onClick={handleCategoryChange}>Décoration ({totalDecoProducts})</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/">
                            <span id="Entretien"
                                  onClick={handleCategoryChange}>Entretien ({totalEntretienProducts})</span>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/">
                            <span id="Hygiène" onClick={handleCategoryChange}>Hygiène ({totalHygieneProducts})</span>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/notreequipe">
                        <button className="dropbtn">Notre équipe</button>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to="/about">
                        <button className="dropbtn">À propos</button>
                    </Link>
                </div>
            </div>

            {!user ? notConnectedUser : connectedUser}

        </div>
    );
};

export default Header;