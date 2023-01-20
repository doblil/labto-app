
import { ReagDesc } from "./reagDesc"
import { ReagPage } from "./reagPage"

export const Reag = (props) => {

   const {reqParams} = props
   
   return(
         <>
            <ReagPage reqParams = {reqParams}/>
            <ReagDesc/>
         </>
         )

}