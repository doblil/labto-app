
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
import { allUsersCh } from "../../redux/store/globalSlice"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { useGetUsersQuery } from "../../redux/api/userApi"
export const Screen = () => {
  const dispatch = useDispatch();
  const {data, isSuccess} = useGetProjectsQuery();
  const {data: usersData, isSuccess: userSuccess} = useGetUsersQuery(

  )
  if(isSuccess && data.projects) {
    dispatch(projectsCh(data.projects))
  }
  if(userSuccess && usersData.users) {
    dispatch(allUsersCh(usersData.users))
    console.log(usersData.users)
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