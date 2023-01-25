import { useSelector } from "react-redux"
import { useConfirm } from "../../../../hooks/useConfirm"

export const Options = (props) => {
    
    const {itemId, name} = useSelector(state => state.activeReagent);
  

    const [IsolateDialog, isolateConfirm] = useConfirm(`Пренести реактив ID: ${itemId}, ${name} в карантин?`)
    const [DeleteDialog, deleteConfirm] = useConfirm(<p>Удалить реактив ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Мы не рекомендуем удалять реактивы, данные которых могут понадобится ближайшие годы.</p> Вместо этого можно использовать перенос  карантин</p>)
    const [ChangeDialog, changeConfirm] = useConfirm(<p>Изменить реактив ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Изменение данных не соответствует практике GMP!</p>Если вы ошиблись при создании реактива, лучше удалите его и внесите заново. У изменненого реактива появиться пометка "Изменен"</p>)

    const {handleAddSame, handleDelete, handleChange, handleIsolate, setShowChange} = props
    
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
            handleChange()
        } else {
            return
        }
    }


    return (
        <div className="desc__action-inner">
            <ChangeDialog/>
            <IsolateDialog/>
            <DeleteDialog/>
            <button className='desc__item-action' onClick={handleAddSame}>Внести похожий</button>
            <button className='desc__item-action' onClick={confirmDelete}>Удалить</button>
            <button className='desc__item-action' onClick={()=>setShowChange(true)}>Изменить</button>
            <button className='desc__item-action' onClick={confirmIsolate}>Карантин</button>
        </div>
    )
} 