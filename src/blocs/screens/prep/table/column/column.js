import { ColumnDesc } from "./columnDesc"
import { ColumnPage } from "./columnPage"

export const Column = (props) => {
    return(
        <>
        	<div className="page-divided">
				<ColumnPage reqParams = {props.reqParams}/>
				<ColumnDesc/>
			</div>

        </>
    )
}