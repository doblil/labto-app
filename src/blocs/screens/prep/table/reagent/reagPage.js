import '../../prep.scss'
import '../../../../../sass/sassTemplates/btn.scss'
import '../../../../../sass/sassTemplates/info.scss'
import '../../../../../sass/sassTemplates/table.scss'
import { useState } from 'react'
import { ReagFilter } from './reagFilter'
import { ReagTable } from './reagTable'

export const ReagPage = (props) => {
    
    const {reqParams} = props
    

    const [nameSearch, setNameSearch] = useState('');
    const [casSearch, setCasSearch] = useState('');
    const [catSearch, setCatSearch] = useState('');
    const [restSearch, setRestSearch] = useState(''); // 'instock', 'null' 
    const [favoriteSearch, setFavoriteSearch] = useState(false);
    const [expSearch, setExpSearch] = useState(''); // 'valid', 'invalid'



    return(
        <div className="info">
            <ReagFilter 
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
            <div className="overflow overflow__mt50 table">
                <div className="table__line"></div>
                <ReagTable
                    reqParams = {reqParams}
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