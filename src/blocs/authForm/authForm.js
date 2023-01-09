import {  useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../redux/store/authSlice';
import { useLoginMutation } from '../../redux/api/authApi';
import { sMessageCh } from '../../redux/store/sMessageSlice';

export const AuthForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const [login, {isLoading} ] = useLoginMutation();
    const dispatch = useDispatch();

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
        } catch (error) {
            console.error(error);
        }
    };


    return(
        
        <div className="auth__wrapper">
            <form className=" fadein" onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}}>
                <input onChange={(e) => setEmail(e.target.value)}  type="email" className="auth__input" placeholder="email" value ={email}/>
                <input onKeyDown={(e) =>{if(e.key === 'Enter'){handleLogin()}}} onChange={(e) => setPassword(e.target.value)} type="password" className="auth__input" placeholder="Пароль" value = {password}/>
                <a href="/" className="auth__forgot">Забыли пароль?</a>
            </form>
                
            <button onClick={handleLogin} onEnter className="auth__action-btn" >Войти</button>
        </div>
            
    );
};