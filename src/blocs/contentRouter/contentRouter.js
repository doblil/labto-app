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
import { ReportProjects } from "../screens/report/reportProjects"
import { ReportDirection } from "../screens/report/reportDirection"
import { Users } from "../screens/admin/users/users"
import { Admin } from "../screens/admin/admin"
import { Projects } from "../screens/admin/projects/projects"
import { Options } from "../screens/admin/options/options"
import { PurchasesList } from "../screens/purchases/purchasesList"
import { Column } from "../screens/prep/table/column/column"
import { AddColumn } from "../screens/prep/add/addColumn"
import { SetMobileApp } from "../screens/admin/setMobileApp/setMobileApp"
import { Backup } from "../screens/admin/backup/backup"
import { UserHistory } from "../screens/admin/userHistory/userHistory"
import { Equipment } from "../screens/equipment/equipment"
import { EquipmentWrap } from "../screens/equipment/equipmentWrap"
import { EquipmentAdd } from "../screens/equipment/equipmentAdd"


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
				<Route path="/admin/setMobileApp" element={<SetMobileApp/>}/>
				<Route path="/admin/backup" element={<Backup/>}/>
				<Route path="/admin/userHistory" element={<UserHistory/>}/>

			</Route>
			<Route path="/profile" element={<Profile/>}>
				<Route path="/profile/info" element={<ProfileInfo/>}/>
				<Route path="/profile/drafts" element={<Drafts/>}/>
				<Route path="/profile/history" element={<ProfileHistory/>}/>
				<Route path="/profile/orders" element={<Orders/>}/>
			</Route>
			<Route path="/purchases/" element={<Purchases/>}>
				<Route path="/purchases/my/allMy" element={<PurchasesList status = {'allMy'}/>}/>
				<Route path="/purchases/my/newMy" element={<PurchasesList status = {'newMy'}/>}/>
				<Route path="/purchases/my/activeMy" element={<PurchasesList status = {'activeMy'}/>}/>
				<Route path="/purchases/my/completedMy" element={<PurchasesList status = {'completedMy'}/>}/>
				<Route path="/purchases/my/archiveMy" element={<PurchasesList status = {'archiveMy'}/>}/>
				<Route path="/purchases/all/all" element={<PurchasesList status = {'all'}/>}/>
				<Route path="/purchases/all/archive" element={<PurchasesList status = {'archive'}/>}/>

			</Route>
			<Route path="/report" element={<Report/>}>
				<Route path="/report/projects" element={<ReportProjects />}/>
				<Route path="/report/department" element={<ReportDirection />}/>
			</Route>
			<Route path="/prep" element ={<Prep/>}>
				<Route path="/prep/reag" element = {<Reag reqParams = {{type: 'reag', isolate: 'false'}}/>}/>
				<Route path="/prep/reag/isolate" element = {<Reag reqParams = {{type: 'reag', isolate: 'true'}}/>}/>
				<Route path="/prep/rs" element = {<Rs reqParams = {{type: 'rs', isolate: 'false'}}/>}/>
				<Route path="/prep/rs/isolate" element = {<Rs reqParams = {{type: 'rs', isolate: 'true'}}/>}/>
				<Route path="/prep/subst" element = {<Reag reqParams = {{type: 'subst', isolate: 'false'}}/>}/>
				<Route path="/prep/subst/isolate" element = {<Reag reqParams = {{type: 'subst', isolate: 'true'}}/>}/>
				<Route path="/prep/column/hplc" element = {<Column reqParams = {{type: 'hplc', isolate: 'false'}}/>}/>
				<Route path="/prep/column/gc" element = {<Column reqParams = {{type: 'gc', isolate: 'false'}}/>}/>
				<Route path="/prep/column/isolate" element = {<Column reqParams = {{type: 'all', isolate: 'true'}}/>}/>
				<Route path="/prep/addReagent" element = {<AddReag/>}/>
				<Route path="/prep/addColumn" element = {<AddColumn/>}/>
			</Route>
			<Route path="/equipment/" element ={<Equipment/>}>
				<Route path="/equipment/all" element = {<EquipmentWrap reqParams='all'/>}/>
				<Route path="/equipment/hplc" element = {<EquipmentWrap reqParams='hplc'/>}/>
				<Route path="/equipment/gc" element = {<EquipmentWrap reqParams='gc'/>}/>
				<Route path="/equipment/scales" element = {<EquipmentWrap reqParams='scales'/>}/>
				<Route path="/equipment/spectometer" element = {<EquipmentWrap reqParams='spectometer'/>}/>
				<Route path="/equipment/titrator" element = {<EquipmentWrap reqParams='titrator'/>}/>
				<Route path="/equipment/climate" element = {<EquipmentWrap reqParams='climate'/>}/>
				<Route path="/equipment/termal" element = {<EquipmentWrap reqParams='termal'/>}/>
				<Route path="/equipment/handle" element = {<EquipmentWrap reqParams='handle'/>}/>
				<Route path="/equipment/other" element = {<EquipmentWrap reqParams='other'/>}/>
				<Route path="/equipment/isolate" element = {<EquipmentWrap reqParams='isolate'/>}/>
				<Route path="/equipment/add" element = {<EquipmentAdd/>}/>
			</Route>
			<Route path="/confirm" element={<ConfirmMessage/>}/>
		</Route>
    </Routes>
    
  )
}
