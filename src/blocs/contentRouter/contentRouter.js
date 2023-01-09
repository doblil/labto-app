import { Route, Routes } from "react-router-dom"
// import { PrepScreen } from "../prepScreen/prepScreen"
// import { Profile } from "../profile/profile"
// import { Reporting } from "../reporting/reporting"
// import { Purchases } from "../purchases/purchases"
// import { Employers } from "../employers/employers"
import { AuthForm } from "../authForm/authForm"
import { Screen } from "../screens/screen"
import { Start } from "../start/start"
export const ContentRouter = () => {
  return (
    <>
    <Routes>
      <Route index element = {<Start/>}/>       

  
      {/* <Route index element = {<AuthForm/>}/>
      <Route path="/preparator" element = {<PrepScreen/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path = "/reporting" element={<Reporting/>}/>
      <Route path = "/purchases" element={<Purchases/>}/>
      <Route path="/employers" element={<Employers/>}/> */}


    </Routes>
    </>
  )
}