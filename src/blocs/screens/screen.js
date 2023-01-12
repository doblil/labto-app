import { PrepDescBloc } from "./prep/prepDescBloc"
import { PrepInfoBloc } from "./prep/prepInfoBloc"
import { PrepMenu } from "./prep/prepMenu"
import { Header } from "../header/header"

import './screen.scss'
import { useGetProjectsQuery } from "../../redux/api/projectApi"
import { useDispatch, useSelector } from "react-redux"
import { projectsCh } from "../../redux/store/projectSlice"
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
          <PrepMenu/>
          <PrepInfoBloc/>
          <PrepDescBloc />
      </div>
    </>
  )
}