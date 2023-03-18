
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch, useSelector } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
import { allDepartmentsCh, allDirectionsCh, allManufacturersCh, allPositionsCh, allRolesCh, allRsTypesCh, allUsersCh, serviceCh } from "../../redux/store/globalSlice"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../../redux/api/userApi"
import { useGetOptionsQuery } from "../../redux/api/optionApi"
import { useGetIsServiceQuery } from "../../redux/api/settingsApi"
import { ServicePage } from "../servicePage/servicePage"
export const Screen = () => {
	
	const {role} = useSelector(state => state.auth)
	const {service} = useSelector(state => state.global)
	
	const dispatch = useDispatch();
	const {data, isSuccess} = useGetProjectsQuery('false');
	const {data: usersData, isSuccess: userSuccess} = useGetUsersQuery()
	const {data: optionsData, isSuccess: optionsSuccess} = useGetOptionsQuery()
	const {data: serviceData, isSuccess: serviceSuccess} = useGetIsServiceQuery();
	
	if(isSuccess && data.projects) {
		dispatch(projectsCh(data.projects))
	}
	if(userSuccess && usersData.users) {
		dispatch(allUsersCh(usersData.users))
	}

	if(serviceSuccess && serviceData?.serviceStatus) {
		dispatch(serviceCh(serviceData.serviceStatus))
	}

	if(optionsSuccess && optionsData.options){
		const manufacturers = optionsData.options.filter(item=>item.name === 'manufacturer')
		const rsTypes = optionsData.options.filter(item=>item.name === 'rsType');
		const departments = optionsData.options.filter(item=>item.name === 'department');
		const directions = optionsData.options.filter(item=>item.name === 'direction');
		const positions = optionsData.options.filter(item=>item.name === 'position');
		const roles = optionsData.options.filter(item=>item.name === 'role');

		
		dispatch(allManufacturersCh(manufacturers[0].options));
		dispatch(allRsTypesCh(rsTypes[0].options));
		dispatch(allDepartmentsCh(departments[0].options));
		dispatch(allDirectionsCh(directions[0].options));
		dispatch(allPositionsCh(positions[0].options));
		dispatch(allRolesCh(roles[0].options));
	}
	const [activeTab, setActiveTab] = useState('')

	if (service && !['admin', 'developer'].includes(role)) {
		return <ServicePage/>
	}

	return(
		<>
		<Header activeTab = {activeTab}/>
		<div className="screen">
			<Outlet context={[activeTab, setActiveTab]}/>
		</div>
		</>
	)
}
