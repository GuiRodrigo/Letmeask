import ilustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import {Button} from '../components/button'

import '../styles/auth.scss';

export function NewRoom(){
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
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Cria sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}