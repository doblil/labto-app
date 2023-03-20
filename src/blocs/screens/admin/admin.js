import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { useRoleValidate } from "../../../hooks/useRoleValidate"
import { AdminMenu } from "./adminMenu"
import { NotAllowedPage } from "../../notAllowedPage/notAllowedPage.js"
 


export const Admin = (props) => {
    const roleValidation = useRoleValidate();
    const [activeTab, setActiveTab] = useOutletContext();

    const [activeNav, setActiveNav] = useState('info')
    useEffect(() => {
        setActiveTab('admin')
    }, [setActiveTab]);

    if(!roleValidation(['admin', 'developer', 'head'])) return <NotAllowedPage/>

    return(
        <>
            <AdminMenu activeNav={activeNav}/>
            <div className="page"><Outlet context={[activeNav, setActiveNav]}/></div>
        </>
    )
}