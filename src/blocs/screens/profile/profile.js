import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export const Profile = () => {
    
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('profile')
    }, [setActiveTab])

    return(
        <>
        </>
    )
}