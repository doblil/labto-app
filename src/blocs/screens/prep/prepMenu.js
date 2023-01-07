import './prep.scss'
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'


export const PrepMenu = () => {
    return(
      <div className="menu">
        <div className="menu__title">Препараторская</div>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Таблица</div>
        <ul>
            <li className="menu__item menu__item_active"><Link to='/' children="Реактивы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Таблица</div>
        <ul>
            <li className="menu__item"><Link to='/' children="Реактивы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
        <div className="menu__stripe"></div>
        <div className="menu__subtitle">Таблица</div>
        <ul>
            <li className="menu__item"><Link to='/' children="Реактивы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></li>
            <li className="menu__item"><Link to='/' children="Субстанции" className='link'/></li>
        </ul>
      </div>
    )
  }