import "./style.scss";
import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../services/firebase";

import { useSetRecoilState } from "recoil";
import { user } from "../../recoil/atom";

import { useNavigate } from "react-router-dom"

export function SignIn() {
    const setUsuario = useSetRecoilState(user);
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider).then((res) => {
            setUsuario(res.user);
            navigate('/home');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <h1>Acesse sua conta</h1>
            <button className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                ENTRAR COM GOOGLE
            </button>
        </div>
    )
}