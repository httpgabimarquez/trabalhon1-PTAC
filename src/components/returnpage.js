'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Returnlog(){
    const{push} = useRouter();
    const retorne = (e) => {
        e.preventDefault();
        Cookies.remove('token')
        push('/')
    }
    return(
        <div> <button className="btnn" onClick={retorne}>Login</button></div>
    )
}