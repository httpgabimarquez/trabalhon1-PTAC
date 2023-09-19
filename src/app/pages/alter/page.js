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

export default FormsAlter;