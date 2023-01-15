import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export const Purchases = () => {
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('purchases')
    }, [setActiveTab])
    return(
        <>
        </>
    )
}