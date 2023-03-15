import { BackupItem } from './backupItem'
import '../../../../sass/sassTemplates/menu.scss'
import './backup.scss'



export const Backup = () => {

  	return(
    	<div>
            <div className="btn" style={{width:'max-content', marginBottom:'20px'}}> <img src="icons/plus-circle.svg" alt="plus" style={{marginRight:'10px', height:'20px'}}/> Создать резервную копию данных</div>
			<div className="backup__parameter">
				<div className="backup__value">Дата</div>
				<div className="backup__value">Имя</div>
				<div className="backup__value" style={{width:'10%'}}></div>
				<div className="backup__value" style={{width:'10%'}}></div>
            </div>
			<div className="overflow backup"><BackupItem/></div>
			
        </div>
    )
}