export const Options = (props) => {
    
    const {handleAddSame, handleDelete, handleChange, handleIsolate} = props

    return (
        <div className="desc__action-inner">
            <button className='desc__item-action' onClick={handleAddSame}>Внести похожий</button>
            <button className='desc__item-action' onClick={handleDelete}>Удалить</button>
            <button className='desc__item-action' onClick={handleChange}>Изменить</button>
            <button className='desc__item-action' onClick={handleIsolate}>Карантин</button>
        </div>
    )
} 