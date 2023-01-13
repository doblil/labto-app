import { PrepReagItem } from "./prepReagItem"
import { useGetReagentsQuery } from "../../../../redux/api/reagentApi"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { favoriteCh } from "../../../../redux/store/authSlice"
import { activeReagentCh } from "../../../../redux/store/activeReagSlice"


export const PrepReagTable = (props) => {


    const {catSearch, nameSearch, casSearch, expSearch, favoriteSearch, restSearch} = props
    

    const reqParams = {
        type: 'reag',
        carantin: 'false'
    }


let content = <></>
const dispatch = useDispatch();
const { favorite } = useSelector(state => state.auth)
const [activeItem, setActiveItem] = useState(null)
const {data, isLoading, isSuccess} = useGetReagentsQuery(reqParams)

const handleActiveItem = (id) => {
    setActiveItem(id);
    dispatch(activeReagentCh(id))
}

const handleFilter = (arr = []) => {;
    if (catSearch) arr = arr.filter(item => item.cat.toLowerCase().includes(catSearch.toLowerCase())) ;
    if (casSearch) arr = arr.filter(item => item.cas.includes(casSearch)) ;
    if (nameSearch) arr = arr.filter(item => item.name.toLowerCase().includes(nameSearch.toLowerCase())) ;
    if (expSearch && expSearch === 'valid') arr = arr.filter(item => Date.parse(item.toDate) > Date.now()) ;
    if (expSearch && expSearch === 'invalid') arr = arr.filter(item => Date.parse(item.toDate) < Date.now()) ;
    if (favoriteSearch) arr = arr.filter(item => favorite.includes(item._id)) ;
    if (restSearch && restSearch === 'null') arr = arr.filter(item => item.restUnits === 0);
    if (restSearch && restSearch === 'instock') arr = arr.filter(item => item.restUnits > 0);
    return arr
} 

if (isLoading) {content = <h5>Загрузка...</h5>}
if (isSuccess) {content = handleFilter(data.reagents)
.map(item => {
    return <PrepReagItem
        activeItem = {activeItem === item._id}
        handleActiveItem = {handleActiveItem}
        favorite = {favorite}
        key = { item._id }
        item = {item}
    />
})}


return(
    <table className="table__wrap">
                
    <thead>
        <tr>
            <th>ID</th>
            <th>Наименование</th>
            <th>Партия</th>
            <th>CAS-№</th>
            <th>Остаток</th>
            <th>%</th>
            <th>Годен до</th>
        </tr>
    </thead>

    <tbody>
       {content}
    </tbody>

</table>
)
}