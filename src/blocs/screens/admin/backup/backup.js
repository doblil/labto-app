import { BackupItem } from './backupItem'
import '../../../../sass/sassTemplates/menu.scss'
import './backup.scss'
import { useBackupDBMutation, useDeleteBackupMutation, useDownloadLocalyMutation, useGetBackupsQuery, useRestoreDBMutation } from '../../../../redux/api/backupApi'
import { useConfirm } from '../../../../hooks/useConfirm'
import { useDispatch } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'
import { BackupLoading } from './backupLoading'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'



export const Backup = () => {
	
	const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('backup')
    }, [])

	// rtk queries hooks 
	const {data, isLoading, isSuccess, isError} = useGetBackupsQuery();
	const [deleteBackup, {isLoading: deleteLoading,}] = useDeleteBackupMutation();
	const [backupDB, {isLoading: backupLoading}] = useBackupDBMutation();
	const [restoreDB, {isLoading: restoreLoading}] = useRestoreDBMutation();
	const [downloadLocaly, {isLoading: downloadLoading}] = useDownloadLocalyMutation();
	//
	const dispatch = useDispatch()
	// create backup logic
	const [BackupDialog, backupConfirm] = useConfirm(`Создать точку восстановления?`);
	const handleBackup = async () => {
        await backupDB().unwrap();
    }
	const handleIsLoading = () => {
        if (deleteLoading || backupLoading || restoreLoading || downloadLoading) return true
        return false
    }
	const confirmBackupDB = async () => {
        if(handleIsLoading()) return dispatch(sMessageCh('Дождитетсь завершения предыдущего действия'))
        const confirm = await backupConfirm();
        if(confirm){
            handleBackup();
        } else {
            return
        }
    }
	//
	let content
	
	if(isLoading) content =  <h5>Загрузка...</h5>
	if(isError) content =  <h5>Ошибка</h5>

	if(isSuccess && data?.backupsArr.length){
		content = data?.backupsArr.map(item => {
			return <BackupItem 
				name = {item} 
				key = {item}
				deleteBackup = {deleteBackup}
				deleteLoading = {deleteLoading}
				backupLoading = {backupLoading}
				restoreDB = {restoreDB}
				restoreLoading = {restoreLoading}
				downloadLocaly = {downloadLocaly}
				downloadLoading = {downloadLoading}	
			/>
		})
	}



  	return(
		
    	<div style={{height:'100%'}}>
			{backupLoading && <BackupLoading text='Создание точки восстановления'/>}
			{restoreLoading && <BackupLoading text='Восстановление базы данных'/>}

			<BackupDialog/>
            <div 
				className="btn" 
				style={{width:'max-content', marginBottom:'20px'}}
				onClick = {confirmBackupDB}
			> <img src="icons/plus-circle.svg" alt="plus" style={{marginRight:'10px', height:'20px'}}/> Создать резервную копию данных</div>
			<div className="backup__parameter">
				<div className="backup__value">Имя</div>
				<div className="backup__value" style={{width:'10%'}}></div>
				<div className="backup__value" style={{width:'10%'}}></div>
            </div>
			<div className="overflow backup" style={{height:'calc(100% - 100px)'}}>
				{content}
			</div>
			
        </div>
    )
}