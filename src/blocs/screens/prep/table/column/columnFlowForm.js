import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import { useTakeReagentMutation } from "../../../../../redux/api/reagentApi";
import { sMessageCh } from "../../../../../redux/store/sMessageSlice";
import { stringifyDate } from "../../../../../services/services";
import { Link } from 'react-router-dom';
import { useConfirm } from "../../../../../hooks/useConfirm";
import { useDraftReagentMutation } from "../../../../../redux/api/draftApi";
import { CustomSelect } from "../../../../customSelect/customSelect";


export const ColumnFlowForm = () => {
    const [initialise, setInitialise] = useState(false)
    const [date, setDate] = useState(stringifyDate(Date.now(), false, true))
    const [quan, setQuan] = useState(0)
    const [test, setTest] = useState('')
    const [destination, setDestination] = useState(null)
    const {name} = useSelector(state => state.auth);
    const {projects} = useSelector(state => state.project)
    const {_id: target, name: reagName, units, itemId} = useSelector(state => state.activeReagent);
    

    useEffect(() => {
        setDate(stringifyDate(Date.now(), false, true))
    }, [target])

    const [FlowDialog, flowConfirm] = useConfirm(`Списать ${quan} ${units} ${reagName}`)

    const [takeReagent, {isLoading}] = useTakeReagentMutation()
    const [draftReagent, {isLoading: draftLoading}] = useDraftReagentMutation()

    const options = projects.map(item => {
        return { value: item.code, label: `${item.code}, ${item.name}`}
    })

    const handleTakeReagent = async () => {
        if(!(date && quan && test && destination && name )){
            console.log('all fields required')
            return sMessageCh('Заполните все поля формы или обновите страницу')
        }
        if(isLoading){
            return sMessageCh('Пожалуйста, подождите')
        }

        const body = {date, quan, test, destination, name}
        await takeReagent({target, body})
        setDate(stringifyDate(Date.now(), false, true)); 
        setQuan(0);
        setTest('');
        setDestination(null)
    }

    

    const confirmTakeReagent = async () => {
        const confirm = await flowConfirm();
        if(confirm){
            handleTakeReagent()
        } else {
            return
        }
    }

    const handleSelect = (target) => {
        setDestination(target?.value)
    }

    return(
        <>
            {/* <div className="flow">
                <FlowDialog/>
                <div className="flow__heading">Оформить использование</div>

                <div className="flow__destination">
                    <div className="flow__label" style={{marginTop:'6px'}}>Проект</div>
                    <CustomSelect
                        initialise = {initialise}
                        setInitialise = {setInitialise}
                        handleChange = {handleSelect}
                        options = {options}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                        selected = {destination}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label" style={{marginTop:'-2px'}}>Вид испытания</div>
                    <textarea value={test || ''} onChange={(e)=> {setTest(e.target.value)}} type="text" class="flow__input-text" placeholder="Описание анализа"></textarea>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Дата</div>
                        <input value={date}  onChange={(e)=> {setDate(e.target.value); console.log(typeof e.target.value, e.target.value)}} type="datetime-local" class="flow__input flow__input-mini"/>
                </div>

                <div className="flow__btn-wrap">
                    <button 
                            className="btn flow__btn" 
                            onClick={confirmTakeReagent}
                            // disabled = {!(date && test && destination && name && quan )}
                        >Взять колонку</button>
                </div>
            </div> */}

            <div className="flow">
                <div className="flow__heading" style={{marginBottom:'16spx'}}>Колонка в использовании</div>

                <div className="flow__destination" style={{fontSize:'13px'}}>
                    Текущий пользователь: Илья Федорко
                </div>
                <div className="flow__destination" style={{fontSize:'13px'}}>
                    Проект: Семвастаитн
                </div>
                <div className="flow__btn-wrap">
                    <button 
                            className="btn flow__btn" 
                            onClick={confirmTakeReagent}
                            // disabled = {!(date && test && destination && name && quan )}
                        >Завершить использование</button>
                </div>
            </div>

            {/* <div className="overlay">
                <div className="overlay__window">
                    <div className="close"></div>            
                    <div className="flow__heading">Оформить использование</div>
                    <div className="flow__destination">
                        <div className="flow__label" style={{marginTop:'6px'}}>Проект</div>
                        <CustomSelect
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            handleChange = {handleSelect}
                            options = {options}
                            width = {'60%'}
                            height = {'25px'}
                            fontSize = {'12px'}
                            selected = {destination}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label" style={{marginTop:'-2px'}}>Вид испытания</div>
                        <textarea value={test || ''} onChange={(e)=> {setTest(e.target.value)}} type="text" class="flow__input-text" placeholder="Описание анализа"></textarea>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Количество инжекций</div>
                        <textarea  type="text" class="flow__input-text" style={{height:'30px', width:'145px', paddingTop:'7px'}}>200</textarea>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Подвижная фаза</div>
                        <textarea  type="text" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}>200</textarea>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Комментарий</div>
                        <textarea  type="text" class="flow__input-text">200</textarea>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Растворитель хранения</div>
                        <textarea  type="text" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}>200</textarea>
                    </div>


                    <div className="flow__btn-wrap">
                        <button 
                                className="btn flow__btn" 
                                onClick={confirmTakeReagent}
                                // disabled = {!(date && test && destination && name && quan )}
                            >Завершить использование</button>
                    </div>
                </div>
            </div> */}

        </>
    )
}