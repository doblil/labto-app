import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { useGetUserHistoryMutation } from '../../../../redux/api/historyApi';
import { sMessageCh } from '../../../../redux/store/sMessageSlice';
import { CustomSelect } from '../../../customSelect/customSelect';
import { UserHistoryTable } from './userHistoryTable';

import '../../../../sass/sassTemplates/menu.scss'


export const UserHistory = () => {
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [targetUser, setTargetUser] = useState('')
    const [initialise, setInitialise] = useState(false)

    const {allUsers} = useSelector(state=> state.global)    
    const dispatch = useDispatch();
    const [getUserHistory, {isLoading, isSuccess, data}] = useGetUserHistoryMutation();

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('userHistory')
    }, [])
    
    const userOptions = allUsers.map(item => {
        return { value: item._id, label: `${item.name}, ${item.position}, ${item.direction}`}
    });

    const handleSelectUser = (target) => {
        setTargetUser(target.value)
    }

    const handleCreateReport = async () => {
        if (isLoading) return dispatch(sMessageCh('Дождитесь загрузки предыдущего отчета'));
        if (!endDate || !startDate || !targetUser) return dispatch(sMessageCh('Заполните все поля формы!'));
        await getUserHistory({target: targetUser, body: {startDate, endDate}}).unwrap();
    }


    return(
        <div className="report">
            <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
                <h5 style={{marginBottom:'30px'}}>Задайте период и пользователя</h5>

                <div className="filter__wrap" style={{marginBottom:'5px'}}>
                    <div className="filter__inputs" >
                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                            <div className="filter__label">От (дд.мм.гггг 00:00)</div>
                            <input 
                                type="date" 
                                className="filter__input" 
                                style={{height:'38px'}}
                                onChange = {(e) => {setStartDate(e.target.value)}}
                                value = {startDate}
                            />
                        </div>

                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                            <div className="filter__label">До (дд.мм.гггг 00:00)</div>
                            <input 
                                type="date" 
                                className="filter__input" 
                                style={{height:'38px'}}
                                onChange = {(e) => {setEndDate(e.target.value)}}
                                value = {endDate}
                            />
                        </div>

                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}} >
                            <div className="filter__label">Сотрудник</div>
                            <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleSelectUser}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'250px'}
                                options = {userOptions}
                                selected = {targetUser}
                            /> 
                        </div>
                    </div>
                    <button className="btn" style={{height:'38px'}} onClick={handleCreateReport}>Смотреть историю</button>  
                </div>
                <div className="filter__wrap" style={{marginTop:'13px'}}>
                    <div className="filter__item filter__item_mini filter__item_mini_active">
                        Все действия
                    </div>
                    <div className="filter__item filter__item_mini">
                        Входы в систему
                    </div>
                    <div className="filter__item filter__item_mini">
                        Списания
                    </div>
                    <div className="filter__item filter__item_mini">
                        Использования колонок
                    </div>
                    <div className="filter__item filter__item_mini">
                        Действия препаратора
                    </div>
                    <div className="filter__item filter__item_mini">
                        Администрирование
                    </div>
                    <div className="filter__item filter__item_mini">
                        Отчетность
                    </div>
                </div>                
            </div>

        {isSuccess && <UserHistoryTable history = {data.history}/>}

        </div>
    )
}