import React from 'react';
import logo from '../Assets/logos/dailygreen-logo.png'
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
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
                        <button className="dropbtn">Accueil</button>
                    </Link>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Catalogue</button>
                    <div className="dropdown-content">
                        <a href="">Beauté</a>
                        <a href="">Décoration</a>
                        <a href="">Entretien</a>
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
                        fontSize="large"
                        style={{color: "white", marginRight: "1em"}}
                    />
                </Link>
                <LoginIcon
                    fontSize="large"
                    style={{color: "white", marginRight: "1em"}}/>
            </div>

        </div>
    );
};

export default Header;