import './report.scss'

import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { ReportMenu } from "./reportMenu"

export const Report = () => {
    
    const [activeTab, setActiveTab] = useOutletContext()
    const [activeNav, setActiveNav] = useState('report')
    useEffect(() => {
        setActiveTab('annual')
    }, [setActiveTab])

    

    return (
        <>
            <ReportMenu activeNav={activeNav}/>
            <div className="report"><Outlet context={[activeNav, setActiveNav]}/></div>
        </>
    )
}