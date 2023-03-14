
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reagentReset } from '../../../redux/store/activeReagSlice'
import { useEffect, useState } from 'react'
import { SVGpen } from '../../../svg/svg'
import { columnReset } from '../../../redux/store/activeColumnSlice'
import { useRoleValidate } from '../../../hooks/useRoleValidate'

export const PrepMenu = (props) => {
	const {activeNav, setActiveNav} = props
	
	const dispatch = useDispatch();
	const roleValidation = useRoleValidate();


	const handleReset = (tab) => {
		dispatch(reagentReset());
		dispatch(columnReset())
	} 


	const handleFill = (active) => {
		if (activeNav === active) {
			return 'black'
		} else {
			return 'white'
		}
	}

	const handleClass = (v) => {
		if (activeNav === v) {
			return 'menu__item menu__item_active'
		} else {
			return 'menu__item'
		}
	}
	
	return(
		<div className="menu" style={{paddingRight: '30px'}}>
			<div className="menu__title">Препараторская</div>
			<div className="menu__stripe"></div>
			<div className="overflow" style={{height:'calc(100% - 20px)'}}>

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
				{roleValidation(['admin', 'developer', 'head']) && <ul>
					<li><Link to='/prep/addReagent'className='link'>
							<div className={`${handleClass('add')} menu__item-inner`} onClick ={() =>  handleReset('add')}>
								<SVGpen fill={handleFill('add')}/>
								<br />
								<p>Внесение</p>
						
							</div>
						</Link>
					</li>
					<li><Link to='/prep/addColumn'className='link'>
							<div className={`${handleClass('addColumn')} menu__item-inner`} onClick ={() =>  handleReset('addColumn')}>
								<SVGpen fill={handleFill('addColumn')}/>
								<br />
								<p style={{textAlign: 'center'}}>Внесение колонок</p>
						
							</div>
						</Link>
					</li>
				</ul>}
			</div>
			
		</div>
		)
}