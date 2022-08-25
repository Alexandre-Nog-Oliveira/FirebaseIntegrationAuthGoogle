import './styles.scss'
import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth'
import { auth } from '../../services/firebase' 
import { useState } from 'react'

export function SigIn(){

    const [users, setUsers] = useState<User>({} as User);

function handleGoogleSigIn(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        setUsers(result.user);
    })
    .catch((error) =>{
        console.log(error);
    })
}

    return(
        <div className="container" >
            <div className='user' >
                {users.photoURL && <img src={users.photoURL} alt='Foto de perfil do usúario' /> }
            </div>
            <strong>{users.displayName}</strong>
            <small>{users.email}</small>
            <h1>Acesse sua conta</h1>
            <span>
                Utilizando a autenticação com conta google, fica muito mais facil fazer login!
            </span>
            <button  type="button" className="button" onClick={handleGoogleSigIn}>
                <GoogleLogo/>
                Entra com Google</button>
        </div>
    )
}