import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useRoleValidate } from '../../../hooks/useRoleValidate'


export const PurchasesMenu = (props) => {
  const roleValidation = useRoleValidate();
  const {activeNav, setActiveNav} = props

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
        <div class="menu__subtitle">Адресованные мне</div>
        <ul>
            <li><Link to='/purchases/my/allMy' className='link'><div onClick={()=>{setActiveNav('allMy')}} className={handleActiveNav('allMy')}>Все</div></Link></li>
            <li><Link to='/purchases/my/newMy'  className='link'><div onClick={()=>{setActiveNav('newMy')}} className={handleActiveNav('newMy')}>Новые</div></Link></li>
            <li><Link to='/purchases/my/activeMy'  className='link'><div onClick={()=>{setActiveNav('activeMy')}} className={handleActiveNav('activeMy')}>Активные</div></Link></li>
            <li><Link to='/purchases/my/completedMy'  className='link'><div onClick={()=>{setActiveNav('comletedMy')}} className={handleActiveNav('comletedMy')}>Завершенные</div></Link></li>
            <li><Link to='/purchases/my/archiveMy'  className='link'><div onClick={()=>{setActiveNav('archiveMy')}} className={handleActiveNav('archiveMy')}>Архив</div></Link></li>
        </ul>
        { <><div class="menu__subtitle">Все</div>
        <ul>
            <li><Link to='/purchases/all/all'  className='link'><div onClick={()=>{setActiveNav('all')}} className={handleActiveNav('all')}>Все</div></Link></li>
            <li><Link to='/purchases/all/archive'  className='link'><div onClick={()=>{setActiveNav('archive')}} className={handleActiveNav('archive')}>Архив</div></Link></li>
        </ul></>}
      </div>
    )
  }