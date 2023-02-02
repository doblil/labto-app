import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useOutletContext } from "react-router-dom"
import { PrepMenu } from "./prepMenu"

export const Prep = () => {
    const [activeTab, setActiveTab] = useOutletContext()
    const [activeNav, setActiveNav] = useState('')
    useEffect(() => {
        setActiveTab('prep')
    }, [setActiveTab])

    const global = useSelector(state=> state.global)
    console.log(global)
    return(
        <>
            <PrepMenu setActiveNav= {setActiveNav}/>
            <Outlet context={[activeNav, setActiveNav]}/>
            
        </>
    )
}