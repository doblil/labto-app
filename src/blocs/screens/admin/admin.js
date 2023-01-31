import { useEffect } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { AdminMenu } from "./adminMenu"

export const Admin = (props) => {
    const {activeNav} = props
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('list')
    }, [setActiveTab])
    return(
        <>
            <AdminMenu activeNav={activeNav}/>
            <div className="page"><Outlet/></div>
        </>
    )
}