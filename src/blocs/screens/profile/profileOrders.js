import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import '../../../sass/sassTemplates/menu.scss'


export const ProfileOrders = () => {
    
	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('orders')
    }, [setActiveNav])

	return(
        <div className="overflow ">

            <div className="profile__parameter">
                <div className="profile__value profile__value_date">дата</div>
                <div className="profile__value">наименование</div>
                <div className="profile__value profile__value_text">текст</div>
                <div className="profile__value">статус</div>
                <div className="profile__select"></div>
            </div>

            <div className="profile__item">
                <div className="profile__value profile__value_date">11.12.2022</div>
                <div className="profile__value"> <span>Муравьиная кислота</span> <br /> Нева Реактив <br /> ГОСТ 4696-86</div>
                <div className="profile__value profile__value_text">„Здравствуйте! Прошу прислать мне 300 г чистой муравьиной кислоты. Желательно побыстрее... Жду! Спасибо вам, что вы есть“</div>
                <div className="profile__value profile__value_border">в обработке</div>
                <div className="profile__wrap">
                    <div className="profile__select">Редактировать</div>
                    <div className="profile__select">Отменить</div> 
                </div>          
            </div>

            <div className="profile__item">
                <div className="profile__value profile__value_date">11.12.2022</div>
                <div className="profile__value"><span>Муравьиная кислота</span> <br /> Нева Реактив <br /> ГОСТ 4696-86</div>
                <div className="profile__value profile__value_text">„Здравствуйте! Прошу прислать мне 300 г чистой муравьиной кислоты. Желательно побыстрее... Жду! Спасибо вам, что вы есть“</div>
                <div className="profile__value profile__value_border">выполнено и ждет подтверждения</div>
                <div className="profile__wrap">
                    <div className="profile__select">Подтвердить</div> 
                </div>          
            </div>
        </div>
    )
}