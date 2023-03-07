import React from 'react';
import { useSelector } from 'react-redux';
import { useConfirm } from '../../../../../hooks/useConfirm.js'

export const ColumnOptions = (props) => {
    
    const {itemId, name, isolate} = useSelector(state => state.activeColumn);
    
    const [IsolateDialog, isolateConfirm] = useConfirm(`Списать колонку ID: ${itemId}, ${name}?`)
    const [DeleteDialog, deleteConfirm] = useConfirm(<p>Удалить колонку ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'left'}}>Мы не рекомендуем удалять колонки, данные которых могут понадобится ближайшие годы.</p> Вместо этого можно использовать функцию "Списать"</p>)

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
    



    return (
        <div className="desc__action-inner">
            <IsolateDialog/>
            <DeleteDialog/>
            <button className='desc__item-action' onClick={handleAddSame}>Внести похожую</button>
            {isolate && <button className='desc__item-action' onClick={confirmDelete}>Удалить</button>}
            {!isolate && <button className='desc__item-action' onClick={() => {setShowChange(true)}}>Изменить</button>}
            {!isolate && <button className='desc__item-action' onClick={confirmIsolate}>Списать</button>}
        </div>
    )

}