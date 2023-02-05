import React from 'react';
import { useSelector } from 'react-redux';
import { stringifyRole } from '../../../../services/services';


export const UserItem = (props) => {
    
    const {name, role, position, department, direction, phone, email, _id,} = props;

    const roleImg = {
        'user': "icons/person-fill.svg",
        'prep': "icons/person-fill-gear.svg",
        'head': 'icons/person-fill-check.svg',
        'admin': 'icons/person-fill-check.svg',
        'developer': 'icons/person-fill.svg',
    }

    return (
        <div className="profile__card profile__card_mini">
            <img src={roleImg[role]} alt="" className="profile__icon profile__icon_mini" />

                <div className="profile__name">{name}</div> <br />
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
                    <div className="profile__select profile__select_long">Изменить права</div>
                    <div className="profile__select profile__select_long">Изменить логин, пароль</div>
                    <div className="profile__select profile__select_long">Изменить учетные данные</div>
                    <div className="profile__select profile__select_long">Удалить пользователя</div>
                </div>
            </div>
        
    )
} 