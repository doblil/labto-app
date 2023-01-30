import { useEffect } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { EmployersMenu } from "./employersMenu"

export const Employers = (props) => {
    const {activeNav} = props
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('employers')
    }, [setActiveTab])
    return(
        <>
            <EmployersMenu activeNav={activeNav}/>
            <div className="page"><Outlet/></div>
        </>
    )
}