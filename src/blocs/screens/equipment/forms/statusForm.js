import { useState } from "react";
import { stringifyEquipmentStatus } from "../../../../services/services";
import { CustomSelect } from "../../../customSelect/customSelect";
import { useStatusEquipmentMutation } from "../../../../redux/api/equipmentApi";
import { useDispatch } from "react-redux";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";

export const StatusForm = (props) => {
    const {eqName, target, setShowStatusForm, status: currentStatus, itemId, manufacturer, model, sn} = props;
    
    const [newStatus, setNewStatus] = useState(currentStatus)
    const [initialise, setInitialise] = useState(false)
    const [confirm, setConfirm] = useState(false)


    const dispatch = useDispatch();
    const [statusEquipment, {isLoading}] = useStatusEquipmentMutation();

    const statusOptions = [
        {label: 'Готов', value: 'ready'},
        {label: 'Сломан', value: 'broken'},
        {label: 'В ремонте', value: 'repair'},
        {label: 'На хранении', value: 'storage'},
        {label: 'На поверке', value: 'verification'},
        {label: 'Не поверен', value: 'verificationExpired'},
        {label: 'Поверка не продена', value: 'verificationFail'},
    ]

    const handleClose = () => {
        setShowStatusForm(false)
    }

    const handleSelectStatus = (target) => {
        setNewStatus(target.value)
    }

    const handleStatus = async () => {
        if (isLoading) return dispatch(sMessageCh('Попробуйте снова'));
        if (!newStatus) return dispatch(sMessageCh('Статус не выбран'));
        const body = {
            status: newStatus
        };
        await statusEquipment({target, body}).unwrap();
        handleClose();

    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleClose}></div>
                    <div className="overlay__heading"> <p>Изменение статуса оборудования: {eqName}, {manufacturer},{model},<br/>Зав.№: {sn} | ID: {itemId}</p></div>
                    <div className="overlay__heading"> <p>Текущй статус: "{stringifyEquipmentStatus(currentStatus).name}"</p></div>

                    <div className="flow__destination">
                        <div className="flow__label"style={{marginTop:'7px'}}>Ответственный за ознакомление</div>
                        <CustomSelect
                            handleChange = {handleSelectStatus}
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            options = {statusOptions}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {newStatus}
                        />
                    </div>
                    <div className="flow__destination">
                    <div className="flow__label"style={{marginTop:'7px'}}></div>
                    <div className=""style ={{width: '60%'}}> 
                        <input 
                        checked = {confirm}
                        value = {true}
                        className="custom-checkbox" 
                        type="checkbox"id="chb-addFile" 
                        name="chb-addFile"
                        onChange={() => setConfirm(!confirm)}
                    />
                    <label className="custom-checkbox__text" for="chb-addFile">Подтердить</label></div>
                    </div>


                    <div className="flow__btn-wrap">
                        <button className="btn flow__btn btn_white" onClick={handleClose}>Отменить</button>
                        <button 
                            className="btn flow__btn" 
                            onClick = {handleStatus}
                        >Изменить статус</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}