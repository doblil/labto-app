import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChangeRoleMutation } from "../../../../redux/api/userApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";
import { stringifyRole } from "../../../../services/services";
import { CustomSelect } from "../../../customSelect/customSelect";


export const ChangeRole = (props) => {
    const dispatch = useDispatch()
    const {name, position, direction, setShowChRole, id, role} = props;
    const [newRole, setNewRole] = useState('')
    const [changeRole, {isLoading}] = useChangeRoleMutation();
    const {allRoles} = useSelector(state => state.global)
    const handleCancel = () => {
        setNewRole('');
        setShowChRole(false)
    };

    const handleSetRole = (target) => {
        setNewRole(target.value)
    } 

    const handleChangeRole = async () => {
        if (isLoading) return
        if(!newRole) return dispatch(sMessageCh('Внесите изменения или закроте окно'))
        const body = {newRole};
        const target = id;
        if (!target) return dispatch(sMessageCh('Ошибка'));
        await changeRole({body, target}).unwrap(); 
        handleCancel();
    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading"> 
                        <p>Изменение прав сотрудника</p>
                    </div>
                    <div className="overlay__heading"> 
                        <p>{name}, {position}, {direction}. Текущие права: {stringifyRole(role)}</p>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Права</div>
                        <CustomSelect
                            options = {allRoles}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            handleChange = {handleSetRole}
                            selected = {newRole}
                        />
                    </div>
                    <div className="flow__btn-wrap">
                        <button 
                            className="btn btn_white flow__btn" 
                            onClick = {handleChangeRole}
                            children = 'Изменить'
                        />
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}