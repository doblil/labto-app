import {  useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../redux/store/authSlice';
import { useLoginMutation } from '../../redux/api/authApi';
import { sMessageCh } from '../../redux/store/sMessageSlice';
import { useNavigate } from 'react-router-dom';

import './authForm.scss'

export const AuthForm = (props) => {

    const [email, setEmail] = useState('1@mail.ru');
    const [password, setPassword] = useState('123123');
 
    const [login, ] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
        
        <div className="auth">
            <img src="icons/main_logo.svg" alt="logo" />
            <div className="auth__wrapper">
                <form className=" fadein" onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}}>
                    <label >Логин</label>
                    <input onChange={(e) => setEmail(e.target.value)}  type="email" className="auth__input" placeholder="email" value ={email}/>
                    <label >Пароль</label>
                    <input onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}} onChange={(e) => setPassword(e.target.value)} type="password" className="auth__input" placeholder="Пароль" value = {password}/>
                    <a href="/" className="auth__forgot">Забыли пароль?</a>
                </form>
                    
                <button onClick={handleLogin} onEnter className="btn auth__btn" >Войти</button>
            </div>
        </div>
            
    );
};