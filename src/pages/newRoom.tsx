import {FormEvent, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import ilustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'

import {Button} from '../components/button'
import { database } from '../services/firebase'


import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth'

export function NewRoom(){
    const{user}= useAuth()
    const history =useHistory()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event:FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })
        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Crie aqui suas sala Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="letmeask" />
                    <h2> Criar uma nova sala </h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event=>setNewRoom(event.target.value)}
                        />
                        <Button type="submit">
                            Cria sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}