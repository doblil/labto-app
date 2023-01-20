
import { RsDesc } from "./rsDesc"
import { RsPage } from "./rsPage"

export const Rs = (props) => {

   const {reqParams} = props
   
   return(
         <>
            <RsPage reqParams={reqParams}/>
            <RsDesc/>
         </>
         )

}