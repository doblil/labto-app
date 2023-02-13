
import '../../../../../sass/sassTemplates/btn.scss'
import '../../../../../sass/sassTemplates/info.scss'
import '../../../../../sass/sassTemplates/table.scss'
import { ColumnFilter } from './columnFilter'
import { ColumnTable } from './columnTable'

export const ColumnPage = (props) => {
    return(
        <div className="info">
            <ColumnFilter/>
            <div className="overflow overflow__mt50 table">
                <div className="table__line"></div>
                <ColumnTable/>
            </div>
          
        </div>
    )
  }