import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useMenuContext } from "../../../../../hooks/useMenuContext";
import { EquipmentDesc } from "./equipmentDesc";
import { EquipmentPage } from "./equipmentPage";

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
				<EquipmentPage reqParams = {props.reqParams}/>
				<EquipmentDesc/>
			</div>

        </>
    )
}