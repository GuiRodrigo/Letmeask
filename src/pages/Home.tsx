import { useHistory } from 'react-router-dom'

import ilustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/button'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

    async function NavagationToNewRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom() {

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
                    <button onClick={NavagationToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separetor">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}