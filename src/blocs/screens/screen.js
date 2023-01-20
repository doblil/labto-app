
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch, useSelector } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
import { AddReag } from "./prep/add/addReag"
import { Outlet } from "react-router-dom"
import { useState } from "react"
export const Screen = () => {
  const dispatch = useDispatch();
  const {projects} = useSelector(state => state.project)
  const {data, isSuccess} = useGetProjectsQuery();

  if(isSuccess && data.projects) {
    dispatch(projectsCh(data.projects))
  }

  console.log(projects);
  
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