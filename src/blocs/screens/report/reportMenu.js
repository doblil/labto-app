
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'


export const ReportMenu = (props) => {

  const {activeNav} = props

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu">
        <div className="menu__title">Отчетность</div>
        <div className="menu__stripe"></div>
        <ul>
            <li><Link to='/report/annual' className='link'><div className={handleActiveNav('annual')}>Годовая</div></Link></li>
            <li><Link to='/report/interim '  className='link'><div className={handleActiveNav('interim')}>Промежуточная</div></Link></li>
        </ul>
      </div>
    )
  }