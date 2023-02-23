
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reagentReset } from '../../../redux/store/activeReagSlice'
import { useState } from 'react'
import { SVGpen } from '../../../svg/svg'
import { columnReset } from '../../../redux/store/activeColumnSlice'

export const PrepMenu = () => {
	const [onAdd, setOnAdd] = useState(false)
	const [activeTab, setActiveTab] = useState('reag')

	const dispatch = useDispatch();
	const handleReset = (tab) => {
		dispatch(reagentReset());
		dispatch(columnReset())
		setActiveTab(tab);
	} 


	const handleFill = () => {
		if (activeTab === 'add') {
			return 'black'
		} else {
			return 'white'
		}
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
			<div className="menu__subtitle">Карантин</div>
			<ul>
				<li><Link to='/prep/reag/isolate' className='link'><div className={handleClass('reagIsol')} onClick ={() =>  handleReset('reagIsol')}>Реактивы</div></Link></li>
				<li><Link to='/prep/rs/isolate' className='link'><div className={handleClass('rsIsol')} onClick ={() =>  handleReset('rsIsol')}>Стандарты</div></Link></li>
				<li><Link to='/prep/subst/isolate' className='link'><div className={handleClass('substIsol')} onClick ={() =>  handleReset('substIsol')}>Субстанции</div></Link></li>
				
			</ul>
			<div className="menu__stripe"></div>
			<div className="menu__subtitle">Колонки</div>
			<ul>
				<li><Link to='/prep/column/hplc' className='link'><div className={handleClass('hplc')} onClick ={() =>  handleReset('hplc')}>ВЭЖХ</div></Link></li>
				<li><Link to='/prep/column/gc' className='link'><div className={handleClass('gc')} onClick ={() =>  handleReset('gc')}>ГХ</div></Link></li>
				<li><Link to='/prep/column/isolate' className='link'><div className={handleClass('colIsol')} onClick ={() =>  handleReset('colIsol')}>Списанные</div></Link></li>
				
			</ul>
			<div className="menu__stripe"></div>
			<ul>
				<li><Link to='/prep/addReagent'className='link'>
						<div className={`${handleClass('add')} menu__item-inner`} onClick ={() =>  handleReset('add')}>
							<SVGpen fill={handleFill()}/>
							<br />
							<p>Внеcение</p>
					
						</div>
					</Link>
				</li>
			</ul>

		</div>
		)
}