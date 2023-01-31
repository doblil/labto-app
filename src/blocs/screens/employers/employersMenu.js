import { Link } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'

export const EmployersMenu = (props) => {

  const {activeNav} = props

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu">
        <div className="menu__title">Сотрудники</div>
        <div className="menu__stripe"></div>
        <ul>
            <li><Link to='/employers/list' className='link'><div className={handleActiveNav('list')}>Список</div></Link></li>
            <li><Link to='/employers'  className='link'><div className={handleActiveNav('employers')}>Лаборанты</div></Link></li>
            <li><Link to='/employers'  className='link'><div className={handleActiveNav('employers')}>Настройки доступа</div></Link></li>
        </ul>
      </div>
    )
  }