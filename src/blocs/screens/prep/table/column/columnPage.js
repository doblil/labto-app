
import { useState } from 'react'
import '../../../../../sass/sassTemplates/btn.scss'
import '../../../../../sass/sassTemplates/info.scss'
import '../../../../../sass/sassTemplates/table.scss'
import { ColumnFilter } from './columnFilter'
import { ColumnTable } from './columnTable'

export const ColumnPage = (props) => {
    const [currentFavorite, setCurrentFavorite] = useState(0)
    const [nameSearch, setNameSearch] = useState('');
    const [projectSearch, setProjectSearch] = useState('');
    const [iUse, setIUse] = useState(false);
    const [favoriteSearch, setFavoriteSearch] = useState(false)

    return(
        <div className="info">
            <ColumnFilter
                currentFavorite = {currentFavorite} 
                setNameSearch = {setNameSearch}
                setProjectSearch = {setProjectSearch}
                iUse = {iUse}
                setIUse = {setIUse}
                favoriteSearch = {favoriteSearch}
                setFavoriteSearch = {setFavoriteSearch}
                projectSearch = {projectSearch}
                nameSearch = {nameSearch}
                
            />
            <div className="overflow overflow__mt50 table">
                <div className="table__line"></div>
                <ColumnTable 
                    reqParams = {props.reqParams}
                    nameSearch = {nameSearch}
                    projectSearch = {projectSearch}
                    iUse = {iUse}
                    favoriteSearch = {favoriteSearch}
                    setCurrentFavorite = {setCurrentFavorite}
                />
            </div>
          
        </div>
    )
  }