import '../admin.scss'
import '../../profile/profile.scss'

import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


export const Projects = (props) => {
    
    // const [activeNav, setActiveNav] = useOutletContext()
	// useEffect(() => {
    //     setActiveNav('projects')
    // }, [setActiveNav])
    
    return(
        <>
            <div className="admin__top">
                <div className="filter__wrap">
                    <div className="filter__label">Поиск по названию проекта</div>
                    <input type="text" />
                    
                    <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></button>
                </div>

                <div className="admin__add">
                    <img src="icons/plus-circle.svg" alt="" />
                    <p >Создать новый проект</p>
                </div>
            </div>

            <div className="list overflow">

                <div className="profile__card">
                    <div className="profile__name">Проект по созданию мази</div> <br />
                    <div className="profile__name">675637567</div> <br />
                    <div className="profile__info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam, cupiditate quae veniam quidem nulla, eum repellendus iure at sed repudiandae natus doloribus exercitationem eveniet voluptas dolorum consectetur nostrum quaerat. </div>
                    
                    <br />
                    <div className="profile__contact">
                        <img src="icons/info.svg" alt="" />
                        <div className="profile__heading">Руководитель: Иванов Иван иваныч</div>
                    </div>

                    <div className="profile__contact">
                        <img src="icons/phone.svg" alt="" />
                        <div className="profile__heading">+7 7237 93899992</div>
                    </div>

                    <div className="profile__contact">
                        <img src="icons/envelope.svg" alt="" />
                        <div className="profile__heading">ilusha@djdh.jd</div>
                    </div>

                    <br />
                    <div className="profile__row">
                        <div className="profile__select">Редактировать</div>
                        <div className="profile__select">История</div>
                        <div className="profile__select">Удалить проект</div>
                    </div>
                </div>

                <div className="profile__card">
                    <div className="profile__name">Проект по созданию пилюли</div> <br />
                    <div className="profile__name">675637567</div> <br />
                    <div className="profile__info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam, cupiditate quae veniam quidem nulla, eum repellendus iure at sed repudiandae natus doloribus exercitationem eveniet voluptas dolorum consectetur nostrum quaerat. </div>
                    
                    <br />
                    <div className="profile__contact">
                        <img src="icons/info.svg" alt="" />
                        <div className="profile__heading">Руководитель: Иванов Иван иваныч</div>
                    </div>

                    <div className="profile__contact">
                        <img src="icons/phone.svg" alt="" />
                        <div className="profile__heading">+7 7237 93899992</div>
                    </div>

                    <div className="profile__contact">
                        <img src="icons/envelope.svg" alt="" />
                        <div className="profile__heading">ilusha@djdh.jd</div>
                    </div>

                    <br />
                    <div className="profile__row">
                        <div className="profile__select">Редактировать</div>
                        <div className="profile__select">История</div>
                        <div className="profile__select">Удалить проект</div>
                    </div>
                </div>

            </div>
        </>
    )
  }