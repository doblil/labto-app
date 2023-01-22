
import { Desc } from "../desc"
import { RsPage } from "./rsPage"

export const Rs = (props) => {

   const {reqParams} = props
   
   return(
         <>
            <RsPage reqParams={reqParams}/>
            <Desc/>
         </>
         )

}