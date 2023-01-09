import { PrepReagItem } from "./prepReagItem"
import { useGetReagentsQuery } from "../../../redux/api/reagentApi"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { favoriteCh } from "../../../redux/store/authSlice"
import { activeReagentCh } from "../../../redux/store/activeReagSlice"


export const PrepReagTable = (props) => {

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

if (isLoading) {content = <h5>Загрузка...</h5>}
if (isSuccess) {content = data.reagents
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