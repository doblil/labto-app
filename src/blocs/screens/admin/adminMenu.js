import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useConfirm } from '../../../hooks/useConfirm'
import { useStartServiceMutation, useStopServiceMutation } from '../../../redux/api/settingsApi'
import { serviceCh } from '../../../redux/store/globalSlice'
import { sMessageCh } from '../../../redux/store/sMessageSlice'
import '../../../sass/sassTemplates/menu.scss'
import { SwitchToggle } from '../../switchToggle/switchToggle'

export const AdminMenu = (props) => {

	const dispatch = useDispatch()
	const {service} = useSelector(state => state.global)


	const {activeNav} = props
	const [startService, {isLoading: startLoading, isSuccess: startSuccess}] = useStartServiceMutation();
	const [stopService, {isLoading: stopLoading, isSuccess: stopSuccess}] = useStopServiceMutation();

	const [StartDialog, startConfirm] = useConfirm(`Заблокировать приложение для обычных пользователей и перейти в режим администрирования?`);
	const [StopDialog, stopConfirm] = useConfirm(`Разблокировать приложение для обычных пользователей и выйти из режима администрирования?`);

	const handleStartService = async () => {
		if(startLoading || stopLoading) return dispatch(sMessageCh('Дождитесь выполнения предыдущей операции'));
		await startService().unwrap()
		dispatch(serviceCh(true))

	}
	const handleStopService = async () => {

		if(startLoading || stopLoading) return dispatch(sMessageCh('Дождитесь выполнения предыдущей операции'));
		await stopService().unwrap()
		dispatch(serviceCh(false))
	}

	const confirmStartService = async () => {
		if(startLoading || stopLoading) return dispatch(sMessageCh('Дождитесь выполнения предыдущей операции'));
        const confirm = await startConfirm();
        if(confirm){
            handleStartService();
        } else {
            return
        }
    }
	const confirmStopService = async () => {
		if(startLoading || stopLoading) return dispatch(sMessageCh('Дождитесь выполнения предыдущей операции'));
        const confirm = await stopConfirm();
        if(confirm){
            handleStopService();
        } else {
            return
        }
    }

  const handleActiveNav = (navName) => {
    if(activeNav === navName){
     return "menu__item menu__item_active"
    }
    return "menu__item"
   }

    return(
        <div className="menu" style={{paddingRight: '30px'}}>
			<StartDialog/>
			<StopDialog/>
            <div className="menu__title">Управление</div>
            <div className="menu__stripe"></div>
            <div className="overflow" style={{height:'calc(100% - 20px)'}}>
            
                <ul>
                    <li><Link to='/admin/list' className='link'><div className={handleActiveNav('users')}>Сотрудники</div></Link></li>
                    <li><Link to='/admin/projects'  className='link'><div className={handleActiveNav('projects')}>Проекты</div></Link></li>
                    <li><Link to='/admin/options'  className='link'><div className={handleActiveNav('options')}>Опции</div></Link></li>
                    <li><Link to='/admin/setMobileApp'  className='link'><div className={handleActiveNav('mobileApp')}>Активация приложения</div></Link></li>
                    <li><Link to='/admin/backup'  className='link'><div className={handleActiveNav('backup')}>Резервное копирование</div></Link></li>
                    <li><Link to='/admin/userHistory'  className='link'><div className={handleActiveNav('userHistory')}>Активность сотрудников</div></Link></li>
                    
                </ul>
                <div className="menu__stripe"></div>
                <div className="menu__subtitle">Технический<br />режим</div>

                <div style={{ display:'flex', alignItems:'center'}}>
                    <SwitchToggle checked = {service}  onEnable= {confirmStartService} onDisable = {confirmStopService}/> 
                    <p style={{marginLeft:'5px', fontSize:'11px', color:'white'}}>{service ? 'Активен' : 'Не активен'}</p>   
                </div>
            </div>
      </div>
    )
  }