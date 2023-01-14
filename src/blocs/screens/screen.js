import { PrepDescBloc } from "./prep/table/prepDescBloc"
import { PrepInfoBloc } from "./prep/table/prepInfoBloc"
import { PrepMenu } from "./prep/prepMenu"
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch, useSelector } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
import { AddReag } from "./prep/add/addReag"
import { Outlet } from "react-router-dom"
export const Screen = () => {
  const dispatch = useDispatch();
  const {projects} = useSelector(state => state.project)
  const {data, isSuccess} = useGetProjectsQuery();

  if(isSuccess && data.projects) {
    dispatch(projectsCh(data.projects))
  }

  console.log(projects);
  
  return(
    <>
      <Header/>
      <div className="screen">
        <Outlet/>
      </div>
    </>
  )
}