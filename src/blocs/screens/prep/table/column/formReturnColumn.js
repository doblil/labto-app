import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useConfirm } from "../../../../../hooks/useConfirm";
import { useReturnColumnMutation } from "../../../../../redux/api/columnApi";
import { sMessageCh } from "../../../../../redux/store/sMessageSlice";
import { stringifyDate } from "../../../../../services/services";

export const FormReturnColumn = (props) => {
    const {current, itemId, setShowReturnForm } = props;
    const {_id:target, name, sn} = useSelector(state => state.activeColumn);
    const dispatch = useDispatch()


    const [countInj, setCountInj] = useState(0);
    const [fromDate, setFromDate] = useState(stringifyDate(current.fromDate, false, true));
    const [toDate, setToDate] = useState(stringifyDate(Date.now(), false, true));
    const [test, setTest]  = useState(current.test)
    const [mobilePhase, setMobilePhase] = useState('');
    const [restSolvent, setRestSolvent] = useState('');
    const [comment, setComment] = useState('Без отклонений');

    const [FlowDialog, flowConfirm] = useConfirm(`Завершить использование колонки ${name}, ${sn}`)

    const [returnColumn, {isLoading}] = useReturnColumnMutation();

    const handleReset = () => {
        setCountInj(0);
        setFromDate(null);
        setToDate(null);
        setTest('');
        setMobilePhase('');
        setRestSolvent('');
        setComment('');
        setShowReturnForm(false)
    }

    const handleReturnColumn = async () => {
        if(isLoading) return dispatch(sMessageCh('Пожалуйста подождите'));
        if(!(countInj && fromDate && toDate && test && mobilePhase && restSolvent && comment)) return dispatch(sMessageCh('Заполните все поля'));
        const body = {countInj, restSolvent, mobilePhase, comment, fromDate, toDate,  test};
        await returnColumn({body, target}).unwrap();
        handleReset();
    }


    const confirmReturnColumn = async () => {
        const confirm = await flowConfirm();
        if(confirm){
            handleReturnColumn(); 
        } else {
            return;
        }
    }
   
    return (
        <div className="overlay">
                <FlowDialog/>
                <div className="overlay__window">
                    <div className="close" onClick={handleReset}></div>            
                    <div className="flow__heading">Оформить использование</div>
                    <div className="flow__destination">
                        <div className="flow__label" style={{marginTop:'6px'}}>Проект</div>
                        <p style={{fontSize: '13px'}}>{current.destination.code}, {current.destination.name} <br/>
                        Колонка ID: {itemId}, {name}, <br/>S/N: {sn}</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label" style={{marginTop:'-2px'}}>Вид испытания</div>
                        <textarea 
                            value={test || ''} 
                            onChange={(e)=> {setTest(e.target.value)}} 
                            type="text" 
                            class="flow__input-text" 
                            placeholder="Описание анализа"
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Количество инжекций</div>
                        <input 
                            type="number" 
                            class="flow__input-text" 
                            style={{height:'30px', width:'145px', paddingTop:'7px'}}
                            min={0}
                            onChange = {(e) => {setCountInj(e.target.value)}}
                            value = {countInj}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Подвижная фаза</div>
                        <textarea  
                            type="text" 
                            class="flow__input-text" 
                            style={{height:'30px', paddingTop:'7px'}}
                            onChange = {(e) => {setMobilePhase(e.target.value)}}
                            value = {mobilePhase}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Комментарий</div>
                        <textarea  
                            type="text" 
                            class="flow__input-text"
                            onChange = {(e) => {setComment(e.target.value)}}
                            value = {comment}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Растворитель хранения</div>
                        <textarea  
                            type="text" 
                            class="flow__input-text" 
                            style={{height:'30px', paddingTop:'7px'}}
                            onChange = {(e) => {setRestSolvent(e.target.value)}}
                            value = {restSolvent}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Начало использования</div>
                        <input value={fromDate}  onChange={(e)=> {setFromDate(e.target.value)}} type="datetime-local" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}/>
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Конец использования</div>
                        <input value={toDate}  onChange={(e)=> {setToDate(e.target.value)}} type="datetime-local" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}/>
                    </div>


                    <div className="flow__btn-wrap">
                        <button 
                                className="btn flow__btn" 
                                onClick={confirmReturnColumn}
                                // disabled = {!(date && test && destination && name && quan )}
                            >Завершить использование</button>
                    </div>
                </div>
            </div>
    )
}