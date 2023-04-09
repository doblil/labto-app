
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EquipmentItem } from "./equipmentItem"
import { useGetEquipmentsQuery } from "../../../redux/api/equipmentApi"
import { activeEquipmentCh, equipmentReset } from "../../../redux/store/activeEquipmentSlice"


export const EquipmentTable = (props) => {

    const {setTotalCount, setCurrentFavorite, reqParams, nameSearch, snSearch, invnSearch, statusSearch, verifySearch, favoriteSearch} = props
    
    let content = <></>
    const dispatch = useDispatch();
    const { favorite } = useSelector(state => state.auth)
    const [activeItem, setActiveItem] = useState(null)
    const {data, isLoading, isSuccess} = useGetEquipmentsQuery(reqParams)

    useEffect(() => {
        dispatch(equipmentReset())
        setActiveItem(null);
    }, [reqParams, dispatch])



    const handleActiveItem = (id) => {
        setActiveItem(id);
        dispatch(activeEquipmentCh(id))
    }

    const handleFilter = (arr = []) => {
    
    if (snSearch) arr = arr.filter(item => item.sn.toLowerCase().includes(snSearch.toLowerCase())) ;
    if (invnSearch) arr = arr.filter(item => item.invn.includes(invnSearch)) ;
    if (nameSearch) arr = arr.filter(item => item.name.toLowerCase().includes(nameSearch.toLowerCase())) ;
    if (statusSearch && statusSearch === 'ready') arr = arr.filter(item => item.status === 'ready') ;
    if (statusSearch && statusSearch === 'unready') arr = arr.filter(item => ['broken', 'repair', 'storage', 'verification', 'verificationExpired'].includes(item.status)) ;
    if (favoriteSearch) arr = arr.filter(item => favorite.includes(item._id)) ;
    if (verifySearch && verifySearch === 'verified') arr = arr.filter(item => Date.parse(item.nextVerification) > Date.now());
    if (verifySearch && verifySearch === 'unverified') arr = arr.filter(item => Date.parse(item.nextVerification) < Date.now());
    return arr

} 

const handleCurrentFavorite = (arr = []) => {
    return setCurrentFavorite(arr.filter(item => favorite.includes(item._id)).length)
}

if (isLoading) {return <div className="table__load"><div className="spinner"></div>Загрузка...</div>}
if (isSuccess) {
const filteredArr = handleFilter(data.equipments);
setTotalCount(filteredArr.length)

content = filteredArr
.map(item => {
    return <EquipmentItem
        activeItem = {activeItem === item._id}
        handleActiveItem = {handleActiveItem}
        favorite = {favorite}
        key = { item._id }
        item = {item}
    />
})

if (!data.equipments.length) {return <div className="table__load">Здесь пока что пусто...</div>}
handleCurrentFavorite(data.equipments)
}


return(
    <table className="table__wrap"> 

    <thead>     
        <tr>
            <th>ID</th>
            <th>Наименование</th>
            <th>Серийный номер</th>
            <th>Инвентарный номер</th>
            <th>Следующая поверка</th>
        </tr>
    </thead>

    <tbody>
       {content}
    </tbody>

</table>
)
}