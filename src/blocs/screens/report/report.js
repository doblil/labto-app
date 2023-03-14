import './report.scss'

import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { ReportMenu } from "./reportMenu"
import { useRoleValidate } from '../../../hooks/useRoleValidate'
import { NotAllowed } from '../../handleComponents/notAllowed'

export const Report = (props) => {
    const roleValidation = useRoleValidate();
    const [activeNav, setActiveNav] = useState('project')
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('report')
    }, [setActiveTab])

    if (!roleValidation(['head', 'admin', 'developer'])) return <NotAllowed/>

    return (
        <>
            <ReportMenu activeNav={activeNav}/>
            <div className="page" style={{padding:'10px 15px'}}><Outlet context={[activeNav, setActiveNav]}/></div>
        </>
    )
}