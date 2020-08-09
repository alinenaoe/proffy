import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

export default function TeachersList() {

    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data)

    }

    return (
        <div id="page-teachers-list" className="container">
            <PageHeader title="Procure o professor perfeito para você">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                        name="subject" 
                        label="Matéria ou assunto"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'Culinária', label: 'Culinária' },
                            { value: 'Programação', label: 'Programação' },
                            { value: 'Música', label: 'Música' },
                            { value: 'Bordado', label: 'Bordado' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Marcenaria', label: 'Marcenaria' },
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeekday(e.target.value)}
                        options={[
                            { value: '0', label: 'Segunda-feira' },
                            { value: '1', label: 'Terça-feira' },
                            { value: '2', label: 'Quarta-feira' },
                            { value: '3', label: 'Quinta-feira' },
                            { value: '4', label: 'Sexta-feira' },
                            { value: '5', label: 'Sábado' },
                            { value: '6', label: 'Domingo' },
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/33556958?s=460&u=621ac119698e36911bd1d9518cf26dc66678041d&v=4" alt="Aline Naoe"/>
                    <div>
                        <strong>Aline Naoe</strong>
                        <span>Desenvolvimento frontend</span>
                    </div>
                </header>

                <p>Olá! Essa página foi desenvolvida durante a Next Level Week #2, da Rocketseat.</p>
                <p>Você está vendo uma página estática, mas boa parte do backend já foi desenvolvida :)</p> 
                <br></br>
                <p>Se quiser olhar o código, confere{' '}  
                <a href="https://github.com/alinenaoe/proffy">esse repositório no GitHub</a>
                </p>

                <footer>
                    <p>
                        Valor por hora
                        <strong>R$ 50,00</strong>
                    </p>
                    <a 
                        href={`https://wa.me/5511957949393`} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsappIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </a>
                </footer>
            </article>                
                {teachers.map((teacher: Teacher )=> {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>

        </div>
    )
}