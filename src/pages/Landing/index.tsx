import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing_02.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/study.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

import './styles.css';
import api from '../../services/api';

export default function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;
            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">

            <header>
                <div className="user-options">
                    <Link to="/login" className="option-login">Login</Link>        
                    <Link to="/register" className="option-register">Cadastro</Link>        
                </div>
            </header>

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

                {totalConnections > 1 &&                 
                <span className="total-connections">
                    Total de {totalConnections} conexões realizadas
                    <img src={heartIcon} alt="Coração"/>
                </span>}

            </div>
        </div>
    )
}