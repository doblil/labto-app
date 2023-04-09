import { useState } from "react";
import { CustomSelect } from "../../../customSelect/customSelect";
import { InputFile } from "../../prep/add/inputFile";
import { useDispatch } from "react-redux";
import { sMessageCh } from "../../../../redux/store/sMessageSlice";
import { useVerifyEquipmentMutation } from "../../../../redux/api/equipmentApi";
import { useUploadEqCertMutation } from "../../../../redux/api/uploadApi";

export const VerificationForm = (props) => {
    const {setShowVerificationForm, eqName, itemId, manufacturer, model, sn, target} =  props;

    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null);
    const [passport, setPassport] = useState('')
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [result, setResult] = useState('pass');
    const [verificator, setVerificator] = useState('');
    const [comment, setComment] = useState('')
    const [initialise, setInitialise]=useState(false);

    const [verifyConfirm, setVerifyConfirm] = useState(false)

    const dispatch = useDispatch()
    const [verifyEquipment, {isLoading}] = useVerifyEquipmentMutation()
    const [upload, {isLoading: uploadLoading}] = useUploadEqCertMutation()

    const handleClose = () => {
        setShowVerificationForm(false)
    }

    const options = [
        {label: 'Пройдена', value: 'pass'},
        {label: 'Не пройдена', value: 'fail'}
    ]

    const handleSelectResult = (target) => {
        setResult(target.value)
    }

    const handleVerify = async () => {
        if(isLoading || uploadLoading) return dispatch(sMessageCh('Попробуйте снова'))
        if(result === 'fail'){
            if(!fromDate || !verificator || !comment) return dispatch(sMessageCh('Заполните все поля формы'))
            const body = {
                fromDate, verificator, comment, result
            }
            await verifyEquipment({target, body}).unwrap();
            handleClose();
        }
        if(result === 'pass') {
            if(!fromDate || !toDate || !verificator || !comment || (!passport && !passportFile)) return dispatch(sMessageCh('Заполните все поля формы'))
            const body = {fromDate, toDate, verificator, result, comment, passport}
            await verifyEquipment({target, body}).unwrap();
            if(passportType === 'file'){
                const formData = new FormData();
                formData.append('files', passportFile[0])
                formData.append('fileName', passportFile[0].name)
                await upload({itemId, formData}).unwrap()
            }
            setPassportFile(null);
            setPassportType('link');
            handleClose();
        }
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleClose}></div>
                    <div className="overlay__heading"> <p>Добавление данных о поверке оборудования: {eqName}, {manufacturer},{model},<br/>Зав.№: {sn} | ID: {itemId}</p></div>


                    <div className="flow__destination">
                    <div className="flow__label">Результат поверки</div>
                        <CustomSelect
                            handleChange = {handleSelectResult}
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            options = {options}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {result}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Дата поверки</div>
                        <input value={fromDate}  onChange={(e)=> {setFromDate(e.target.value)}} type="date" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}/>
                    </div>
                    {result === 'pass' && <div className="flow__destination">
                        <div className="flow__label">Окончание поверки</div>
                        <input value={toDate}  onChange={(e)=> {setToDate(e.target.value)}} type="date" class="flow__input-text" style={{height:'30px', paddingTop:'7px'}}/>
                    </div>}
                    <div className="flow__destination">
                        <div className="flow__label">Орган проводивший поверку</div>
                        <textarea  
                            type="text" 
                            class="flow__input-text"
                            onChange = {(e) => {setVerificator(e.target.value)}}
                            value = {verificator}
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
                    {result === 'pass' && <div className="flow__destination">
                        <div className="flow__label">Документы</div>
                        <div className="add__document_window" style={{width:'60%'}}>
                            <div className="add__document-title" style={{width:'25%'}}>Добавить сертификат</div>
                            <div className="add__document-checkbox" style={{width:'25%'}}>
                                <input 
                                    value={'link'}
                                    className="custom-checkbox" 
                                    type="checkbox"id="chb-addLink" 
                                    name="chb-addLink"
                                    checked={passportType === 'link'}
                                    onChange={(e) => setPassportType(e.target.value)}
                                />
                                <label className="custom-checkbox__text" for="chb-addLink">Ссылка</label>

                                <input 
                                    value = {'file'}
                                    className="custom-checkbox" 
                                    type="checkbox"id="chb-addFile" 
                                    name="chb-addFile"
                                    checked={passportType === 'file'}
                                    onChange={(e) => setPassportType(e.target.value)}
                                />
                                <label className="custom-checkbox__text" for="chb-addFile">Файл</label>
                            </div>

                            {passportType === 'file' && <InputFile passportFile={passportFile} setPassportFile = {setPassportFile} style={{width:'50%'}}/>}
                            
                            {passportType === 'link' && 
                            <div className="add__document-result" style={{width:'50%'}}>
                                <input 
                                    value={passport} 
                                    type="text" 
                                    class="add__input add__input-doc add__input-passport add__input_low"
                                    onChange={(e)=>setPassport(e.target.value)}
                                    style={{width:'100%'}}
                                />
                            </div>}           
                        </div>          
                    </div>}

                    {result === 'pass' && <div className="flow__destination">
                        <div className="flow__label"></div>
                        <div className="flow__input-text">
                            <input 
                            checked = {verifyConfirm}
                            value = {true}
                            className="custom-checkbox" 
                            type="checkbox"id="chb-confirm" 
                            name="chb-confirm"
                            onChange={() => setVerifyConfirm(!verifyConfirm)}
                        />
                        <label className="custom-checkbox__text" for="chb-confirm">Вы подтверждаете, что введенные данные соответствуют сертификату поверки для оборудования: {eqName}, {manufacturer},{model},<br/>Зав.№: {sn} | ID: {itemId}</label>
                        </div>
                    </div>}

                    <div className="flow__btn-wrap">
                        <button className="btn flow__btn btn_white" onClick={handleClose}>Отменить</button>
                        <button 
                            className="btn flow__btn" 
                            onClick = {handleVerify}
                        >Внести</button>
                        
                    </div>
                </div>
            </div>

        </>
    )
} 