'use server'

const url = "https://aula-17-10-omega.vercel.app";

const getUserAuthenticated = async (userlogin) => {
   try{
   const responseOfApi = await fetch(url + "/user/authenticated", 
        {
            method: "POST",
            headers:  {"Content-Type":"application/json"}, 
            body: JSON.stringify(userlogin)
        }
   );

    const userAuth = await responseOfApi.json();
    return userAuth;

    } catch {
        return null;
 }
}
    
const getUsers = async () => {
    const responseOfApi = await fetch(url + "/users",
    {next: {revalidate: 10}}
    );

    const listUsers = await responseOfApi.json();
    return listUsers;
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user",{
            method: 'POST',
            headers: {'Content-Type': 'Application/json',
        },
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave;
    } catch {
        return null;
    }
}

const updateUser = async (user, id) => {
    try{
        const responseOfApi = await fetch(url + "/user"/ + id,{
            method: 'PUT',
            headers: {'Content-Type': 'Application/json'
        },
            body: JSON.stringify(user)
        });
        const userUpdate = await responseOfApi.json();
        return userUpdate;
    } catch {
        return null;
    }
}

export { postUser, getUsers, getUserAuthenticated, updateUser };
