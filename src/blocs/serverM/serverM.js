import { useState } from "react"
import { useSelector } from "react-redux"
import './serverMessage.scss'
import { ServerMItem } from "./serverMItem"
export const ServerM = () => {
    
    const {arrM} = useSelector(state => state.sMessage)
    return(
        <div className="server-message__wrap">
            {arrM.map((item, index) => <ServerMItem text = {item} index = {index}/>)}
        </div>
    )
}