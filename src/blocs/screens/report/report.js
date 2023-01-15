import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export const Report = () => {
    
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('report')
    }, [setActiveTab])
    
    return (
        <>
        </>
    )
}