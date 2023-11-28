import Link from "next/link";

export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div>
            {users?.map((user, index) =>
            <p key={index}>
                 <Link href={`/pages/dashboard/alter/${user.id}`}> {user.name}</Link>
               
            </p>
        )}
        </div>
   
    )
}