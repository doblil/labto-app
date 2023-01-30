import './report.scss'

import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { ReportMenu } from "./reportMenu"

export const Report = (props) => {
    
    const {activeNav} = props
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('report')
    }, [setActiveTab])

    

    return (
        <>
            <ReportMenu activeNav={activeNav}/>
            <div className="page"><Outlet/></div>
        </>
    )
}