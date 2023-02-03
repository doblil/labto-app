
import './admin.scss'
import './../profile/profile.scss'



export const AdminList = (props) => {
    
    // const [activeNav, setActiveNav] = useOutletContext()
	// useEffect(() => {
    //     setActiveNav('list')
    // }, [setActiveNav])
    
    return(
        <>

            
            <div className="admin__top">
                <div className="filter__wrap">
                    <div className="filter__label">Поиск по имени сотрудника</div>
                    <input type="text" />
                    
                    <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></button>
                </div>

                <div className="admin__add">
                    <img src="icons/person-plus.svg" alt="" />
                    <p >Добавить сотрудника</p>
                </div>
            </div>

            <div className="list overflow">

                <div className="profile__card profile__card_mini">
                <img src="icons/person-fill.svg" alt="" className="profile__icon profile__icon_mini" />

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
                    <div>
                        <div className="profile__select profile__select_long">Изменить права</div>
                        <div className="profile__select profile__select_long">Изменить логин, пароль</div>
                        <div className="profile__select profile__select_long">Изменить учетные данные</div>
                        <div className="profile__select profile__select_long">Удалить пользователя</div>
                    </div>
                </div>

                <div className="profile__card profile__card_mini">
                    <img src="icons/person-fill-gear.svg" alt="" className="profile__icon profile__icon_mini" />
                    <div className="profile__name">Добровльская Лилия Николаевич</div> <br />
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
                    <div>
                        <div className="profile__select profile__select_long">Изменить права</div>
                        <div className="profile__select profile__select_long">Изменить логин, пароль</div>
                        <div className="profile__select profile__select_long">Изменить учетные данные</div>
                        <div className="profile__select profile__select_long">Удалить пользователя</div>
                    </div>
                </div>

                <div className="profile__card profile__card_mini">
                <img src="icons/person-fill-check.svg" alt="" className="profile__icon profile__icon_mini" />
                    <div className="profile__name">Иванов Иван иваныч</div> <br />
                    <div className="profile__info">директор</div>
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
                    <div>
                        <div className="profile__select profile__select_long">Изменить права</div>
                        <div className="profile__select profile__select_long">Изменить логин, пароль</div>
                        <div className="profile__select profile__select_long">Изменить учетные данные</div>
                        <div className="profile__select profile__select_long">Удалить пользователя</div>
                    </div>
                </div>

                <div className="profile__card profile__card_mini">
                <img src="icons/person-fill.svg" alt="" className="profile__icon profile__icon_mini" />
                    <div className="profile__name">Gtnz</div> <br />
                    <div className="profile__info">директор</div>
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
                    <div>
                        <div className="profile__select profile__select_long">Изменить права</div>
                        <div className="profile__select profile__select_long">Изменить логин, пароль</div>
                        <div className="profile__select profile__select_long">Изменить учетные данные</div>
                        <div className="profile__select profile__select_long">Удалить пользователя</div>
                    </div>
                </div>
            </div>
        </>
    )
  }