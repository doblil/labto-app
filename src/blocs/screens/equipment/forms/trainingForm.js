import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomSelect } from "../../../customSelect/customSelect";
import { useTrainEquipmentMutation } from "../../../../redux/api/equipmentApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";

export const TrainingForm = (props) => {

    const { setShowTrainingForm, currentSop, sopVersions = [], target } = props
    const {allUsers} = useSelector(state=>state.global)
    console.log(sopVersions)


    const [sopVersion, setSopVersion] = useState(currentSop?.version || '');
    const [trainConfirm, setTrainConfirm] = useState(false)
    const [trainer, setTrainer] = useState({userName: '', userId: ''})
    const [initialise, setInitialise] = useState(false)
    const dispatch = useDispatch()
    const [train, {isLoading}] = useTrainEquipmentMutation();

    const usersOptions = allUsers.map(item => {
        return { value: {userId:item._id, userName: item.name}, label: `${item.name}, ${item.position}`}
    })

    const handleCancel = () => {
        setShowTrainingForm(false)
    }
    const handleSelectTrainer = (target) => {
        setTrainer(target.value)
    }
    const handleReset = () => {
        setTrainer({userName: '', userId: ''});
        setTrainConfirm(false);
        setSopVersion('');
        setShowTrainingForm(false)
    }

    const handleTrain = async () => {
        if(isLoading) return dispatch(sMessageCh('Попробуйте снова'))
        const body = {
            sopVersion,
            trainer
        }
        console.log(body);
        if(!sopVersion || !trainer.userId || !trainer.userName || !trainConfirm) return dispatch(sMessageCh('Заполните все поля и подтвердите ознакомление'))
        await train({target, body}).unwrap();
        handleReset();
        
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading"> <p>Ознакомление с СОП</p>
                    </div>
                    <div className="overlay__heading"> <p>Текущий СОП: {currentSop.sopName}, версия: {currentSop.version}</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Версия СОП</div>
                        <select
                            placeholder='Выберите версию СОП'
                            style ={{width: '60%', height: '30px'}}
                            onChange = {(e) => {setSopVersion(e.target.value)}}
                            value={sopVersion}
                        > 
                            {sopVersions.map(item=>{
                                return <option  value={item} key={item}>Версия {item}</option>
                            })}
                             <option  value={''}>{''}</option>
                        </select>
                    </div>
                    <div className="flow__destination">
                    <div className="flow__label"style={{marginTop:'7px'}}>Ответственный за ознакомление</div>
                        <CustomSelect
                            handleChange = {handleSelectTrainer}
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            options = {usersOptions}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                        />
                    </div>
                    <div className="flow__destination">
                    <div className="flow__label"style={{marginTop:'7px'}}></div>
                    <div className=""style ={{width: '60%'}}> 
                        <input 
                        checked = {trainConfirm}
                        value = {true}
                        className="custom-checkbox" 
                        type="checkbox"id="chb-addFile" 
                        name="chb-addFile"
                        onChange={() => setTrainConfirm(!trainConfirm)}
                    />
                    <label className="custom-checkbox__text" for="chb-addFile">{`Вы подтверждаете, что были ознакомлены с СОП версии ${sopVersion} и раписались в оригинале документа`}</label></div>
                    </div>


                    <div className="flow__btn-wrap">
                        <button className="btn flow__btn btn_white" onClick={handleCancel}>Отменить</button>
                        <button 
                            className="btn flow__btn" 
                            onClick = {handleTrain}
                        >Ознакомиться</button>
                        
                    </div>
                </div>
            </div>

        </>
    )
}