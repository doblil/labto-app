import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import { useTakeReagentMutation } from "../../../../redux/api/reagentApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";
import { stringifyDate } from "../../../../services/sevices";
import { Link } from 'react-router-dom';
import { useConfirm } from "../../../../hooks/useConfirm";
import { useDraftReagentMutation } from "../../../../redux/api/draftApi";
import { CustomSelect } from "../../../customSelect/customSelect";


export const FlowForm = () => {
    const [initialise, setInitialise] = useState(false)
    const [date, setDate] = useState(stringifyDate(Date.now(), false, true))
    const [quan, setQuan] = useState(0)
    const [test, setTest] = useState('')
    const [destination, setDestination] = useState(null)
    const {name} = useSelector(state => state.auth);
    const {projects} = useSelector(state => state.project)
    const {_id: target, name: reagName, units, itemId} = useSelector(state => state.activeReagent);
    
    console.log({date, quan, test, destination, name});

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

    const handleDraftReagent = async () => {
        if(!(date && test && destination && name )){
            console.log(date, test, destination, name)
            return sMessageCh('Заполните необходимые поля формы или обновите страницу')
        }
        if(isLoading || draftLoading){
            return sMessageCh('Пожалуйста, подождите')
        }
        try {
            const body = {date, destination, quan, test, target: {reagent: target, name: reagName, itemId, units}}
            await draftReagent(body)
            setDate(stringifyDate(Date.now(), false, true)); 
            setQuan(0);
            setTest(''); 
            setInitialise(true)
            setDestination(null);
           
        } catch (error) {
            console.error(error);
        }
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
            <div className="flow">
                <FlowDialog/>
                <div className="flow__heading">Оформить расход</div>

                <div className="flow__destination">
                    <div className="flow__label">Статья списания</div>
                    <CustomSelect
                        initialise = {initialise}
                        setInitialise = {setInitialise}
                        handleChange = {handleSelect}
                        options = {options}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Вид испытания</div>
                    <textarea value={test || ''} onChange={(e)=> {setTest(e.target.value)}} type="text" class="flow__input-text" placeholder="Описание анализа"></textarea>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Количество</div>
                    <div className="flow__wrap">
                        <input value={quan || ''} onChange={(e)=> {setQuan(e.target.value)}} type="number" min={0} class="flow__input"/>
                        <div className="flow__measure">{units}</div>

                        <div className="flow__inner">
                            <div className="flow__label">Дата</div>
                            <input value={date}  onChange={(e)=> {setDate(e.target.value); console.log(typeof e.target.value, e.target.value)}} type="datetime-local" class="flow__input flow__input-mini"/>
                        </div>
                    </div>
                </div>

                <div className="flow__btn-wrap">
                    
                    <button 
                            className="btn btn_white flow__btn " 
                            onClick={handleDraftReagent}
                            disabled = {!(date && test && destination && name )}
                        >В черновик</button>
                    <button 
                            className="btn flow__btn" 
                            onClick={confirmTakeReagent}
                            // disabled = {!(date && test && destination && name && quan )}
                        >Списать</button>
                </div>

            </div>
        </>
    )
}