import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CustomSelect } from '../../../customSelect/customSelect';

export const UserHistory = () => {
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [initialise, setInitialise] = useState(false)

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('userHistory')
    }, [])
    
    const userOptions = [];

    const handleSelectUser = () => {
        
    }

    const handleCreateReport = () => {
        
    }

    return(
        <div className="report">
            <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
                <h5 style={{marginBottom:'30px'}}>Задайте период и интересующий проект</h5>

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
                            <div className="filter__label">Проект</div>
                            <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleSelectUser}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'250px'}
                                options = {userOptions}
                            /> 
                        </div>
                    </div>
                    <button className="btn" style={{height:'38px'}} onClick={handleCreateReport}>Создать отчет</button>  
                </div>
        </div>
        </div>
    )
}