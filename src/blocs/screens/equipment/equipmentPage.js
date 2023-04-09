
import '../../../sass/sassTemplates/btn.scss'
import '../../../sass/sassTemplates/info.scss'
import '../../../sass/sassTemplates/table.scss'
import { useState } from 'react'
import { EquipmentTable} from './equipmentTable'
import { EquipmentFilter } from './equipmentFilter'

export const EquipmentPage = (props) => {
    
    const {reqParams} = props
    console.log(reqParams)
    const [currentFavorite, setCurrentFavorite] = useState(0)
    const [nameSearch, setNameSearch] = useState('');
    const [snSearch, setSnSearch] = useState('');
    const [invnSearch, setInvnSearch] = useState('');
    const [favoriteSearch, setFavoriteSearch] = useState(false);
    const [statusSearch, setStatusSearch] = useState('') // 'all', 'ready' , 'unready'
    const [verifySearch, setVerifySearch] = useState('') // 'all', 'verified' , 'unverified'
    const [totalCount, setTotalCount] = useState('');

    console.log('current favorite: ', currentFavorite);
    return(
        <div className="info">
            <EquipmentFilter 
                currentFavorite = {currentFavorite}
                favoriteSearch = {favoriteSearch}
                setFavoriteSearch = {setFavoriteSearch}
                nameSearch = {nameSearch}
                setNameSearch = {setNameSearch}
                snSearch = {snSearch}
                setSnSearch = {setSnSearch}
                invnSearch = {invnSearch}
                setInvnSearch = {setInvnSearch} 
                statusSearch = {statusSearch}
                setStatusSearch = {setStatusSearch}
                verifySearch = {verifySearch}
                setVerifySearch = {setVerifySearch}
                
            />
            <div className="overflow overflow__mt50 table">
                <div className="table__line"></div>
                <EquipmentTable
                    setTotalCount = {setTotalCount}
                    setCurrentFavorite = {setCurrentFavorite}
                    reqParams = {reqParams}
                    nameSearch = {nameSearch}
                    snSearch = {snSearch}
                    invnSearch = {invnSearch}
                    statusSearch = {statusSearch}
                    verifySearch = {verifySearch}
                    favoriteSearch = {favoriteSearch}   
                />
            </div>
            <div className="info__count"> {totalCount || 0} наименований</div>
          
        </div>
    )
  }