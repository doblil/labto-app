import {  useState } from 'react';
import { useDispatch } from 'react-redux';

import { isAuthCh, setCredentials, userIdCh } from '../../redux/store/authSlice';
import { useLoginMutation } from '../../redux/api/authApi';
import { sMessageCh } from '../../redux/store/sMessageSlice';
import { useNavigate } from 'react-router-dom';

export const AuthForm = (props) => {

    const [email, setEmail] = useState('3@mail.ru');
    const [password, setPassword] = useState('123123');
 
    const [login, {isSuccess} ] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async () =>  {
        
        

        if(!email || !password){
            dispatch(sMessageCh('Введите e-mail и пароль'));
            return
        }
        try {
            const userData = await login({email, password}).unwrap();
            const s = await isSuccess
            dispatch(setCredentials({...userData, email}));
            dispatch(isAuthCh(true));
            dispatch(userIdCh(userData));
            setEmail('');
            setPassword('');
            navigate('/prep/reagentTable')
            
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