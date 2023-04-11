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
                    <li><Link to='/equipment/all' className='link'><div onClick={()=>{setActiveNav('all')}} className={handleActiveNav('all')}>Все</div></Link></li>
                    <li><Link to='/equipment/hplc'  className='link'><div onClick={()=>{setActiveNav('hplc')}} className={handleActiveNav('hplc')}>ВЭЖХ системы</div></Link></li>
                    <li><Link to='/equipment/gc'  className='link'><div onClick={()=>{setActiveNav('gc')}} className={handleActiveNav('gc')}>ГХ системы</div></Link></li>
                    <li><Link to='/equipment/scales'  className='link'><div onClick={()=>{setActiveNav('scales')}} className={handleActiveNav('scales')}>Весы</div></Link></li>
                    <li><Link to='/equipment/spectometer'  className='link'><div onClick={()=>{setActiveNav('spectometer')}} className={handleActiveNav('spectometer')}>Спектрометры</div></Link></li>
                    <li><Link to='/equipment/titrator'  className='link'><div onClick={()=>{setActiveNav('titrator')}} className={handleActiveNav('titrator')}>Титраторы</div></Link></li>
                    <li><Link to='/equipment/climate'  className='link'><div onClick={()=>{setActiveNav('climate')}} className={handleActiveNav('climate')}>Климатическое</div></Link></li>
                    <li><Link to='/equipment/termal'  className='link'><div onClick={()=>{setActiveNav('termal')}} className={handleActiveNav('termal')}>Термическое</div></Link></li>
                    <li><Link to='/equipment/handle'  className='link'><div onClick={()=>{setActiveNav('handle')}} className={handleActiveNav('handle')} style={{fontSize:'10px'}}>Вспомогательное</div></Link></li>
                    <li><Link to='/equipment/other'  className='link'><div onClick={()=>{setActiveNav('other')}} className={handleActiveNav('other')}>Прочее</div></Link></li>
                </ul>
                <div className="menu__stripe"></div>
                <ul>
                    <li><Link to='/equipment/isolate'  className='link'><div onClick={()=>{setActiveNav('isolate')}} className={handleActiveNav('isolate')}>Списанное</div></Link></li>
                </ul>
                <div className="menu__stripe"></div>
                <ul>
                    <li><Link to='/equipment/add'  className='link'><div onClick={()=>{setActiveNav('add')}} className={handleActiveNav('add')}>Списанное</div></Link></li>
                </ul>
              </div>
      </div>
    )
  }