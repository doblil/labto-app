import './prep.scss'
import '../../../sass/sassTemplates/info.scss'
import '../../../sass/sassTemplates/table.scss'
import { PrepReagItem } from './prepReagItem'
import { useState } from 'react'
import { PrepReagFilter } from './prepReagFilter'
import { PrepReagTable } from './prepReagTable'

export const PrepInfoBloc = () => {
    
    
    return(
        <div className="info">
            <PrepReagFilter/>
            <div className="table">
                <PrepReagTable/>
            </div>
          
        </div>
    )
  }