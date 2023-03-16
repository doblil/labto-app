import './backup.scss'

export const BackupItem = () => {
    return (
        <div className="backup__item">
            <div className="backup__value">345</div>
            <div className="backup__value">345й бэкап</div>

            <div className="backup__value" style={{width:'10%'}}>
                <div className="backup__icon">
                    <img src="icons/trash.svg" alt="trash" />
                </div>
            </div>
            <div className="backup__value" style={{width:'10%'}}>
                <div className="backup__icon">
                    <img src="icons/cloud-arrow-up.svg" alt="cloud-arrow-up" />
                </div>
            </div>
            <div className="backup__value" style={{width:'10%'}}>
                <div className="backup__icon">
                    <img src="icons/restore.svg" alt="restore" />
                </div>
            </div>
        </div>
    )
}