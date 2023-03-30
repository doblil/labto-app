import { useState } from "react";
import { useDispatch } from "react-redux";
import { useChangeCredentialsMutation } from "../../../../redux/api/userApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";


export const ChangeCredentials = (props) => {
    const dispatch = useDispatch()
    const {name, email: oldEmail, position, direction, setShowChCredentials, id} = props;
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const isConfirmed = (password === confirmPassword);
    
    const [changeCredentials, {isLoading}] = useChangeCredentialsMutation();

    const handleCancel = () => {
        setConfirmPassword('');
        setPassword('');
        setEmail('');
        setShowChCredentials(false)
    };

    const handleChangeCredentials = async () => {
        if (isLoading) return
        if(!password || !email) return dispatch(sMessageCh('Заполните e-mail и пароль'))
        const body = {email, password};
        const target = id;
        if (!target) return dispatch(sMessageCh('Ошибка'));
        await changeCredentials({body, target}).unwrap(); 
        handleCancel();
    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading">Изменение данных сотрудника
                    </div>
                    <div className="confirm__text" style={{marginBottom:'3px'}}>{name}, {position}, {direction}</div>
                    

                    
                   
                   

                    <div className="flow__destination">
                        <div className="flow__label">Введите новый или старый e-mail</div>
                        <input
                            placeholder='e-mail'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => {
                              setEmail(e.target.value)
                            }}
                            value={email}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Новый пароль</div>
                        <input
                            placeholder='пароль'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => {
                              setPassword(e.target.value)
                            }}
                            value={password}
                        />
                    </div>

                    
                    <div className="flow__destination">
                        <div className="flow__label">Подтверждение пароля</div>
                        <input
                            placeholder='подтвердите пароль'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                        
                    </div>
                    {!isConfirmed && <p>Пароли не совпадают</p>}
                    {!password && <p>Введите пароль</p>}
                    <div className="flow__btn-wrap">
                        <button 
                            className="btn btn_white flow__btn" 
                            disabled = {!isConfirmed}
                            onClick = {handleChangeCredentials}
                        >Изменить</button>
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                </div>
            </div>
        </>
    )
}