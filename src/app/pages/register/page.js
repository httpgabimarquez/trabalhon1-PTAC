'use client'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormRegister = () => {
    const handlerLogin = async (e) =>{
        e.preventDefault();
        toast.sucess('Dados registrados com sucesso')
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handlerLogin}>

                <input placeholder="Nome"
                type="nome">
                    </input>

                <input placeholder="E-mail"
                type="email">
                    </input>

                <input placeholder="Senha"
                type="password">
                    </input>

                <button>Entrar</button>
            </form>
            <ToastContainer/>
        </div>
    )
};

export default FormRegister; 