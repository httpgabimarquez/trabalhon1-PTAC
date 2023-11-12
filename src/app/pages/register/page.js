'use client'
import { postUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const {push} = useRouter();
}

const FormRegister = () => {
    const handlerLogin = async (e) =>{
        e.preventDefault();
        toast.success('Dados registrados com sucesso.')
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
                <button className="btn-submit">Registrar</button>
                </div>

                <button>
          <a href="/pages/dashboard">Voltar</a></button>


            </form>
            </div>
            <ToastContainer/>
        </div>
        </div>
    )
};
