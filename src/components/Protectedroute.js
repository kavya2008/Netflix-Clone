import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/Authcontext";
const Protectedroute=({children})=>{
    const {user}=UserAuth();
    if(!user){
        return(<Navigate to='/'></Navigate>)
    }
    else{
        return(
            children
        )
    }
}
export default Protectedroute