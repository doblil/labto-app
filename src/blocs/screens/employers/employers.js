import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export const Employers = () => {
    
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('employers')
    }, [setActiveTab])
    
    return (
        <>
        </>
    )
}