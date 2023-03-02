import { useState } from "react"
import { useEffect } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { PrepMenu } from "./prepMenu"

export const Prep = () => {
    const [activeTab, setActiveTab] = useOutletContext()
    const [activeNav, setActiveNav] = useState('')
    useEffect(() => {
        setActiveTab('prep')
    }, [setActiveTab])


    return(
        <>
            <PrepMenu setActiveNav= {setActiveNav} activeNav = {activeNav}/>
            <Outlet context={[activeNav, setActiveNav]}/>
            
        </>
    )
}