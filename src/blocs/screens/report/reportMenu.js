
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
            <li><Link to='/report/projects' className='link'><div className={handleActiveNav('project')}>Проекты</div></Link></li>
            <li><Link to='/report/department'  className='link'><div className={handleActiveNav('direction')}>Работа отделов</div></Link></li>
        </ul>
      </div>
    )
  }