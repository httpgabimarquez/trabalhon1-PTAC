import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/ListUsers";

export default async function Dashboard(){
   const users = getUsers()
    return (
        <div>
            <h1>Dashboard</h1>
        <Suspense fallback={<p>Carregando os dados da página...</p>}>
            <ListUsers users={users}/>
        <button><a href ="/pages/alter">Alterar</a></button>

        <button><a href ="/pages/register">Registre-se</a></button>
        </Suspense>
        </div>
    );
};