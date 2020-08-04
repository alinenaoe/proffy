import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/33556958?s=460&u=621ac119698e36911bd1d9518cf26dc66678041d&v=4" alt="Aline Naoe"/>
            <div>
                <strong>Aline Naoe</strong>
                <span>Desenvolvimento Front-End</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Accusamus maiores commodi ab voluptates ullam. Velit, autem unde eius debitis excepturi sequi vitae impedit eligendi quod veniam perspiciatis fugit laudantium accusantium!
        </p>

        <footer>
            <p>
                Valor por hora
                <strong>R$ 45,00</strong>
            </p>
            <button>
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}