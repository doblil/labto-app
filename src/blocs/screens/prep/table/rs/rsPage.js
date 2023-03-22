
import '../../../../../sass/sassTemplates/btn.scss'
import '../../../../../sass/sassTemplates/info.scss'
import '../../../../../sass/sassTemplates/table.scss'
import { useState } from 'react'
import { RsFilter } from './rsFilter'
import { RsTable } from './rsTable'

export const RsPage = (props) => {
    
    const {reqParams} = props

    const [currentFavorite, setCurrentFavorite] = useState(0);
    const [nameSearch, setNameSearch] = useState('');
    const [casSearch, setCasSearch] = useState('');
    const [catSearch, setCatSearch] = useState('');
    const [restSearch, setRestSearch] = useState(''); // 'instock', 'null' 
    const [favoriteSearch, setFavoriteSearch] = useState(false);
    const [expSearch, setExpSearch] = useState(''); // 'valid', 'invalid'



    return(
        <div className="info">
            <RsFilter 
                currentFavorite = {currentFavorite}
                exp = {expSearch}
                rest = {restSearch}
                favorite = {favoriteSearch} 
                setNameSearch = {setNameSearch}
                setCasSearch = {setCasSearch}
                setCatSearch = {setCatSearch}
                setRestSearch = {setRestSearch}
                setFavoriteSearch = {setFavoriteSearch}
                setExpSearch = {setExpSearch}
            />
            <div className="overflow table">
                <div className="table__line"></div>
                <RsTable
                    setCurrentFavorite = {setCurrentFavorite}
                    reqParams = {reqParams}
                    nameSearch = {nameSearch}
                    casSearch = {casSearch}
                    catSearch = {catSearch}
                    restSearch = {restSearch}
                    favoriteSearch = {favoriteSearch}
                    expSearch = {expSearch}
                />
            </div>
            <div className="info__count"> 200 наименований</div>
        </div>
    )
  }