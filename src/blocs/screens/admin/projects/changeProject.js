import React, {useState} from 'react'

import '../admin.scss'
import '../../profile/profile.scss'

import { useChangeProjectMutation } from '../../../../redux/api/projectApi'
import { useDispatch } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'


export const ChangeProject = (props) => {
    const dispatch = useDispatch()
    const {setShowChangeProject, name, code, target, descr} = props
    
    const [newDescr, setNewDescr] = useState(descr);
 

    const [changeProject, {isLoading}] = useChangeProjectMutation();


    const handleCancel = () => {
        setShowChangeProject(false);
        setNewDescr('');

    }

    const hanleChangeProject = async () => {
        if(isLoading) return
        if(!newDescr){
            return dispatch(sMessageCh('Заполните поле'))
        }
        const body = {descr: newDescr}
        await changeProject({body, target}).unwrap();
        handleCancel();
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close"></div>
                    <div className="overlay__heading"> <p>Изменение описания проекта<br/>{name}, {code}</p>
                    </div>
                    <div className="overlay__heading"> <p>В данной форме вы можете поменять только описание проекта <br/> Если вы соверщили ошибку при создании проекта (неправильное наименование или код), мы рекомендуем удалить проекта и внести его заново, либо обратиться к администратору баз данных</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Описание</div>
                        <textarea
                            placeholder='Описание проекта'
                            style ={{width: '60%', height: '130px'}}
                            onChange = {(e) => {setNewDescr(e.target.value)}}
                            value = {newDescr}
                        />
                    </div>
                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn" onClick={hanleChangeProject}>Изменить</button>
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                </div>
            </div>

        </>
    )
}

