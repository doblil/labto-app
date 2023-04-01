
import '../../../sass/sassTemplates/btn.scss'
import '../../../sass/sassTemplates/info.scss'
import '../../../sass/sassTemplates/table.scss'
import { useState } from 'react'
import { EquipmentTable} from './equipmentTable'
import { EquipmentFilter } from './equipmentFilter'

export const EquipmentPage = (props) => {
    
    // const {reqParams} = props
    
    // const [currentFavorite, setCurrentFavorite] = useState(0)
    // const [nameSearch, setNameSearch] = useState('');
    // const [casSearch, setCasSearch] = useState('');
    // const [catSearch, setCatSearch] = useState('');
    // const [restSearch, setRestSearch] = useState(''); // 'instock', 'null' 
    // const [favoriteSearch, setFavoriteSearch] = useState(false);
    // const [expSearch, setExpSearch] = useState(''); // 'valid', 'invalid'
    const [totalCount, setTotalCount] = useState('');


    return(
        <div className="info">
            <EquipmentFilter 
                // currentFavorite = {currentFavorite}
                // exp = {expSearch}
                // rest = {restSearch}
                // favorite = {favoriteSearch} 
                // setNameSearch = {setNameSearch}
                // setCasSearch = {setCasSearch}
                // setCatSearch = {setCatSearch}
                // setRestSearch = {setRestSearch}
                // setFavoriteSearch = {setFavoriteSearch}
                // setExpSearch = {setExpSearch}
                // nameSearch = {nameSearch}
                // catSearch = {catSearch}
                // casSearch = {casSearch}
            />
            <div className="overflow overflow__mt50 table">
                <div className="table__line"></div>
                <EquipmentTable
                    setTotalCount = {setTotalCount}
                    // setCurrentFavorite = {setCurrentFavorite}
                    // reqParams = {reqParams}
                    // nameSearch = {nameSearch}
                    // casSearch = {casSearch}
                    // catSearch = {catSearch}
                    // restSearch = {restSearch}
                    // favoriteSearch = {favoriteSearch}
                    // expSearch = {expSearch}
                />
            </div>
            <div className="info__count"> {totalCount || 0} наименований</div>
          
        </div>
    )
  }