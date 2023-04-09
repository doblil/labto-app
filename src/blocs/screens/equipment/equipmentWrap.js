import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useMenuContext } from "../../../hooks/useMenuContext";
import { EquipmentDesc } from "./equipmentDesc";
import { EquipmentPage } from "./equipmentPage";

export const EquipmentWrap = (props) => {
    
    const {reqParams} = props
	const [activeNav, setActiveNav] = useOutletContext();
	useEffect(() => {
        setActiveNav(reqParams)
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