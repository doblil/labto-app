import './header.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stringifyRole } from '../../services/services';
import { useRoleValidate } from '../../hooks/useRoleValidate';
import { useLogoutMutation } from '../../redux/api/authApi';
import { sMessageCh } from '../../redux/store/sMessageSlice';

export const Header = (props) => {
	const dispatch = useDispatch();
  	const roleValidation = useRoleValidate();
	const [logout] = useLogoutMutation();
	const {isAuth, name, direction, department, position, role } = useSelector(state => state.auth);
  	const {activeTab} = props;

	const handleActiveTab = (tabName) => {
   		if(activeTab === tabName){
   		 	return "title header__menu-item header__menu-item_active"
   		}
   		return "title header__menu-item"
  	}	
	
	const handleLogout = async () => {
		await logout().unwrap()
		dispatch(sMessageCh('Выход из учетной записи'))
	}

	return (
    <div className="header">
      <nav className="header__menu">
        <img src="icons/main_logo.svg" alt="" />
        	<ul>
				<li><Link to="/profile/info" className="link"><div className={handleActiveTab('profile')}>Профиль</div></Link></li>
				<li><Link to="/prep/reag" className="link"><div className={handleActiveTab('prep')}>Препараторская</div></Link></li>
				<li><Link to="/equipment" className="link"><div className={handleActiveTab('equipment')}>Оборудование</div></Link></li>
				{roleValidation(['head', 'developer', 'admin']) &&
				<li><Link to="/report/projects" className="link"><div className={handleActiveTab('report')}>Отчётность</div></Link></li>}
				<li><Link to="/purchases/my/allMy" className="link"><div className={handleActiveTab('purchases')}>Закупки</div></Link></li>
				{roleValidation(['admin', 'developer', 'head']) && 
				<li><Link to="/admin/list" className="link"><div className={handleActiveTab('admin')}>Управление</div></Link></li>}
        	</ul>
      	</nav>

      	<div style={{display:'flex'}}  className="header__profile_wrap">
        	{isAuth && <div className="header__profile">
          	<span className="text header__info">{name}</span>
          	<span className="text header__info">{department} {direction}</span>
          	<span className="text header__info header__info-fz11">{position}/{stringifyRole(role)}</span>
        	</div>}
        	<div onClick={handleLogout} className="header__exit" title='выйти'><div className="header__opening"><div className="header__door"></div></div></div>
      	</div>
    </div>
  )
}