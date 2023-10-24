'use server'

const url = "https://aula-17-10-omega.vercel.app/";

const getUserAuthenticated = async (userlogin) => {
   const responseOfApi = await fetch(url + "/user/authenticated", 
        {
            method: "POST",
            headers:  {"Content-Type":"application/json"}, 
            body: JSON.stringify(userlogin)
        }
   );

    const userAuth = await responseOfApi();
    return userAuth;
 }
    
const getUsers = () =>{
       
 }

export { getUsers, getUserAuthenticated };
