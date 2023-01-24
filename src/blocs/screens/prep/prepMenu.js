import './prep.scss'
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reagentReset } from '../../../redux/store/activeReagSlice'
import { useState } from 'react'
 

export const PrepMenu = () => {
  
	const [activeTab, setActiveTab] = useState('reag')

	const dispatch = useDispatch();

	console.log(activeTab)

	const handleReset = (e) => {
		dispatch(reagentReset());
		setActiveTab(e.target.value);
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
				<li><Link to={'/prep/reag'} className='link'><div className={handleClass('reag')} value = {'reag'} onClick ={handleReset}>Реактивы</div></Link></li>
				<li><Link to={'/prep/rs'} className='link'><div className={handleClass('rs')} value = {'rs'} onClick ={handleReset}>Стандарты</div></Link></li>
				<li><Link to={'/prep/subt'} className='link'><div className={handleClass('subst')} value = {'subst'} onClick ={handleReset}>Субстанции</div></Link></li>
				
			</ul>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Внеcение</div>
			<ul>
				<li><Link to='/prep/addReagent'  className='link'><div className="menu__item">Реактивы</div></Link></li>
				<li><Link to='/' className='link'><div className="menu__item">Стандартные образцы</div></Link></li>
				<li><Link to='/'  className='link'><div className="menu__item">Субстанции</div></Link></li>
			</ul>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Карантин</div>
			<ul>
				<li><Link to='/' className='link'><div className="menu__item">Реактивы</div></Link></li>
				<li><Link to='/' className='link'><div className="menu__item">Стандартные образцы</div></Link></li>
			</ul>
		</div>
		)
}