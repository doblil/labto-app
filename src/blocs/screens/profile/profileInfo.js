import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { stringifyRole } from '../../../services/services'
import './profile.scss'


export const ProfileInfo = () => {
    
    const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('info')
    }, [setActiveNav])
    
    const {name, role, position, department, direction, phone, email} = useSelector(state => state.auth)

    return(
        <div className="profile__wrap">
            <div className="profile__card">
                <img src="icons/info.svg" alt="" className="profile__icon" />
                <div className="profile__name">{name}</div> <br />
                <div className="profile__info">{position} {department}</div>
                <div className="profile__info">{direction}</div>
                <div className="profile__info">Полисинтез</div> <br />
                <div className="profile__info">Руководитель: Иванов Иван иваныч</div> <br />
                <div className="profile__info">Ваши права: {stringifyRole(role)}</div> <br />

                <div className="profile__contact">
                    <img src="icons/phone.svg" alt="" />
                    <div className="profile__heading">{phone}</div>
                </div>

                <div className="profile__contact">
                    <img src="icons/envelope.svg" alt="" />
                    <div className="profile__heading">{email}</div>
                </div>

            </div>
        </div>
    )
  }