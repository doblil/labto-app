import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { stringifyRole } from '../../services/services';
import { useRoleValidate } from '../../hooks/useRoleValidate';

export const Header = (props) => {
  
  const roleValidation = useRoleValidate();

	const {isAuth, name, direction, department, position, role } = useSelector(state => state.auth);
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
            <li><Link to="/profile/info" className="link"><div className={handleActiveTab('profile')}>Профиль</div></Link></li>
            <li><Link to="/prep/reag" className="link"><div className={handleActiveTab('prep')}>Препараторская</div></Link></li>
            {roleValidation(['head', 'developer', 'admin']) && <li><Link to="/report/projects" className="link"><div className={handleActiveTab('report')}>Отчётность</div></Link></li>}
            <li><Link to="/purchases/my/allMy" className="link"><div className={handleActiveTab('purchases')}>Закупки</div></Link></li>
            {roleValidation(['admin', 'developer', 'head']) && <li><Link to="/admin/list" className="link"><div className={handleActiveTab('admin')}>Управление</div></Link></li>}
        </ul>
      </nav>

      {isAuth && <div className="header__profile">
        <span className="text header__info">{name}</span>
        <span className="text header__info">{department} {direction}</span>
        <span className="text header__info header__info-fz11">{position}/{stringifyRole(role)}</span>
      </div>}
    </div>
  )
}