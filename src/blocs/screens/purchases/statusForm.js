import { useState } from "react";
import { useSelector } from "react-redux";
import { useRedirectOrderMutation, useStatusOrderMutation } from "../../../redux/api/orderApi";
import { sMessageCh } from "../../../redux/store/sMessageSlice";
import { stringifyDate, stringifyOrderStatus } from "../../../services/services";
import { CustomSelect } from "../../customSelect/customSelect";


export const StatusForm = (props) => {
    const {userId} = useSelector (state => state.auth)
    const {name, uniqueId, fromDate, ownerName, status, setShowStatusForm} = props
    const [newStatus,  setNewStatus] = useState(null);

    const [statusOrder, {isLoading}] = useStatusOrderMutation();


    const statusOptions = [
        {value: 'processed', label: 'в обработке'},
        {value: 'executed', label: 'выполняется'},
        {value: 'completed', label: 'готов, ожидает подтверждения'},
        {value: 'canceled', label: 'отменен'},
        {value: 'reviced', label: 'отправлен на доработку'},
        {value: 'changed', label: 'изменен'},
    ];


    const handleCancel = () => {
        setShowStatusForm(false);
        setNewStatus(null)
    }

    const handleSelectStatus = (target) => {
        setNewStatus(target.value)

    }

    const handleChangeStatus = async () => {
        if(!newStatus || isLoading) return
        
        try {
            const target = uniqueId
            const status = newStatus
            await statusOrder({target, status}).unwrap();
            handleCancel();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading"> Изменить статус заказа
                    </div>
                    <br />
                    <div className="confirm__text" style={{marginBottom:'6px'}}> 
                        Заказ № {uniqueId} от {stringifyDate(fromDate)} <br /> {name} <br /> Заказчик: {ownerName} <br /> Статус: {stringifyOrderStatus(status)}
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label" style={{marginTop:'6px'}}>Новый статус</div>
                        <CustomSelect
                            handleChange = {handleSelectStatus}
                            options = {statusOptions}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {newStatus}
                        />
                    </div>

                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn" onClick={handleChangeStatus}>Изменить</button>
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                </div>
            </div>
        </>
    )
}