
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
import { allManufacturersCh, allRsTypesCh, allUsersCh } from "../../redux/store/globalSlice"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../../redux/api/userApi"
import { useGetOptionsQuery } from "../../redux/api/optionApi"
export const Screen = () => {
  const dispatch = useDispatch();
  const {data, isSuccess} = useGetProjectsQuery();
  const {data: usersData, isSuccess: userSuccess} = useGetUsersQuery()
  const {data: optionsData, isSuccess: optionsSuccess} = useGetOptionsQuery()

  if(isSuccess && data.projects) {
    dispatch(projectsCh(data.projects))
  }
  if(userSuccess && usersData.users) {
    dispatch(allUsersCh(usersData.users))
  }
  if(optionsSuccess && optionsData.options && optionsData.options){
    const manufacturers = optionsData.options.filter(item=>item.name === 'manufacturer')
    const rsTypes = optionsData.options.filter(item=>item.name === 'rsType')

    if(manufacturers.length && rsTypes.length){
      dispatch(allManufacturersCh(manufacturers[0].options));
      dispatch(allRsTypesCh(rsTypes[0].options));
    }
  }
  const [activeTab, setActiveTab] = useState('')

  return(
    <>
      <Header activeTab = {activeTab}/>
      <div className="screen">
        <Outlet context={[activeTab, setActiveTab]}/>
      </div>
    </>
  )
}
