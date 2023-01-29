
import { Desc } from "../desc"
import { RsPage } from "./rsPage"

export const Rs = (props) => {

   const {reqParams} = props
   
   return(
         <>
            <div className="page-divided">
               <RsPage reqParams={reqParams}/>
               <Desc/>
            </div>

         </>
         )

}