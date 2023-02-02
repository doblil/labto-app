import { Link } from 'react-router-dom'


export const PurchasesMenu = (props) => {

  const {activeNav} = props

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu">
        <div className="menu__title">Закупки</div>
        <div className="menu__stripe"></div>
        <ul>
            <li><Link to='/purchases/applications' className='link'><div className={handleActiveNav('applications')}>Заявки</div></Link></li>
            <li><Link to='/purchases/underway'  className='link'><div className={handleActiveNav('underway')}>В работе</div></Link></li>
            <li><Link to='/purchases/archive'  className='link'><div className={handleActiveNav('archive')}>Архив</div></Link></li>
        </ul>
      </div>
    )
  }