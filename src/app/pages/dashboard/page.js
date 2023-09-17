import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/ListUsers";

export default async function Dashboard(){
   const users = getUsers()
    return (
        <div className="box-title">
        <h1 className="title">Dashboard</h1>
        <Suspense fallback={<p className="loading">Carregando os dados da página...</p>}>
          <ListUsers users={users} />
          <div className="button-container">
            <a className="buttonpages" href="/pages/alter">Alterar</a>
            <a className="buttonpages" href="/pages/register">Registre-se</a>
          </div>
        </Suspense>
      </div>
    );
};