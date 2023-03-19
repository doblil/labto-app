import { useDispatch } from 'react-redux';
import { useConfirm } from '../../../../hooks/useConfirm';
import { sMessageCh } from '../../../../redux/store/sMessageSlice';
import './backup.scss'

export const BackupItem = (props) => {
    
    const {name, deleteBackup, deleteLoading, backupLoading, restoreDB, restoreLoading, downloadLocaly, downloadLoading} = props
    
    const dispatch = useDispatch();

    const [DeleteDialog, deleteConfirm] = useConfirm(`Удалить точку восстановления ${name}`);
    const [RestoreDialog, restoreConfirm] = useConfirm(<span>Запуск процесса востановления из точки {name}. <br/> Данная процедура является ДЕСТРУКТИВНОЙ. Все изменения, выполненные после создания точки восстановления будут отменены. <br/> <span style={{fontWeight: 'bold', color: 'crimson'}}>ВЫ УВЕРЕННЫ, ЧТО ХОТИТЕ ЗАПУСТИТЬ ПРОЦЕСС ВОССТАНОВЛЕНИЯ?</span></span>);

    const handleIsLoading = () => {
        if (deleteLoading || backupLoading || restoreLoading || downloadLoading) return true
        return false
    }

    const body = {backupFileName: name}

    const handleDelete = async () => {
        await deleteBackup(body).unwrap();
    }
    
    const handleRestore = async () => {
       await restoreDB(body).unwrap();
    }
    const handleDownload = async () => {
        if(handleIsLoading()) return dispatch(sMessageCh('Дождитетсь завершения предыдущего действия'))
        await downloadLocaly(body).unwrap();
    }

    const confirmDelete = async () => {
        if(handleIsLoading()) return dispatch(sMessageCh('Дождитетсь завершения предыдущего действия'))
        const confirm = await deleteConfirm();
        if(confirm){
            handleDelete();
        } else {
            return
        }
    }


    const confirmRestoreDB = async () => {
        if(handleIsLoading()) return dispatch(sMessageCh('Дождитетсь завершения предыдущего действия'))
        const confirm = await restoreConfirm();
        if(confirm){
            handleRestore();
        } else {
            return
        }
    }

    
    

    return (
        <>
            <DeleteDialog/>
            <RestoreDialog/>
            <div className="backup__item">
                <div className="backup__value">{name}</div>
                <div className="backup__value" style={{width:'10%'}}>
                    <div onClick={confirmDelete} title="удалить" className="backup__icon">
                        <img src="icons/trash.svg" alt="trash" />
                    </div>
                </div>
                <div className="backup__value" style={{width:'10%'}}>
                    <div onClick={handleDownload} title="Загрузить локально" className="backup__icon">
                        <img src="icons/cloud-arrow-up.svg" alt="cloud-arrow-up" />
                    </div>
                </div>
                <div className="backup__value" style={{width:'10%'}}>
                    <div onClick={confirmRestoreDB} title="Восстановить" className="backup__icon">
                        <img src="icons/restore.svg" alt="cloud-arrow-up" />
                    </div>
                </div>
            </div>
        </>
        
    )
}