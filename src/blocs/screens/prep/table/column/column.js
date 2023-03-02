import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useMenuContext } from "../../../../../hooks/useMenuContext";
import { ColumnDesc } from "./columnDesc"
import { ColumnPage } from "./columnPage"

export const Column = (props) => {
    
    const {reqParams} = props
	const [activeNav, setActiveNav] = useOutletContext();
	const active = useMenuContext(reqParams)
	useEffect(() => {
        setActiveNav(active)
    }, [reqParams])

    return(
        <>
        	<div className="page-divided">
				<ColumnPage reqParams = {props.reqParams}/>
				<ColumnDesc/>
			</div>

        </>
    )
}