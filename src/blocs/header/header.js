import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = (props) => {
  
	const {isAuth, name, direction, department, position } = useSelector(state => state.auth);
  const {activeTab} = props;

	const handleActiveTab = (tabName) => {
   if(activeTab === tabName){
    return "title header__menu-item header__menu-item_active"
   }
   return "title header__menu-item"
  }

	return (
    <div className="header">
      <nav className="header__menu">
        <img src="icons/main_logo.svg" alt="" />
        <ul>
          <li className={handleActiveTab('profile')}><Link to="/profile" className="link">Профиль</Link></li>
          <li className={handleActiveTab('prep')}><Link to="/prep/reagentTable" className="link">Препараторская</Link></li>
          <li className={handleActiveTab('report')}><Link to="/report" className="link">Отчётность</Link></li>
          <li className={handleActiveTab('purchases')}><Link to="/purchases" className="link">Закупки</Link></li>
          <li className={handleActiveTab('employers')}><Link to="/employers" className="link">Сотрудники</Link></li>
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