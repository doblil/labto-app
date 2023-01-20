import './prep.scss'
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reagentReset } from '../../../redux/store/activeReagSlice'
 

export const PrepMenu = () => {
    
  const dispatch = useDispatch();
  const handleReset = () => {
	dispatch(reagentReset())
  } 
  
  return(
      <div className="menu">
        <div className="menu__title">Препараторская</div>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Таблица</div>
        <ul>
            <li className="menu__item menu__item_active" onClick ={handleReset}><Link to='/prep/reag' children="Реактивы" className='link'/></li>
            <li className="menu__item" onClick ={handleReset}><Link to='/prep/rs' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item" onClick ={handleReset}><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Внести</div>
        <ul>
            <li className="menu__item"><Link to='/prep/addReagent' children="Реактивы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Карантин</div>
        <ul>
            <li className="menu__item"><Link to='/' children="Реактивы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
      </div>
    )
  }