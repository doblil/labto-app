import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'


export const ProfileDrafts = () => {

	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('drafts')
    }, [setActiveNav])

  	return(
    	<div className="overflow ">

			<div className="profile__parameter">
				<div className="profile__value">дата</div>
				<div className="profile__value">тип действия</div>
				<div className="profile__value">вещество</div>
				<div className="profile__select"></div>
				<div className="profile__delete"></div>
            </div>

			<div className="profile__item">
				<div className="profile__value">08.02.2022  22:00</div>
				<div className="profile__value profile__value-red">списание</div>
				<div className="profile__value profile__value-underlined">Муравьиная кислота</div>
				<div className="profile__select">Продолжить</div>
				<div className="profile__delete"><img src="icons/trash.svg" alt="" /></div>
            </div>

            <div className="profile__item">
				<div className="profile__value">11.12.2022  11:11</div>
				<div className="profile__value profile__value-red">списание</div>
				<div className="profile__value profile__value-underlined">Муравьиная кислота</div>
				<div className="profile__select">Продолжить</div>
				<div className="profile__delete"><img src="icons/trash.svg" alt="" /></div>
            </div>
        </div>
    )
}