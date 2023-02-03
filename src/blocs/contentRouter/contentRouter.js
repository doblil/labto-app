import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Prep } from "../screens/prep/prep"

import { AuthForm } from "../authForm/authForm"
import { Screen } from "../screens/screen"
import { Reag } from "../screens/prep/table/reagent/reag"
import { AddReag } from '../screens/prep/add/addReag'
import { Profile } from "../screens/profile/profile"
import { Purchases } from "../screens/purchases/purchases"
import { Report } from "../screens/report/report"
import { ProfileInfo } from "../screens/profile/profileInfo"
import { Drafts } from "../screens/profile/drafts/drafts"
import { ProfileHistory } from "../screens/profile/profileHistory"
import { Orders } from "../screens/profile/orders/orders"
import { Rs } from "../screens/prep/table/rs/rs"
import { ConfirmMessage } from "../confirmMessage/confirmMessage"
import { ReportAnnual } from "../screens/report/reportAnnual"
import { Users } from "../screens/admin/users/users"
import { Admin } from "../screens/admin/admin"
import { Projects } from "../screens/admin/projects/projects"
import { Options } from "../screens/admin/options/options"
import { PurchasesApplications } from "../screens/purchases/purchasesApplications"
import { PurchasesUnderway } from "../screens/purchases/purchasesUnderway"
import { PurchasesArchive } from "../screens/purchases/purchasesArchive"
export const ContentRouter = () => {
  
  const {isAuth} = useSelector(state => state.auth);
  
  if(!isAuth) return <AuthForm/>

  return (
    
    <Routes>
      <Route path="/" element = {<Screen/>}>
        <Route path="/admin" element={<Admin/>}>
          <Route path="/admin/list" element={<Users/>}/>
          <Route path="/admin/projects" element={<Projects/>}/>
          <Route path="/admin/options" element={<Options/>}/>
        </Route>
        <Route path="/profile" element={<Profile/>}>
            <Route path="/profile/info" element={<ProfileInfo/>}/>
            <Route path="/profile/drafts" element={<Drafts/>}/>
            <Route path="/profile/history" element={<ProfileHistory/>}/>
            <Route path="/profile/orders" element={<Orders/>}/>
        </Route>
        <Route path="/purchases" element={<Purchases/>}>
          <Route path="/purchases/applications" element={<PurchasesApplications/>}/>
          <Route path="/purchases/underway" element={<PurchasesUnderway/>}/>
          <Route path="/purchases/archive" element={<PurchasesArchive/>}/>
        </Route>
        <Route path="/report" element={<Report/>}/>
        <Route path="/prep" element ={<Prep/>}>
          <Route path="/prep/reag" element = {<Reag reqParams = {{type: 'reag', isolate: 'false'}}/>}/>
          <Route path="/prep/reag/isolate" element = {<Reag reqParams = {{type: 'reag', isolate: 'true'}}/>}/>
          <Route path="/prep/rs" element = {<Rs reqParams = {{type: 'rs', isolate: 'false'}}/>}/>
          <Route path="/prep/rs/isolate" element = {<Rs reqParams = {{type: 'rs', isolate: 'true'}}/>}/>
          <Route path="/prep/subst" element = {<Reag reqParams = {{type: 'subst', isolate: 'false'}}/>}/>
          <Route path="/prep/subst/isolate" element = {<Reag reqParams = {{type: 'subst', isolate: 'true'}}/>}/>
          <Route path="/prep/addReagent" element = {<AddReag/>}/>
        </Route>
        <Route path="/report" element ={<Report/>}>
          <Route path="/report/annual" element = {<ReportAnnual/>}/>
        </Route>
        <Route path="/confirm" element={<ConfirmMessage/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
      </Route>
    </Routes>
    
  )
}
