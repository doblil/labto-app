import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUnactiveUserMutation } from '../../../../redux/api/userApi';
import { sMessageCh } from '../../../../redux/store/sMessageSlice';
import { stringifyRole } from '../../../../services/services';
import { ChangeCredentials } from './changeCredentials';
import { ChangeRole } from './changeRole';
import { ChangeUserData } from './changeUserData';


export const UserItem = (props) => {
    const dispatch = useDispatch()
    const [showChRole, setShowChRole] = useState(false)
    const [showChCredentials, setShowChCredentials] = useState(false)
    const [showChUserData, setShowChUserData] = useState(false)

    const {name, role, position, department, direction, phone, email, _id,} = props;

    const [unactiveUser, {isLoading}] = useUnactiveUserMutation();

    const handleUnactiveUser = async () => {
        if(isLoading) return dispatch(sMessageCh('Попробуйте еще раз'));
        await unactiveUser(_id).unwrap(); 
    }

    const roleImg = {
        'user': "icons/person-fill.svg",
        'prep': "icons/person-fill-gear.svg",
        'head': 'icons/person-fill-check.svg',
        'admin': 'icons/person-fill-check.svg',
        'developer': 'icons/person-fill.svg',
    }

    return (
        <div className="profile__card profile__card_mini">
            {showChCredentials && <ChangeCredentials
                name = {name}
                position = {position}
                direction = {direction}
                id = {_id}
                email = {email}
                setShowChCredentials = {setShowChCredentials}
            />}
            {showChRole && <ChangeRole
                name = {name}
                role = {role}
                position = {position}
                direction = {direction}
                id = {_id}
                setShowChRole = {setShowChRole}
            />}
            {showChUserData && <ChangeUserData
                name = {name}
                position = {position}
                direction = {direction}
                department = {department}
                phone = {phone}
                id = {_id}
                setShowChUserData = {setShowChUserData}
            />}
            <img src={roleImg[role]} alt="" className="profile__icon profile__icon_mini" />

                <div className="profile__name" style={{marginRight:'15px'}}>{name}</div> <br />
                <div className="profile__info">{position}</div>
                <div className="profile__info">{department}</div>
                <div className="profile__info">{direction}</div>
                <div className="profile__info">Права пользователя: {stringifyRole(role)}</div>


                <div className="profile__contact">
                    <img src="icons/phone.svg" alt="phone" />
                    <div className="profile__heading">{phone}</div>
                </div>

                <div className="profile__contact">
                    <img src="icons/envelope.svg" alt="envelope" />
                    <div className="profile__heading">{email}</div>
                </div>
                <div>
                    <div className="profile__select profile__select_long" onClick={()=>setShowChRole(true)}>Изменить права</div>
                    <div className="profile__select profile__select_long" onClick={()=> setShowChCredentials(true)}>Изменить логин, пароль</div>
                    <div className="profile__select profile__select_long" onClick={()=>setShowChUserData(true)}>Изменить учетные данные</div>
                    <div className="profile__select profile__select_long" onClick={handleUnactiveUser}>Деактивировать пользователя</div>
                    {/* <div className="profile__select profile__select_long"><img src="icons/inboxes.svg" alt="inboxes" style={{height:'14px', marginRight:'10px'}}/>  История действий</div> */}
                </div>
            </div>
        
    )
} 