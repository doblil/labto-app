import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterArrM } from '../../redux/store/sMessageSlice';


export const ServerMItem = (props) => {
    const {text, index} = props
    const dispatch = useDispatch();

    useEffect(() => {

        const timerId = setTimeout(() => {
            dispatch(filterArrM(text));
            clearTimeout(timerId);
        }, 5500);

        
    })

    return (
        <>
            <div style={{opacity: `${1-(index*0.2)}`}} className='server-message__item'>{text}</div>
        </>
    )
}