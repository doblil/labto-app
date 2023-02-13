import React from 'react';
import { useDispatch } from 'react-redux';
import { useActiveUserMutation, useDeleteUserMutation } from '../../../../redux/api/userApi';
import { sMessageCh } from '../../../../redux/store/sMessageSlice';


export const UnactiveUserItem = (props) => {
    const dispatch = useDispatch();
    const {name, position, department, direction, phone, email, _id,} = props;

    const [activeUser, {isLoading: activeLoading}] = useActiveUserMutation();
    const [deleteUser, {isLoading: deleteLoading}] = useDeleteUserMutation();


    const handleDeleteUser = async () => {
        if(activeLoading || deleteLoading){
            return dispatch(sMessageCh('попробуйте еще раз'))
        };
        await deleteUser(_id).unwrap()
    }
    const handleActiveUser = async () => {
        if(activeLoading || deleteLoading){
            return dispatch(sMessageCh('попробуйте еще раз'))
        };
        await activeUser(_id).unwrap()
    }

    return (
        <div className="profile__card profile__card_mini" style={{height: '300px'}}>

                <div className="profile__name">{name}</div>
                <div className="profile__info">{position}</div>
                <div className="profile__info">{department}</div>
                <div className="profile__info">{direction}</div>

                <div className="profile__contact">
                    <img src="icons/phone.svg" alt="phone" />
                    <div className="profile__heading">{phone}</div>
                </div>

                <div>
                    <div className="profile__select profile__select_long" onClick={handleDeleteUser}>Удалить пользователя</div>
                    <div className="profile__select profile__select_long" onClick={handleActiveUser}>Активировать</div>
                </div>
            </div>
        
    )
} 