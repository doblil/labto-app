
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
            <li><Link to='/profile/info' className='link'><div className={handleActiveNav('info')}>Информация</div></Link></li>
            <li><Link to='/profile/drafts'  className='link'><div className={handleActiveNav('drafts')}>Черновики</div></Link></li>
            <li><Link to='/profile/history'  className='link'><div className={handleActiveNav('history')}>История</div></Link></li>
            <li><Link to='/profile/orders'  className='link'><div className={handleActiveNav('orders')}>Заказы</div></Link></li>
        </ul>
      </div>
    )
  }