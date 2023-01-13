import { Outlet } from "react-router-dom"
import { PrepMenu } from "./prepMenu"

export const Prep = () => {
    return(
        <>
            <PrepMenu/>
            <Outlet/>
        </>
    )
}