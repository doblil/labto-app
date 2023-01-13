import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  
	const {isAuth, name, direction, department, position } = useSelector(state => state.auth);

	
	return (
    <div className="header">
      <nav className="header__menu">
        <img src="icons/main_logo.svg" alt="" />
        <ul>
          <li className="title header__menu-item"><Link to="/" className="link">Профиль</Link></li>
          <li className="title header__menu-item header__menu-item_active"><Link to="/" className="link">Препараторская</Link></li>
          <li className="title header__menu-item"><Link to="/" className="link">Отчётность</Link></li>
          <li className="title header__menu-item"><Link to="/" className="link">Закупки</Link></li>
        </ul>
      </nav>

      {isAuth && <div className="header__profile">
        <span className="text header__info">{name}</span>
        <span className="text header__info">{position} {department} {direction}</span>
        <span className="text header__info header__info-fz11">{position}</span>
      </div>}
    </div>
  )
}