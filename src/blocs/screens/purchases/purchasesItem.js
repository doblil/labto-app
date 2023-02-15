import { useRef } from 'react';
import { useState } from 'react'
import { useArchiveOrderMutation, useDeleteOrderMutation, useMessageOrderMutation, useStatusOrderMutation } from '../../../redux/api/orderApi';
import { stringifyDate, stringifyOrderStatus } from '../../../services/services'
import { RedirectForm } from './redirectForm';
import { StatusForm } from './statusForm';


export const PurchasesItem = (props) => {
    
    const [showForm, setShowForm] = useState(false);
    const [comment, setComment] = useState('')
    const [showRedirectForm, setShowRedirectForm] = useState(false)
    const [showStatusForm, setShowStatusForm] = useState(false)
    const {name, status, fromDate, manufacturer, cat, text, uniqueId, messages, target, ownerName, archive} = props
    const messageList = messages?.map(item => {
       return <p style={{fontWeight:'700', padding:'5px'}}>{stringifyDate(item.date)}, {item.from}: {item.text}</p>
    })

    const [messageOrder, {isLoading}] = useMessageOrderMutation();
    const [archiveOrder, {isLoading: archiveLoading}] = useArchiveOrderMutation();
    const [deleteOrder, {isLoading: deleteLoading}] = useDeleteOrderMutation();

    const inputRef = useRef(null);

    const handleShowForm = () => {
        setShowForm(true);
        inputRef.current.focus();
    }
    const hanleResetForm = () => {
        setComment('');
        setShowForm(false);
    }

    const handleMesageOrder = async () => {
        if(!isLoading && comment){
            await messageOrder({target, body:{text:comment}}).unwrap();
            hanleResetForm();
        } else {
            return
        }
    }

    const handleDeleteOrder = async () => {
        if(isLoading || deleteLoading || archiveLoading) return
        await deleteOrder(uniqueId).unwrap();
    }
    const handleArchiveOrder = async () => {
        if(isLoading || deleteLoading || archiveLoading) return
        await archiveOrder(uniqueId).unwrap();
    }

    return (
        <>        
            {showRedirectForm && <RedirectForm name = {name} uniqueId={uniqueId} fromDate={fromDate} ownerName={ownerName} status = {status} setShowRedirectForm = {setShowRedirectForm}/>}
            {showStatusForm && <StatusForm name = {name} uniqueId={uniqueId} fromDate={fromDate} ownerName={ownerName} status = {status} setShowStatusForm = {setShowStatusForm}/>}
            <div className="profile__item">
                <div className="profile__value ">{stringifyDate(fromDate)}, <br/><br/>Заказчик: <br/>{ownerName}</div>
                <div className="profile__value " style={{fontWeight: 'bold'}}>{uniqueId}</div>
                
                
                <div className="profile__value profile__value_name"> <span>{name}</span> <br /> {manufacturer} <br /> {cat}</div>
                <div className="profile__value profile__value_text overflow"  style={{maxHeight:'125px'}}>
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
                </div>
                <div className="profile__value profile__value_border">{stringifyOrderStatus(status)}</div>
                <div className="profile__value">
                    {(!['completed', 'canceled', 'confirmed'].includes(status)) && <div className="profile__select" style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} onClick={()=>setShowStatusForm(true)}>Изменить статус</div>}
                    {(!['completed', 'canceled', 'confirmed'].includes(status)) && <div className="profile__select" style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} onClick={()=>setShowRedirectForm(true)}>Перенаправить</div>}
                    {(['canceled', 'confirmed'].includes(status)) &&  <div style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} className="profile__select"onClick={handleDeleteOrder}>Удалить</div>}
                    {(!archive && ['canceled', 'confirmed'].includes(status)) &&  <div style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} className="profile__select"onClick={handleArchiveOrder}>В архив</div>}
                    {!archive && <div className="profile__select" style={{ width:'105px', fontSize:'10px', marginLeft:'5px'}} onClick={handleShowForm}>+Kомментарий</div>} 
                </div>        
            </div>

        </>
        
    )
}