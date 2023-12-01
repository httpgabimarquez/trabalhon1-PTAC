'use client'
import { getUserAuthenticated, updateUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormsAlter({ params }){
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',    
  });

  const {push} = useRouter();

  // useEffect(() => {
   // const findUser = async ()=>{
   //   const userFind = await getUserAuthenticated(params.id);
  //    setUser({...user, name: userFind.name, email: userFind.email});
 //   }
//    findUser();
 // }, [])
  
  const handlerLogin = async (e) => {
    e.preventDefault();
    await updateUser(user, params.id);
    return push("/pages/dashboard");
  }

  return (
    <div class="box-formulario">        
    <div class="formulario">
    <div className="box-title">
      <h1 className="title">Alterar - Insira seus dados</h1>
      <form onSubmit={handlerLogin}>

      <input
          placeholder='Insira seu nome aqui'
          class="input-card" type="name">
        </input>

        <input
          placeholder='Insira seu endereço de E-mail aqui'
          class="input-card" type="email">
        </input>

        <input
          placeholder='Insira sua senha aqui'
          class="input-card" type="password">
        </input>

        <div className="box-pulse">
          <button className="btn-submit">Alterar</button>
       </div>

        <button className='btnvoltar'>
          <a href="/pages/dashboard">Voltar</a></button>
      </form>
      </div>
      <ToastContainer/>
    </div>
    </div>

  )
};

