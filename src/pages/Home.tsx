import { useHistory } from "react-router";
import { Button } from "../components/Button";
import illustrationimg from "../assets/illustration.svg";
import logoimg from "../assets/logo.svg";
import googleIconImg from "../assets/google-icon.svg";
import '../styles/auth.scss';
import { useAuth } from "../hooks/useAuth";



export function Home() {
    const history = useHistory();

    const { user, singInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await singInWithGoogle()
        }
        history.push('/rooms/new')
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationimg} alt="Ilustração perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoimg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="logo google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text"
                            placeholder="Digite o código da sala" />

                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}