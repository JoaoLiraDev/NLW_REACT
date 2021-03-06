import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import illustrationimg from "../assets/illustration.svg";
import logoimg from "../assets/logo.svg";
import '../styles/auth.scss';
import { useAuth } from "../hooks/useAuth";






export function NewRoom() {

    const { user, singInWithGoogle } = useAuth();
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

                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text"
                            placeholder="Nome da sala" />

                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}