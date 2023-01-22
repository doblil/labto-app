
import { Desc } from "../desc"
import { ReagPage } from "./reagPage"

export const Reag = (props) => {

   const {reqParams} = props
   
   return(
         <>
            <ReagPage reqParams = {reqParams}/>
            <Desc/>
         </>
         )

}