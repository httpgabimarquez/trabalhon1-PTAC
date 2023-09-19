import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/components/ListUsers"; 
import Returnlog from "@/components/returnpage";

export default async function Dashboard(){
   const users = getUsers()
    return (
        <div className="box-title">

<nav class="menu-horizontal">
    <ul>
    <h2 className="titledashboard">Dashboard</h2>
        <li><a href="/pages/alter" class="lineTop"> <span>Alterar</span> </a></li>
        <li><a href="/pages/register" class="lineTop"> <span>Registre-se</span></a></li>
        <li><a href="#" class="lineTop"> <span>Saiba mais...</span></a></li>
        <li><a href="#" class="lineTop"> <span>Entre em contato</span></a></li>
    </ul>
</nav>

  <Suspense fallback={<p className="loading">Carregando os dados da página...</p>}>
    <div className="user-list">
      <h3>Lista de Usuários</h3>
          <ListUsers users={users} />
          </div>
          <Returnlog/>
      </Suspense>
</div>
    );
};