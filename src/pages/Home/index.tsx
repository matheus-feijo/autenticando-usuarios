import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { user } from "../../recoil/atom";

import "../Home/style.scss";

export function Home() {

    const usuario = useRecoilValue(user);

    useEffect(() => {
        console.log(usuario)
    }, [])

    return (
        <div className="container-home">
            <p>{usuario.displayName}</p>
            <p>{usuario.email}</p>
        </div>
    )
}