import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Prep } from "../screens/prep/prep"

import { AuthForm } from "../authForm/authForm"
import { Screen } from "../screens/screen"
import { ReagentTable } from "../screens/prep/table/reagentTable"
import { AddReag } from '../screens/prep/add/addReag'
import { Employers } from "../screens/employers/employers"
import { Profile } from "../screens/profile/profile"
import { Purchases } from "../screens/purchases/purchases"
import { Report } from "../screens/report/report"
export const ContentRouter = () => {
  
  const {isAuth} = useSelector(state => state.auth);
  
  if(!isAuth) return <AuthForm/>

  return (
    
    <Routes>
      <Route path="/" element = {<Screen/>}>
        <Route path="/employers" element={<Employers/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/prep" element ={<Prep/>}>
          <Route path="/prep/reagentTable" element = {<ReagentTable/>}/>
          <Route path="/prep/addReagent" element = {<AddReag/>}/>
        </Route>
      </Route>

      

    </Routes>
    
  )
}