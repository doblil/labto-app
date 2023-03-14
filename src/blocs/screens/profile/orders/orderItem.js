import { useRef } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useMessageOrderMutation, useStatusOrderMutation } from '../../../../redux/api/orderApi';
import { stringifyDate, stringifyOrderStatus } from '../../../../services/services'


export const OrderItem = (props) => {
    
    

    const [showForm, setShowForm] = useState(false);
    const [comment, setComment] = useState('')
    
    const {name, status, fromDate, manufacturer, cat, text, uniqueId, messages, target} = props
    const messageList = messages.map(item => {
       return <p style={{fontWeight:'700', padding:'5px'}}>{stringifyDate(item.date)}, {item.from}: {item.text}</p>
    })

    const [messageOrder, {isLoading}] = useMessageOrderMutation()
    const [statusOrder, {isLoading: statusLoading}] = useStatusOrderMutation();
    const inputRef = useRef(null);
    const bottomRef = useRef(null);
    const topRef = useRef(null)
    

    const handleShowForm = () => {
        setShowForm(true);
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "nearest"});

    }
    const hanleResetForm = () => {
        setComment('');
        setShowForm(false);
        topRef.current?.scrollIntoView({behavior: 'smooth', block: "nearest"});
    }

    const handleMesageOrder = async () => {
        if(!isLoading && comment){
            await messageOrder({target, body:{text:comment}}).unwrap();
            hanleResetForm();
        } else {
            return
        }
    }

    const handleConfirm = async () => {
        if(isLoading || statusLoading) return
        if(status !== 'completed') return
        const target = uniqueId;
        await statusOrder({target, status: 'confirmed'});
    }

    return (
        <>  
                 
            <div className="profile__item">
                <div className="profile__value ">{stringifyDate(fromDate)}</div>
                <div className="profile__value " style={{fontWeight: 'bold'}}>{uniqueId}</div>
                
                
                <div className="profile__value profile__value_name"> <span>{name}</span> <br /> {manufacturer} <br /> {cat}</div>
                <div className="profile__value profile__value_text overflow"  style={{maxHeight:'125px'}}>
                    <div ref={topRef}></div> 
                    <p>{text}</p>
                    <br />
                    <p style={{fontWeight: 'bold'}}>Комментарии:</p>
                    
                    {messageList}

                    <br />
                    {showForm &&
                     <div className="profile__wrap">
                        <div className="close" style={{top: '-10px', right: '8px'}} onClick={hanleResetForm}></div>
                        <textarea 
                            ref={inputRef}  
                            type="text" 
                            class="flow__input-text" 
                            placeholder="Введите комментарий" 
                            style={{width:'90%'}}
                            onChange = {(e) => setComment(e.target.value)}
                        />
                        <button 
                            className='btn' 
                            style={{width:'52px',height:'33px', backgroundColor:'#00a0a0',marginRight:'7px', marginLeft:'7px', fontSize:'11px'}}
                            onClick = {handleMesageOrder}
                        > <img src="icons/send.svg" alt="send" /> </button>
                         
                    </div>
                    }
                    <div ref={bottomRef}></div>
                </div>
                <div className="profile__value profile__value_border">{stringifyOrderStatus(status)}</div>
                <div className="profile__value">
                    {status === 'completed' && <div className="profile__select" style={{width:'105px', fontSize:'10px', marginLeft:'5px', backgroundColor: 'rgb(0, 172, 127)', color:"white"}} onClick={handleConfirm}>Подтвердить</div>}
                    <div className="profile__select" style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} onClick={handleShowForm}>+Kомментарий</div> 
                </div>        
            </div>

            {/* <div className="profile__messages">
                <span>Cообщения</span>
            </div>  */}
        </>
        
    )
}