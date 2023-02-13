import { ColumnDesc } from "./columnDesc"
import { ColumnPage } from "./columnPage"

export const Column = () => {
    return(
        <>
        	<div className="page-divided">
				<ColumnPage/>
				<ColumnDesc/>
			</div>

        </>
    )
}