import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const EquipmentMenu = (props) => {

  const {activeNav, setActiveNav} = props

  const handleActiveNav = (navName) => {
    

    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu" style={{paddingRight: '30px'}}>
            <div className="menu__title">Оборудование</div>
            <div className="menu__stripe"></div>

            <div className="overflow" style={{height:'calc(100% - 20px)'}}>
                <div class="menu__subtitle">Таблица</div>
                <ul>
                    <li><Link to='/equipment/' className='link'><div onClick={()=>{setActiveNav('allMy')}} className={handleActiveNav('allMy')}>Все</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('newMy')}} className={handleActiveNav('newMy')}>ВЭЖХ системы</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('activeMy')}} className={handleActiveNav('activeMy')}>ГХ системы</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('comletedMy')}} className={handleActiveNav('comletedMy')}>Весы</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('archiveMy')}} className={handleActiveNav('archiveMy')}>Спектрометры</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('archiveMy')}} className={handleActiveNav('archiveMy')}>Титраторы</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('archiveMy')}} className={handleActiveNav('archiveMy')}>Вспомогательные</div></Link></li>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('archiveMy')}} className={handleActiveNav('archiveMy')}>Прочее</div></Link></li>
                </ul>
                <div className="menu__stripe"></div>
                <ul>
                    <li><Link to='/equipment/'  className='link'><div onClick={()=>{setActiveNav('all')}} className={handleActiveNav('all')}>Списанное</div></Link></li>
                </ul>
              </div>
      </div>
    )
  }