import { Link } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'

export const AdminMenu = (props) => {

  const {activeNav} = props

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu">
        <div className="menu__title">Управление</div>
        <div className="menu__stripe"></div>
        <ul>
            <li><Link to='/admin/list' className='link'><div className={handleActiveNav('list')}>Сотрудники</div></Link></li>
            <li><Link to='/admin/projects'  className='link'><div className={handleActiveNav('projects')}>Проекты</div></Link></li>
            <li><Link to='/admin/options'  className='link'><div className={handleActiveNav('options')}>Опции</div></Link></li>
        </ul>
      </div>
    )
  }