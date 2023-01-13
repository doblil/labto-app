import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Prep } from "../screens/prep/prep"
// import { Profile } from "../profile/profile"
// import { Reporting } from "../reporting/reporting"
// import { Purchases } from "../purchases/purchases"
// import { Employers } from "../employers/employers"
import { AuthForm } from "../authForm/authForm"
import { Screen } from "../screens/screen"
import { ReagentTable } from "../screens/prep/reagentTable/reagentTable"
import { AddReag } from '../screens/prep/add/addReag'
export const ContentRouter = () => {
  
  const {isAuth} = useSelector(state => state.auth);
  
  if(!isAuth) return <AuthForm/>

  return (
    
    <Routes>
      <Route path="/" element = {<Screen/>}>
        <Route path="/prep" element ={<Prep/>}>
          <Route path="/prep/reagentTable" element = {<ReagentTable/>}/>
          <Route path="/prep/addReagent" element = {<AddReag/>}/>
        </Route>
      </Route>

      

    </Routes>
    
  )
}