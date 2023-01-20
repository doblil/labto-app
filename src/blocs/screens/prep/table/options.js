export const Options = (props) => {
    
    const {handleAddSame, handleDeleteReagent, handleChangeReagent, handleIsolate} = props

    return (
        <div className="desc__action-inner">
            <button className='desc__item-action' onClick={handleAddSame}>Внести похожий</button>
            <button className='desc__item-action' onClick={handleDeleteReagent}>Удалить</button>
            <button className='desc__item-action' onClick={handleChangeReagent}>Изменить</button>
            <button className='desc__item-action' onClick={handleIsolate}>Карантин</button>
        </div>
    )
} 