import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetColumnsQuery } from '../../../../../redux/api/columnApi'
import { activeColumnCh } from '../../../../../redux/store/activeColumnSlice'
import { SVGstar } from '../../../../../svg/svg'
import { ColumnItem } from './columnItem'


export const ColumnTable = (props) => {

    const {favorite, userId} = useSelector(state => state.auth);
    const {nameSearch, projectSearch, iUse, favoriteSearch, setCurrentFavorite} = props;

    let content = <></>
    const dispatch = useDispatch()
    const [activeItem, setActiveItem] = useState(null)


    const {data, isLoading, isSuccess} = useGetColumnsQuery(props.reqParams);

    const handleActiveItem = (id) => {
        setActiveItem(id);
        dispatch(activeColumnCh(id));
    }

    const handleCurrentFavorite = (arr = []) => {
        return setCurrentFavorite(arr.filter(item => favorite.includes(item._id)).length)
    }

    const handleFilter = (arr = []) => {
        if (nameSearch) arr = arr.filter(item => item.name.toLowerCase().includes(nameSearch.toLowerCase()));
        if (projectSearch) arr = arr.filter(item => item.mainProject.name.toLowerCase().includes(projectSearch.toLowerCase()));
        if (favoriteSearch) arr = arr.filter(item => favorite.includes(item._id)) ;
        if (iUse) arr = arr.filter(item => item.current.userId === userId) 
        return arr
    }

    if (isLoading) {return <div className="table__load">Загрузка...</div>}
    if (isSuccess) {content = handleFilter(data.columns)
        .map(item => {
            return <ColumnItem
                handleActiveItem = {handleActiveItem}
                key = { item._id }
                item = {item}
                activeItem = {activeItem === item._id}
                favorite = {favorite}
            />
        })
        handleCurrentFavorite(data.columns);
        if (!data.columns.length) {return <div className="table__load">Здесь пока что пусто...</div>}

    }
    
        

    return(
        <table className="table__wrap"> 
            <thead>     
                <tr>
                    <th>ID</th>
                    <th>Наименование</th>
                    <th>Серийный номер</th>
                    <th>Основной проект</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    )
}