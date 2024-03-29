import { ReagItem } from "./reagItem"
import { useGetReagentsQuery } from "../../../../../redux/api/reagentApi"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { favoriteCh } from "../../../../../redux/store/authSlice"
import { activeReagentCh } from "../../../../../redux/store/activeReagSlice"


export const ReagTable = (props) => {


    const {catSearch, nameSearch, casSearch, expSearch, favoriteSearch, restSearch, reqParams, setCurrentFavorite, setTotalCount} = props
    


let content = <></>
const dispatch = useDispatch();
const { favorite } = useSelector(state => state.auth)
const [activeItem, setActiveItem] = useState(null)
const {data, isLoading, isSuccess} = useGetReagentsQuery(reqParams)

const handleActiveItem = (id) => {
    setActiveItem(id);
    dispatch(activeReagentCh(id))
}

const handleFilter = (arr = []) => {
    if (catSearch) arr = arr.filter(item => item.cat.toLowerCase().includes(catSearch.toLowerCase())) ;
    if (casSearch) arr = arr.filter(item => item.CAS.includes(casSearch)) ;
    if (nameSearch) arr = arr.filter(item => item.name.toLowerCase().includes(nameSearch.toLowerCase())) ;
    if (expSearch && expSearch === 'valid') arr = arr.filter(item => Date.parse(item.toDate) > Date.now()) ;
    if (expSearch && expSearch === 'invalid') arr = arr.filter(item => Date.parse(item.toDate) < Date.now()) ;
    if (favoriteSearch) arr = arr.filter(item => favorite.includes(item._id)) ;
    if (restSearch && restSearch === 'null') arr = arr.filter(item => Math.floor(item.restUnits/item.container*100) === 0);
    if (restSearch && restSearch === 'instock') arr = arr.filter(item => Math.floor(item.restUnits/item.container*100) > 0);
    return arr
} 

const handleCurrentFavorite = (arr = []) => {
    return setCurrentFavorite(arr.filter(item => favorite.includes(item._id)).length)
}

if (isLoading) {return <div className="table__load"><div className="spinner"></div>Загрузка...</div>}
if (isSuccess) {
const filteredArr = handleFilter(data.reagents);
setTotalCount(filteredArr.length)
content = filteredArr
.map(item => {
    return <ReagItem
        activeItem = {activeItem === item._id}
        handleActiveItem = {handleActiveItem}
        favorite = {favorite}
        key = { item._id }
        item = {item}
    />
})
handleCurrentFavorite(data.reagents)
if (!data.reagents.length) {return <div className="table__load">Здесь пока что пусто...</div>}

}


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