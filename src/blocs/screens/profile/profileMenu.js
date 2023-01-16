
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'


export const ProfileMenu = (props) => {

  const {activeNav} = props

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu">
        <div className="menu__title">Профиль</div>
        <div className="menu__stripe"></div>
        <ul>
            <li className={handleActiveNav('info')}><Link to='/profile/info' children="Информация" className='link'/></li>
            <li className={handleActiveNav('drafts')}><Link to='/profile/drafts' children="Черновики" className='link'/></li>
            <li className={handleActiveNav('history')}><Link to='/profile/history' children="История" className='link'/></li>
            <li className={handleActiveNav('orders')}><Link to='/profile/orders' children="Заказы" className='link'/></li>
        </ul>
      </div>
    )
  }