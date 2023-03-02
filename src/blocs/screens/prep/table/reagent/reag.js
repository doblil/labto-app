
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useMenuContext } from "../../../../../hooks/useMenuContext";
import { Desc } from "../desc"
import { ReagPage } from "./reagPage"

export const Reag = (props) => {
	const {reqParams} = props
	const [activeNav, setActiveNav] = useOutletContext();
	const active = useMenuContext(reqParams)
	useEffect(() => {
        setActiveNav(active)
    }, [reqParams])
   
   return(
        <>
			<div className="page-divided">
				<ReagPage reqParams = {reqParams}/>
				<Desc/>
			</div>
        </>
        )

}