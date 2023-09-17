'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormsAlter = () => {
  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Dados alterados com sucesso.')
  }
  return (
    <div class="box-formulario">        
    <div class="formulario">
    <div className="box-title">
      <h1 className="title">Login - Alterar</h1>
      <form onSubmit={handlerLogin}>

      <input
          placeholder='nome'
          class="input-card" type="name">
        </input>

        <input
          placeholder='E-mail'
          class="input-card" type="email">
        </input>

        <input
          placeholder='Senha'
          class="input-card" type="password">
        </input>

        <div className="box-pulse">
                <button className="btn-submit">Entrar</button>
                </div>

        <button className="btn-submit">
          <a href="/pages/dashboard">Voltar</a></button>
      </form>
      </div>
      <ToastContainer/>
    </div>
    </div>
  )
};

export default FormsAlter;