import React from 'react';

import logo from '../../assets/images/logo.svg';
import './styles.css';

function BannerStartPages() {
    return(
        <div className="banner-container">
            <div className="logo-container">
                <img src={logo} alt="logo"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>

        </div>
    )
}

export default BannerStartPages;