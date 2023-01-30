import { useEffect } from "react"
import { PurchasesMenu } from "./purchasesMenu"

import { Outlet, useOutletContext } from "react-router-dom"

export const Purchases = (props) => {
    const {activeNav} = props
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('purchases')
    }, [setActiveTab])
    return(
        <>
            <PurchasesMenu activeNav={activeNav}/>
            <div className="page"><Outlet/></div>
        </>
    )
}