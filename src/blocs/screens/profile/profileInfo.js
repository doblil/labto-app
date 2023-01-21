import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import './profile.scss'


export const ProfileInfo = () => {
    
    const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('info')
    }, [setActiveNav])
    
    return(
        <div className="profile__wrap">
            <div className="profile__card">
                <img src="icons/info.svg" alt="" className="profile__icon" />
                <div className="profile__name">Федорко Илья Николаевич</div> <br />
                <div className="profile__info">химик-аналитик ОРАМ</div>
                <div className="profile__info">Управление по новым продуктам</div>
                <div className="profile__info">Полисинтез</div> <br />
                <div className="profile__info">Руководитель: Иванов Иван иваныч</div> <br />

                <div className="profile__contact">
                    <img src="icons/phone.svg" alt="" />
                    <div className="profile__heading">+7 7237 93899992</div>
                </div>

                <div className="profile__contact">
                    <img src="icons/envelope.svg" alt="" />
                    <div className="profile__heading">ilusha@djdh.jd</div>
                </div>

            </div>
        </div>
    )
  }