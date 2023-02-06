
import '../admin.scss'
import '../../profile/profile.scss'
import { useState } from 'react'
import { AddUser } from './addUser'
import { useSelector } from 'react-redux'
import { UserItem } from './userItem'



export const Users = () => {
    const [filterName, setFilterName] = useState('')
    const [showAddUser, setShowAddUser] = useState(false)

    const {allUsers} = useSelector(state => state.global);
    const usersList = allUsers?.filter(item => filterName ? item.name.toLowerCase().includes(filterName.toLowerCase()) : item).map(item => {
        const {name, role, position, department, direction, phone, email, _id} = item
        return <UserItem 
            _id = {_id}
            key = {_id}
            name = {name}
            role = {role}
            position  = {position}
            department = {department}
            direction = {direction}
            phone = {phone}
            email = {email}
        />
    })

    return(
        <>

            {showAddUser && <AddUser setShowAddUser = {setShowAddUser}/>}
            <div className="admin__top">
                <div className="filter__wrap">
                    <div className="filter__label">Поиск по имени сотрудника</div>
                    <input  style={{height:'30px', width:'270px',}} type="text" onChange={(e)=> setFilterName(e.target.value)}/>
                    
                    <button className="filter__btn" style={{height:'30px', width:'30px'}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></button>
                </div>

                <div className="admin__add" onClick={()=> setShowAddUser(true)}>
                    <img src="icons/person-plus.svg" alt="" />
                    <p >Добавить сотрудника</p>
                </div>
            </div>

            <div className="list overflow">
                {usersList}
            </div>
        </>
    )
  }