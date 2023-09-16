'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormsAlter = () => {
  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Dados alterados com sucesso.')
  }
  return (
    <div>
      <h1>Login - Alterar</h1>
      <form onSubmit={handlerLogin}>

      <input
          placeholder='nome'
          type="nome" >
        </input>
        <input
          placeholder='E-mail'
          type="email">
        </input>

        <input
          placeholder='Senha'
          type='password'
        >
        </input>
        <button>Entrar</button>
        <button><a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
};

export default FormsAlter;