import { Link } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'
import { SwitchToggle } from '../../switchToggle/switchToggle'

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
                <li><Link to='/admin/list' className='link'><div className={handleActiveNav('users')}>Сотрудники</div></Link></li>
                <li><Link to='/admin/projects'  className='link'><div className={handleActiveNav('projects')}>Проекты</div></Link></li>
                <li><Link to='/admin/options'  className='link'><div className={handleActiveNav('options')}>Опции</div></Link></li>
                <li><Link to='/admin/setMobileApp'  className='link'><div className={handleActiveNav('mobileApp')}>Активация приложения</div></Link></li>
                
            </ul>
            <div className="menu__stripe"></div>
            <div className="menu__subtitle">Приостановка  <br /> работы сервера</div>

            <div style={{ display:'flex', alignItems:'center'}}>
                <SwitchToggle /> 
                <p style={{marginLeft:'5px', fontSize:'11px', color:'white'}}>Активен Пауза</p>   
            </div>
      </div>
    )
  }