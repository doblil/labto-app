import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useTakeReagentMutation } from "../../../../redux/api/reagentApi";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";
import { stringifyDate } from "../../../../services/sevices";
import { Link } from 'react-router-dom';
import { useConfirm } from "../../../../hooks/useConfirm";


export const FlowForm = () => {
    const [date, setDate] = useState(stringifyDate(Date.now(), false, true))
    const [quan, setQuan] = useState(0)
    const [test, setTest] = useState('')
    const [destination, setDestination] = useState(null)
    const {name, userId} = useSelector(state => state.auth);
    const {projects} = useSelector(state => state.project)
    const {_id: target, name: reagName, units} = useSelector(state => state.activeReagent);
    useEffect(() => {
        setDate(stringifyDate(Date.now(), false, true))
    }, [target])

    const [FlowDialog, flowConfirm] = useConfirm(`Списать ${quan} ${units} ${reagName}`)

    const [takeReagent, {isLoading}] = useTakeReagentMutation()

    const options = projects.map(item => <option  value={item.code}>{item.code} {item.name}</option>)

    const handleTakeReagent = async () => {
        if(!(date && quan && test && destination && name && userId)){
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

    return(
        <>
            <div className="flow">
                <FlowDialog/>
                <div className="flow__heading">Оформить расход</div>

                <div className="flow__destination">
                    <div className="flow__label">Статья списания</div>
                    <input value={destination || ''} onChange={(e)=> {setDestination(e.target.value)}} class="flow__input" list="destination" id="destInput" name="ice-cream-choice"></input>
                    <datalist id="destination">
                        <option></option>
                        {options}
                    </datalist>
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
                    
                    <Link to="/confirm" className="link"><button className="btn btn_white flow__btn ">В черновик</button></Link>
                    <button className="btn flow__btn" onClick={confirmTakeReagent}>Списать</button>
                </div>

            </div>
        </>
    )
}