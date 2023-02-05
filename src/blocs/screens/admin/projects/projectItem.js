import React from 'react';

export const ProjectItem = (props) => {
    
    const { name, code, descr, creator, closed } = props

    return(
        <>
            <div className="profile__card">
                <div className="profile__name">{name}</div> <br />
                <div className="profile__name">{code}</div> <br />
                <div className="profile__info">{descr}</div>
                
                <br />
                <div className="profile__contact">
                    <img src="icons/info.svg" alt="" />
                    <div className="profile__heading">Проект создал:  {creator}</div>
                </div>


                <br />
                <div className="profile__row">
                    <div className="profile__select">Редактировать</div>
                    {!closed && <div className="profile__select">Пренести в неактивные</div>}
                    {!!closed && <div className="profile__select">Активировать</div>}
                    <div className="profile__select">Удалить</div>
                </div>
            </div>
        </>
    )
}