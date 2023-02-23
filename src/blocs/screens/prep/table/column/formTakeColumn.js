import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useConfirm } from "../../../../../hooks/useConfirm";
import { useTakeColumnMutation } from "../../../../../redux/api/columnApi";
import { sMessageCh } from "../../../../../redux/store/sMessageSlice";
import { stringifyDate } from "../../../../../services/services";
import { CustomSelect } from "../../../../customSelect/customSelect";

export const FormTakeColumn = (props) => {
    const {_id:target, name, sn} = useSelector(state => state.activeColumn);
    const dispatch = useDispatch();

    const [FlowDialog, flowConfirm] = useConfirm(`Начать использование колонки ${name}, ${sn}`)
    const [initialise, setInitialise] = useState(false)
    const [test, setTest] = useState('')
    const [destination, setDestination] = useState(null)
    const [date, setDate] = useState('')
    
    const {projects} = useSelector(state => state.project)

    const [takeColumn, {isLoading}] = useTakeColumnMutation();

    const options = projects.map(item => {
        return { value: {code: item.code, name: item.name}, label: `${item.code}, ${item.name}`}
    })

    useEffect(() => {
        setDate(stringifyDate(Date.now(), false, true))
    }, [target])


    const handleSelect = (target) => {
        setDestination(target?.value)
    }

    const handleReset = () => {
        // setDestination(null)
        setTest('');
        setDate(stringifyDate(Date.now(), false, true));
        setInitialise(true);
    }

    const handleTakeColumn = async () => {
        if(isLoading) return dispatch(sMessageCh('Пожалуйста подождите'));
        if(!(destination && test)) return dispatch(sMessageCh('Заполните обязательные поля'));
        const body = {destination, test, fromDate: date};
        await takeColumn({body, target, }).unwrap();
        handleReset();
    }

    const confirmTakeColumn = async () => {
        const confirm = await flowConfirm();
        if(confirm){
            handleTakeColumn(); 
        } else {
            return;
        }
    }

    return (
        <div className="flow">
                <FlowDialog/>
                <div className="flow__heading">Начать использование</div>

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
                        <input value={date}  onChange={(e)=> {setDate(e.target.value)}} type="datetime-local" class="flow__input flow__input-mini"/>
                </div>

                <div className="flow__btn-wrap">
                    <button 
                            className="btn flow__btn" 
                            onClick={confirmTakeColumn}
                            // disabled = {!(date && test && destination && name && quan )}
                        >Взять колонку</button>
                </div>
            </div>
    )
}