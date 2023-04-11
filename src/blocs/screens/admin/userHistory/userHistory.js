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
    const [filter, setFilter] = useState('all') // 'all', 'reag', 'column', 'enter', 'other'
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

    const handleFilterHistory = (arr) => {
        if(filter === 'all') return arr
        if(filter === 'enter') return arr.filter(item => item.action.includes('enter'))
        if(filter === 'reag') return arr.filter(item => item.action.includes('reag'))
        if(filter === 'column') return arr.filter(item => item.action.includes('column'))
        if(filter === 'other') return arr.filter(item => !(item.action.includes('column') || !item.action.includes('reag')) || !item.action.includes('enter'))
        return arr
    }

    const handleFilterStyle = (currentFilter) => {
        if(filter === currentFilter) return "filter__item filter__item_mini filter__item_mini_active"
        return "filter__item filter__item_mini"
    }

    return(
        <div className="report" >
            <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
                <h5 style={{marginBottom:'30px'}}>Задайте период и пользователя</h5>

                <div className="filter__wrap" style={{marginBottom:'5px', marginRight:'0'}}>
                    <div className="filter__inputs" >
                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}}>
                            <div className="filter__label">От (дд.мм.гггг 00:00)</div>
                            <input 
                                type="date" 
                                className="filter__input" 
                                style={{height:'38px'}}
                                onChange = {(e) => {setStartDate(e.target.value)}}
                                value = {startDate}
                            />
                        </div>

                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}}>
                            <div className="filter__label">До (дд.мм.гггг 00:00)</div>
                            <input 
                                type="date" 
                                className="filter__input" 
                                style={{height:'38px'}}
                                onChange = {(e) => {setEndDate(e.target.value)}}
                                value = {endDate}
                            />
                        </div>

                        <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}} >
                            <div className="filter__label">Сотрудник</div>
                            <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleSelectUser}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'200px'}
                                options = {userOptions}
                                selected = {targetUser}
                            /> 
                        </div>
                    </div>
                    <button className="btn" style={{height:'38px'}} onClick={handleCreateReport}>Смотреть историю</button>  
                </div>
                <div className="filter__wrap" style={{marginTop:'13px'}}>
                    <div 
                        className={handleFilterStyle('all')}
                        onClick={() => setFilter('all')}
                    >
                        Все действия
                    </div>
                    <div 
                        className={handleFilterStyle('enter')}
                        onClick={() => setFilter('enter')}
                    >
                        Входы в систему
                    </div>
                    <div 
                        className={handleFilterStyle('reag')}
                        onClick={() => setFilter('reag')}
                    >
                        Реактивы
                    </div>
                    <div 
                        className={handleFilterStyle('column')}
                        onClick={() => setFilter('column')}
                    >
                        Колонки
                    </div>
                    <div 
                        className={handleFilterStyle('other')}
                        onClick={() => setFilter('other')}
                    >
                        Прочее
                    </div>
                    {/* <div className={handleFilterStyle('all')}>
                        Действия препаратора
                    </div>
                    <div className={handleFilterStyle('all')}>
                        Администрирование
                    </div>
                    <div className={handleFilterStyle('all')} style={{marginRight:'0px'}}>
                        Отчетность
                    </div> */}
                </div>                
            </div>

        {isSuccess && <UserHistoryTable history = {handleFilterHistory(data.history)}/>}

        </div>
    )
}