import { useEffect, useState } from "react"
import { EquipmentMenu } from "./equipmentMenu"
import { EquipmentWrap } from "./equipmentWrap"

import { Outlet, useOutletContext } from "react-router-dom"

export const Equipment = (props) => {
    const [activeNav, setActiveNav] = useState('')
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('equipment')
    }, [setActiveTab])
    return(
        <>
            <EquipmentMenu activeNav={activeNav} setActiveNav={setActiveNav}/>
            <Outlet context={[activeNav, setActiveNav]}/>
        </>
    )
}