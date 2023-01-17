import { useEffect } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { Barcode } from "../../barcode/barcode"
import { PrepMenu } from "./prepMenu"

export const Prep = () => {
    const [activeTab, setActiveTab] = useOutletContext()
    useEffect(() => {
        setActiveTab('prep')
    }, [setActiveTab])


    return(
        <>
            <PrepMenu/>
            <Outlet/>
            <Barcode/>
        </>
    )
}