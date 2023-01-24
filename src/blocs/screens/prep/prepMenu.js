import './prep.scss'
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reagentReset } from '../../../redux/store/activeReagSlice'
import { useState } from 'react'
 

export const PrepMenu = () => {
  
	const [activeTab, setActiveTab] = useState('reag')

	const dispatch = useDispatch();


	const handleReset = (tab) => {
		dispatch(reagentReset());
		setActiveTab(tab);
	} 

	const handleClass = (v) => {
		if (activeTab === v) {
			return 'menu__item menu__item_active'
		} else {
			return 'menu__item'
		}
	}
	
	return(
		<div className="menu">
			<div className="menu__title">Препараторская</div>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Таблица</div>
			<ul>
				<li><Link to={'/prep/reag'} className='link'><div className={handleClass('reag')} onClick ={() =>  handleReset('reag')}>Реактивы</div></Link></li>
				<li><Link to={'/prep/rs'} className='link'><div className={handleClass('rs')} onClick ={() =>  handleReset('rs')}>Стандарты</div></Link></li>
				<li><Link to={'/prep/subst'} className='link'><div className={handleClass('subst')} onClick ={() =>  handleReset('subst')}>Субстанции</div></Link></li>
				
			</ul>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Внести</div>
			<ul>
				<li><div className="menu__item"><Link to='/prep/addReagent' children="Реактивы" className='link'/></div></li>
				<li><div className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></div></li>
				<li><div className="menu__item"><Link to='/' children="Субстанции" className='link'/></div></li>
			</ul>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Карантин</div>
			<ul>
				<li><div className="menu__item"><Link to='/' children="Реактивы" className='link'/></div></li>
				<li><div className="menu__item"><Link to='/' children="Стандартные образцы" className='link'/></div></li>
				<li><div className="menu__item"></div></li>
			</ul>
		</div>
		)
}