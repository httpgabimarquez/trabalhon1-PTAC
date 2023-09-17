'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
     const userAuth = await handlerAcessUser(user);
     if(userAuth.token === undefined){
      toast.error("Ocorreu um erro no e-mail ou senha, por favor verifique!")
     }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }

  return (
    <body>
      <div class="box-title">
      <form onSubmit={handlerLogin}>
        <h1 className="title">Entre!</h1>
        <p className="subtitle">Entre e insira seu E-mail e senha.</p>
        <div class="box-formulario">        
        <div class="formulario">
        <input
          placeholder='E-mail'
          class="input-card" type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          class="input-card" type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>

        <button className="btn-submit">Entrar</button>
      </div>
      </div>
      </form>
      <ToastContainer/>
    </div>
  
    </body>

  );
}
