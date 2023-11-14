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

    const handlerRegister = async (e) =>{
        e.preventDefault();
        await postUser(user);
        toast.success('Dados registrados com sucesso.')
        push('/pages/dashboard')
    }

    return(
        <div class="box-formulario">        
        <div class="formulario">
        <div className="box-title">
            <h2 className="title">Registre-se</h2>
            <form onSubmit={handlerRegister}>

                <input placeholder="Nome"
                class="input-card" type="nome"
                onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>   
                    </input>

                <input placeholder="E-mail"
                class="input-card" type="email"
                onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
                    </input>

                <input placeholder="Senha"
                class="input-card" type="password"
                onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
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

    }