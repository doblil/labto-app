import React, {useState} from 'react'

import '../admin.scss'
import '../../profile/profile.scss'

import { CustomSelect } from '../../../customSelect/customSelect'
import { useAddProjectMutation } from '../../../../redux/api/projectApi'
import { useDispatch } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'


export const AddProject = (props) => {
    const dispatch = useDispatch()
    const {setShowAddProject} = props
    
    const [descr, setDescr] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const [addProject, {isLoading}] = useAddProjectMutation();


    const handleCancel = () => {
        setShowAddProject(false);
        setDescr('');
        setName('');
        setCode('');
    }

    const hanleAddProject = async () => {
        if(isLoading) return
        if(!descr || !name || !code){
            return dispatch(sMessageCh('Заполните все поля'))
        }
        const body = {descr, name, code}
        await addProject(body).unwrap();
        handleCancel();
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={() => {setShowAddProject(false)}}></div>
                    <div className="overlay__heading"> <p>Новый проект</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Полное название</div>
                        <input
                            placeholder='Название'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => {setName(e.target.value)}}
                            value = {name}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Код</div>
                        <input
                            placeholder='00000'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => {setCode(e.target.value)}}
                            value = {code}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Описание</div>
                        <textarea
                            placeholder='Описание проекта'
                            style ={{width: '60%', height: '100px'}}
                            onChange = {(e) => {setDescr(e.target.value)}}
                            value = {descr}
                        />
                    </div>
                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn" onClick={hanleAddProject}>Добавить</button>
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                </div>
            </div>

        </>
    )
}

