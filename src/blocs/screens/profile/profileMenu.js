
import '../../../sass/sassTemplates/menu.scss'
import { Link } from 'react-router-dom'
import { useLazyGetHelpQuery } from '../../../redux/api/helpApi'


export const ProfileMenu = (props) => {

  	const {activeNav} = props
	const [getHelp, {isLoading}] = useLazyGetHelpQuery();

	const handleActiveNav = (navName) => {
		if(activeNav === navName){
		return "menu__item menu__item_active"
		}
		return "menu__item"
	}


    return(
        <div className="menu" style={{paddingRight: '30px'}}> 
        <div className="menu__title">Профиль</div>
        <div className="menu__stripe"></div>
        <div className="overflow" style={{height:'calc(100% - 20px)'}}>
          <ul>
              <li><Link to='/profile/info' className='link'><div className={handleActiveNav('info')}>Информация</div></Link></li>
              <li><Link to='/profile/drafts'  className='link'><div className={handleActiveNav('drafts')}>Черновики</div></Link></li>
              <li><Link to='/profile/history'  className='link'><div className={handleActiveNav('history')}>История</div></Link></li>
              <li><Link to='/profile/orders'  className='link'><div className={handleActiveNav('orders')}>Заказы</div></Link></li>
              <div className="menu__stripe" style={{marginBottom:'5px'}}></div>
              <li><div className="menu__faq " onClick={() => getHelp()}>
                {! isLoading && <img src="icons/faq.svg" alt="faq" />} 
                {isLoading && <div className='spinner'></div>}
              Помощь</div></li> 
          </ul>
        </div>
        
      </div>
    )
  }