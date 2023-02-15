import React from "react"
import { useSelector } from "react-redux"

export const useRoleValidate = () => {
    const {role} = useSelector(state => state.auth);
    const roleValidation = (roles) => {
        return(roles.includes(role))
    }
    return roleValidation   
}