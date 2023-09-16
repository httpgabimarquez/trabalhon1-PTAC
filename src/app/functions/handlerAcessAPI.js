'use server'

const listadenomes = [
    {
        name: 'Jao',
        email: 'jao@teste.com',
        password: '123',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    },
    {
        name: 'Gabriela',
        email: 'gabriela@teste.com',
        password: 'lalalalal',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    },
    {
        name: 'Roberta',
        email: 'roberta@teste.com',
        password: 'lalalalal',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    }
]

const getUserAuthenticated = (userlogin) => {
    let userAuth = {}
    listadenomes.map ((user)=> {
        if (user.email ===  userlogin.email && user.password === userlogin.password){
            userAuth = user
        }
       
    })
    return userAuth
}

const getUsers = () =>{
        return listadenomes
}
export { getUsers, getUserAuthenticated };
