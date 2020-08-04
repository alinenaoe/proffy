import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/study.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';

export default function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/teach" className="teach">
                        <img src={teachIcon} alt="Ensinar"/>
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 234 conexões realizadas
                    <img src={heartIcon} alt="Coração"/>
                </span>

            </div>
        </div>
    )
}