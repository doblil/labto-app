import './prep.scss'
import '../../../sass/sassTemplates/info.scss'
import '../../../sass/sassTemplates/table.scss'
import { useState } from 'react'
import { PrepReagFilter } from './prepReagFilter'
import { PrepReagTable } from './prepReagTable'

export const PrepInfoBloc = () => {
    
    const [nameSearch, setNameSearch] = useState('');
    const [casSearch, setCasSearch] = useState('');
    const [catSearch, setCatSearch] = useState('');
    const [restSearch, setRestSearch] = useState(''); // 'instock', 'null' 
    const [favoriteSearch, setFavoriteSearch] = useState(false);
    const [expSearch, setExpSearch] = useState(''); // 'valid', 'invalid'
    
    console.log(nameSearch, casSearch, restSearch, catSearch, favoriteSearch, expSearch)


    return(
        <div className="info">
            <PrepReagFilter 
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
            <div className="table">
                <PrepReagTable
                    nameSearch = {nameSearch}
                    casSearch = {casSearch}
                    catSearch = {catSearch}
                    restSearch = {restSearch}
                    favoriteSearch = {favoriteSearch}
                    expSearch = {expSearch}
                />
            </div>
          
        </div>
    )
  }