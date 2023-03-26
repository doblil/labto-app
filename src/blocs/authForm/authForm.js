import {  useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../redux/store/authSlice';
import { useLoginMutation } from '../../redux/api/authApi';
import { sMessageCh } from '../../redux/store/sMessageSlice';
import { useNavigate } from 'react-router-dom';

import './authForm.scss'
import { useStartGetIsServiceQuery } from '../../redux/api/settingsApi';
import { serviceCh } from '../../redux/store/globalSlice';
import { useGetIsStartQuery, useStartAppMutation } from '../../redux/api/startApi';

export const AuthForm = (props) => {

    const authRef = useRef(null)

    useEffect(() => {
      authRef.current.focus();
    }, [])

    const {service} = useSelector(state => state.global)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, ] = useLoginMutation();
    const {data, isSuccess} = useStartGetIsServiceQuery();
    const{data: startData, isSuccess: startSuccess} = useGetIsStartQuery();
    const [startApp, {isLoading: startAppLoading}] = useStartAppMutation();
    
    const handleStartApp = async () => {
        if(!startSuccess || startAppLoading) return dispatch(sMessageCh('Пожалуйста, подождите'));
        await startApp({department}).unwrap();
    }

    if(startSuccess && startData.start){
        return(
            <div className="auth overflow">
                    <div className="auth__form">
                        <img src="icons/main_logo.svg" alt="logo" />
                        <div className="auth__wrapper" style={{width:'600px'}}>
                            <form className=" fadein" >
                                <label style={{width:'400px'}}>Название компании и/или упраления</label>
                                <input style={{width:'400px'}}  onChange={(e) => setDepartment(e.target.value)}  type="text" className="auth__input" placeholder={'например, "АО Фармпром", ОКК'}  value ={department}/>
                            </form>
                                
                            <button style={{width:'400px'}} onClick={handleStartApp} onEnter className="btn auth__btn" >Запистить настройку приложения</button>
                            {startAppLoading && <>
                                <div className='spinner'></div>
                                <h5>Запуск приложения...</h5>
                            </>}
                        </div>
                    </div>
                </div>
        )
    }
    
    if(isSuccess && data?.serviceStatus) {
        dispatch(serviceCh(data.serviceStatus))
    }

    const handleLogin = async () =>  {
        
        

        if(!email || !password){
            dispatch(sMessageCh('Введите e-mail и пароль'));
            return
        }
        try {
            const userData = await login({email, password}).unwrap();
            dispatch(setCredentials({...userData, email}));
            dispatch(isAuthCh(true));
            dispatch(userIdCh(userData));
            setEmail('');
            setPassword('');
            navigate('/prep/reag')
            
        } catch (error) {
            console.error(error);
        }
    };


    return(
        <div className="auth overflow">
           {service && <div className="auth__settings">
                <div className="auth__settings-pic"><img src="icons/settings.svg" alt="settings" /></div>
                <div className="auth__settings-text">В данный момент проходят сервисные работы. Доступ открыт только для пользователей с правами "администратор" или "разработчик". Приносим извинения за временные неудобства</div>
            </div>}
            <div className="auth__form">
                <img src="icons/main_logo.svg" alt="logo" />
                <div className="auth__wrapper">
                    <form className=" fadein" >
                        <label >Логин</label>
                        <input onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}} ref={authRef} onChange={(e) => setEmail(e.target.value)}  type="email" className="auth__input" placeholder="email" value ={email}/>
                        <label >Пароль</label>
                        <input onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}} onChange={(e) => setPassword(e.target.value)} type="password" className="auth__input" placeholder="Пароль" value = {password}/>
                        <p className="auth__forgot" onClick={() => dispatch(sMessageCh('Обратитесь к администратору для восстановления пароля'))}>Забыли пароль?</p>
                    </form>
                        
                    <button onClick={handleLogin} onEnter className="btn auth__btn" >Войти</button>
                </div>
            </div>
        </div>
            
    );
};