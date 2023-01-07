import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <nav className="header__menu">
        <ul>
          <li className="title header__menu-item"><Link to="/" className="link">Профиль</Link></li>
          <li className="title header__menu-item header__menu-item_active"><Link to="/" className="link">Препараторская</Link></li>
          <li className="title header__menu-item"><Link to="/" className="link">Отчётность</Link></li>
          <li className="title header__menu-item"><Link to="/" className="link">Закупки</Link></li>
        </ul>
      </nav>

      <div className="header__profile">
        <span className="text header__info">Федорко Илья</span>
        <span className="text header__info">химик-аналитик ОРАМ</span>
        <span className="text header__info header__info-fz11">пользователь</span>
      </div>
    </div>
  )
}