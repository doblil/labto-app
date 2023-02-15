import { useEffect, useState } from "react"
import { PurchasesMenu } from "./purchasesMenu"

import { Outlet, useOutletContext } from "react-router-dom"

export const Purchases = (props) => {
    const [activeNav, setActiveNav] = useState('')
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('purchases')
    }, [setActiveTab])
    return(
        <>
            <PurchasesMenu activeNav={activeNav} setActiveNav={setActiveNav}/>
            <div className="page"><Outlet context={[activeNav, setActiveNav]}/></div>
        </>
    )
}