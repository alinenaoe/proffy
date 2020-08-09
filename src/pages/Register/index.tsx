import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import InputStartPages from '../../components/InputStartPages';
import BannerStartPages from '../../components/BannerStartPages';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css'

function Register() {

    const [userName, setUserName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegisterUser(e: FormEvent) {
        e.preventDefault();
        console.log(e)
    }

    return(
        <div id="register-page" >

            <div className="register-left">

                <div className="content">

                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>    

                    <h1>Cadastro</h1>
                    <p>Preencha dos dados abaixo para começar</p>

                    <form onSubmit={handleRegisterUser}>
                        <InputStartPages
                            name="name"
                            type="text"
                            label="Nome"
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                        <InputStartPages
                            name="lastName"
                            type="text"
                            label="Sobrenome"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}

                        />
                        <InputStartPages
                            name="email"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <InputStartPages
                            name="password"
                            type="password"
                            label="Senha"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />

                        <button type="submit">Concluir cadastro</button>
                    </form>
                </div>
            
            </div>    

            <div className="register-right">
                <BannerStartPages />
            </div>
        </div>
    )
}

export default Register;