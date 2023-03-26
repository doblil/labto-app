import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChangeUDMutation } from "../../../../redux/api/userApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";
import { CustomSelect } from "../../../customSelect/customSelect";


export const ChangeUserData = (props) => {
    const dispatch = useDispatch()
    const {name, position, direction, department, setShowChUserData, id, phone} = props;
    const [newName, setNewName] = useState(name)
    const [newPosition, setNewPosition] = useState(position)
    const [newDirection, setNewDirection] = useState(direction)
    const [newDepartment, setNewDepartment] = useState(department)
    const [newPhone, setNewPhone] = useState(phone)
    const [changeUserData, {isLoading}] = useChangeUDMutation();
    const {allDepartments, allPositions, allDirections} = useSelector(state=> state.global)
    const handleCancel = () => {
        setNewName(name);
        setNewPosition(position);
        setNewDirection(direction);
        setNewDepartment(department);
        setNewPhone(phone);
        setShowChUserData(false);
    };

    const handleSetName = (e) => {
        setNewName(e.target.value)
    } 
    const handleSetPosition = (target) => {
        setNewPosition(target.value)
    } 
    const handleSetDirection = (target) => {
        setNewDirection(target.value)
    } 
    const handleSetDepartment = (target) => {
        setNewDepartment(target.value)
    } 
    const handleSetPhone = (e) => {
        setNewPhone(e.target.value)
    } 

    const handleChangeUserData = async () => {
        if (isLoading) return

        if(!(newName && newPosition && newDirection && newDepartment && newPhone)) return dispatch(sMessageCh('Заполните все поля'))
        
        const body = {newName, newPosition, newDirection, newDepartment, newPhone};
        const target = id;
        if (!target) return dispatch(sMessageCh('Ошибка'));
        await changeUserData({body, target}).unwrap(); 
        handleCancel();
    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading"> 
                        <p>Изменение учетных данных сотрудника</p>
                    </div>
                    <div className="overlay__heading"> 
                        <p>{name}, {position}, {direction}, {department}. </p>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Полное имя</div>
                        <input
                            placeholder='ФИО'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {handleSetName}
                            value={newName}
                        />
                    </div>
                    
                    <div className="flow__destination">
                        <div className="flow__label">Должность</div>
                        <CustomSelect
                            options = {allPositions}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            handleChange = {handleSetPosition}
                            selected = {newPosition}
                        />
                    </div>
                    
                    <div className="flow__destination">
                        <div className="flow__label">Отдел</div>
                        <CustomSelect
                            options = {allDirections}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {newDirection}
                            handleChange = {handleSetDirection}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Управление</div>
                        <CustomSelect
                            options = {allDepartments}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {newDepartment}
                            handleChange = {handleSetDepartment}
                        />
                    </div>


                    <div className="flow__destination">
                        <div className="flow__label">Номер телефона</div>
                        <input
                            placeholder='номер'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {handleSetPhone}
                            value={newPhone}
                        />
                    </div>
                    <div className="flow__btn-wrap">
                        <button 
                            className="btn btn_white flow__btn" 
                            onClick = {handleChangeUserData}
                            children = 'Изменить'
                        />
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}