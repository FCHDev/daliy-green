import logo from '../Assets/logos/dailygreen-logo.png'
import {Link} from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';


const Header = ({handleCategoryChange, setSelectedCategory, productsList}) => {
    const totalProducts = productsList.length
    const totalDecoProducts = productsList.filter((item) => item.category.includes("Décoration")).length
    const totalEntretienProducts = productsList.filter((item) => item.category.includes("Entretien")).length
    const totalHygieneProducts = productsList.filter((item) => item.category.includes("Hygiène")).length



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
                        <span id="All" onClick={handleClick}>All ({totalProducts})</span>
                        <span id="Décoration" onClick={handleCategoryChange}>Décoration ({totalDecoProducts})</span>
                        <span id="Entretien" onClick={handleCategoryChange}>Entretien ({totalEntretienProducts})</span>
                        <span id="Hygiène" onClick={handleCategoryChange}>Hygiène ({totalHygieneProducts})</span>
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
            <div className="personal-infos">
                <Link to="/cart">
                    <ShoppingCartIcon
                        style={{color: "white", marginRight: "1em"}}
                    />
                </Link>
                <LoginIcon
                    style={{color: "white", marginRight: "1em"}}/>
                <Link to="/admin">
                    <SettingsIcon
                        style={{color: "white", marginRight: "1em"}}
                    />
                </Link>
            </div>

        </div>
    );
};

export default Header;