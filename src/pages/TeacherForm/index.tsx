import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import './styles.css';

export default function TeachersForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItems, index) => {
            if(index === position) {
                return {...scheduleItems, [field]: value}
            }
            return scheduleItems;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(res => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Você quer dar aulas, que incrível!"    
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp"
                            value={whatsapp} 
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea 
                            name="bio" 
                            label="Fale um pouco sobre você" 
                            value={bio} 
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria ou assunto"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            options={[
                                { value: 'Culinária', label: 'Culinária' },
                                { value: 'Programação', label: 'Programação' },
                                { value: 'Música', label: 'Música' },
                                { value: 'Bordado', label: 'Bordado' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Marcenaria', label: 'Marcenaria' },
                            ]}
                        />
                        <Input 
                            name="cost" 
                            label="Valor/hora"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />

                                </div>
                            )
                        })}        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados antes de enviar 
                        </p>
                        <button >
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}