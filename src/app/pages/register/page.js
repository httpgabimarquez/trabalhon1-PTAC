'use client'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormRegister = () => {
    const handlerLogin = async (e) =>{
        e.preventDefault();
        toast.sucess('Dados registrados com sucesso')
    }
    return(
        <div class="box-formulario">        
        <div class="formulario">
        <div className="box-title">
            <h2 className="title">Registre-se</h2>
            <form onSubmit={handlerLogin}>

                <input placeholder="Nome"
                class="input-card" type="nome">
                    </input>

                <input placeholder="E-mail"
                class="input-card" type="email">
                    </input>

                <input placeholder="Senha"
                class="input-card" type="password">
                    </input>
            <div className="box-pulse">
                <button className="btn-submit">Entrar</button>
                </div>
            </form>
            </div>
            <ToastContainer/>
        </div>
        </div>
    )
};

export default FormRegister; 