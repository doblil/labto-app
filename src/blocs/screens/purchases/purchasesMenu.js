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
            <li><Link to='/purchases' className='link'><div className={handleActiveNav('purchases')}>Заявки</div></Link></li>
            <li><Link to='/purchases'  className='link'><div className={handleActiveNav('purchases')}>В работе</div></Link></li>
            <li><Link to='/purchases'  className='link'><div className={handleActiveNav('purchases')}>Архив</div></Link></li>
        </ul>
      </div>
    )
  }