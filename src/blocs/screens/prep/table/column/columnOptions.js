import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const ColumnOptions = (props) => {
    
    const {itemId, name, isolate, _id} = useSelector(state => state.activeColumn);

    const {handleAddSame, handleDelete, handleIsolate, handleChange, handleShowChange} = props

    return (
        <div className="desc__action-inner">

        <button className='desc__item-action' >Внести похожую</button>
        {isolate && <button className='desc__item-action' >Удалить</button>}
        {!isolate && <button className='desc__item-action' >Изменить</button>}
        {!isolate && <button className='desc__item-action' >Карантин</button>}
    </div>
    )

}