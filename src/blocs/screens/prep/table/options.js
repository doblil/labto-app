import { useSelector } from "react-redux"
import { useConfirm } from "../../../../hooks/useConfirm"

export const Options = (props) => {
    
    const {itemId, name, isolate} = useSelector(state => state.activeReagent);
  

    const [IsolateDialog, isolateConfirm] = useConfirm(`Пренести реактив ID: ${itemId}, ${name} в карантин?`)
    const [DeleteDialog, deleteConfirm] = useConfirm(<p>Удалить реактив ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'left'}}>Мы не рекомендуем удалять реактивы, данные которых могут понадобится ближайшие годы.</p> Вместо этого можно использовать перенос  карантин</p>)
    const [ChangeDialog, changeConfirm] = useConfirm(<p>Изменить реактив ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'left'}}>Изменение данных не соответствует практике GMP, поэтому вы не сможете поменять значимые поля</p>Если вы ошиблись при создании реактива, лучше удалите его и внесите заново.</p>)

    const {handleAddSame, handleDelete, handleIsolate, setShowChange} = props
    
    const confirmIsolate = async () => {
        const confirm = await isolateConfirm();
        if(confirm){
            handleIsolate()
        } else {
            return
        }
    }
    const confirmDelete = async () => {
        const confirm = await deleteConfirm();
        if(confirm){
            handleDelete()
        } else {
            return
        }
    }
    const confirmChange = async () => {
        const confirm = await changeConfirm();
        if(confirm){
            setShowChange(true)
        } else {
            return
        }
    }

    console.log('isolate ',isolate)
    return (
        <div className="desc__action-inner">
            <ChangeDialog/>
            <IsolateDialog/>
            <DeleteDialog/>
            <button className='desc__item-action' onClick={handleAddSame}>Внести похожий</button>
            <button className='desc__item-action' onClick={confirmDelete}>Удалить</button>
            {!isolate && <button className='desc__item-action' onClick={confirmChange}>Изменить</button>}
            {!isolate && <button className='desc__item-action' onClick={confirmIsolate}>Карантин</button>}
        </div>
    )
} 