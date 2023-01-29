
import { Desc } from "../desc"
import { ReagPage } from "./reagPage"

export const Reag = (props) => {

   const {reqParams} = props
   
   return(
        <>
			<div className="page-divided">
				<ReagPage reqParams = {reqParams}/>
				<Desc/>
			</div>
        </>
        )

}