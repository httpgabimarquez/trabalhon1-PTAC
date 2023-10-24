'use server'

const url = "https://aula-17-10-omega.vercel.app";

const getUserAuthenticated = async (userlogin) => {
    console.log (userlogin);
   const responseOfApi = await fetch(url + "/user/authenticated", 
        {
            method: "POST",
            headers:  {"Content-Type":"application/json"}, 
            body: JSON.stringify(userlogin)
        }
   );

    const userAuth = await responseOfApi.json();
    return userAuth;
 }
    
const getUsers = async () => {
    const responseOfApi = await fetch(url + "/users"
    );

    const listUsers = await responseOfApi.json();
    return listUsers;
}

export { getUsers, getUserAuthenticated };
