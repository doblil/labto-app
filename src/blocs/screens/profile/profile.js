import './profile.scss'

import { useEffect, useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { ProfileMenu } from "./profileMenu"

export const Profile = () => {
    
    const [activeTab, setActiveTab] = useOutletContext()
    const [activeNav, setActiveNav] = useState('info')
    useEffect(() => {
        setActiveTab('profile')
    }, [setActiveTab])

    

    return(
        <>
            <ProfileMenu activeNav={activeNav}/>
            <div className="profile"><Outlet context={[activeNav, setActiveNav]}/></div>
        </>
    )
}