import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoleValidate } from "../../../hooks/useRoleValidate";
import { useOutletContext } from "react-router-dom";
import { useConfirm } from "../../../hooks/useConfirm";
import { CustomSelect } from "../../customSelect/customSelect";
import { addEqCertCh, addEqCurrentSopNameCh, addEqCurrentSopVersionCh, addEqDeputyRespUserCh, addEqInvnCh, addEqItemIdCh, addEqLastVerificationCh, addEqLocationCh, addEqManualCh, addEqManufacturerCh, addEqModelCh, addEqNameCh, addEqNextVerificationCh, addEqPassportCh, addEqRespUserCh, addEqSnCh, addEqTypeCh } from "../../../redux/store/addEquipmentSlice";
import { InputFile } from "../prep/add/inputFile";

export const EquipmentAdd = () => {
    
    

    const [initialise, setInitialise] = useState(false)
    ///////////////////documents state
    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null)
    const [manualType, setManualType] = useState('link')
    const [manualFile, setManualFile] = useState(null)
    const [certType, setCertType] = useState('link')
    const [certFile, setCertFile] = useState(null)
    ///////////////////redux
    const {itemId, type, eqName, model, manufacturer, sn, 
        invn, respUser, deputyRespUser, status, lastVerification, 
        nextVerification, passport, cert, manual, currentSop, 
        location} = useSelector(state => state.addEquipment)
    const {allUsers} = useSelector(state => state.global)
    const  dispatch = useDispatch();
    ///////////////////RTK Query hooks

    ///////////////////options

    const equipmentTypeOptions = [
        {value: 'hplc', label: 'ВЭЖХ системы'},
        {value: 'gc', label: 'ГХ системы'},
        {value: 'scales', label: 'Весы'},
        {value: 'titrator', label: 'Титраторы'},
        {value: 'climate', label: 'Климатическое'},
        {value: 'termal', label: 'Термическое'},
        {value: 'handle', label: 'Вспомагательное'},
        {value: 'other', label: 'Прочее'},
    ]

    const userOtions = allUsers.map(item => {
        return {
            value: {
                userId: item._id,
                userName: item.name
            },
            label: `${item.name}, ${item.position}, ${item.direction}`
        }
    })
    ///////////////////handlers

    const handleSelectType = (target) => {
        dispatch(addEqTypeCh(target.value))
    };

    const handleSelectRespUser = (target) => {
        dispatch(addEqRespUserCh(target.value))
    };
    const handleSelectDeputyRespUser = (target) => {
        dispatch(addEqDeputyRespUserCh(target.value))
    };

    const handleInputIcons = (state) => {
        if(state){
            return <div className="add__confirm add__confirm_yes">✔</div>
        } else {
            return <div className="add__confirm add__confirm_no"></div>
        }
    } 
    const handleInputStyle = (state) => {
        if(!state){
            return {border: '1px solid #d14949'}
        } else {
            return {border : ''}
        }
    }
    
    return(
        <div className="page">.
            <div className="add__top" style={{marginTop:'-10px'}}>
                <div className="add__heading">Внесение Оборудования</div>
                
                <CustomSelect
                    initialise = {initialise}
                    setInitialise = {setInitialise}
                    handleChange = {handleSelectType}
                    fontSize = {'15px'}
                    width = {'250px'}
                    input = {'none'}
                    options = {equipmentTypeOptions}
                    selected = {type}
                />
                {handleInputIcons(type)}
            </div>           
            <div className="overflow add__overflow">  
            <div className="add__wrap">
                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">ID</div>
                        <input type="text" class="add__input"
                            value={itemId}
                            onChange={(e)=>{dispatch(addEqItemIdCh(e.target.value));}}
                            style={handleInputStyle(itemId)}
                        />
                        {handleInputIcons(itemId)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Наименование</div>
                        <input type="text" class="add__input"
                            value={eqName}
                            onChange={(e)=>{dispatch(addEqNameCh(e.target.value))}}
                            style={handleInputStyle(eqName)}
                        />
                        {handleInputIcons(eqName)}
                    </div>

                    <div className="add__destination">
                        <div className="add__label">Производитель</div>
                        <input 
                            class="add__input"
                            value={manufacturer}
                            onChange={(e)=>{ dispatch(addEqManufacturerCh(e.target.value))}}
                            style={handleInputStyle(manufacturer)}
                        />     
                        {handleInputIcons(manufacturer)}
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Модель</div>
                        <input 
                            class="add__input"
                            value={model}
                            onChange={(e)=>{ dispatch(addEqModelCh(e.target.value))}}
                            style={handleInputStyle(model)}
                        />     
                        {handleInputIcons(model)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Серийный номер</div>
                        <input type="text" class="add__input"
                            value={sn}
                            onChange={(e)=>{ dispatch(addEqSnCh(e.target.value))}}
                            style={handleInputStyle(sn)}
                        />
                        {handleInputIcons(sn)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Инвентарный номер</div>
                        <input type="text" class="add__input"
                            value={invn}
                            onChange={(e)=>{ dispatch(addEqInvnCh(e.target.value))}}
                            style={handleInputStyle(invn)}
                        />
                        {handleInputIcons(invn)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Ответственный пользователь</div>
                        <CustomSelect
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            handleChange = {handleSelectRespUser}
                            height = {'25px'}
                            fontSize = {'12px'}
                            width = {'250px'}
                            options = {userOtions}
                            selected = {respUser}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Замещающий пользователь</div>
                        <CustomSelect
                            initialise = {initialise}
                            setInitialise = {setInitialise}
                            handleChange = {handleSelectDeputyRespUser}
                            height = {'25px'}
                            fontSize = {'12px'}
                            width = {'250px'}
                            options = {userOtions}
                            selected = {deputyRespUser}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Дата поверки</div>
                        <input type="date" class="add__input"
                            value={lastVerification}
                            onChange={(e)=>{dispatch(addEqLastVerificationCh(e.target.value))}}
                            style={handleInputStyle(lastVerification)}
                        />
                        {handleInputIcons(lastVerification)}
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Следующая поверка</div>
                        <input type="date" class="add__input"
                            value={nextVerification}
                            onChange={(e)=>{dispatch(addEqNextVerificationCh(e.target.value))}}
                            style={handleInputStyle(nextVerification)}
                        />
                        {handleInputIcons(lastVerification)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Расположение</div>
                        <input type="text" class="add__input"
                            value={location}
                            onChange={(e)=>{dispatch(addEqLocationCh(e.target.value))}}
                        />
                        {handleInputIcons(location)}
                    </div>
                   
                   
                    <div className="add__destination add__destination_top">
                        <div className="add__label">СОП</div>
                        <div className="add__document">
                                                  

                            <div className="add__document_window">
                                <div className="add__document-title">Текущая версия:</div>
                                <input 
                                    value={currentSop.version}
                                    type="text" 
                                    class="add__input add__input-doc"
                                    onChange={(e)=>{dispatch(addEqCurrentSopVersionCh(e.target.value))}}
                                />
                            </div>             

                            <div className="add__document_window">
                                <div className="add__document-title">Название</div>
                                <input
                                    value={currentSop.sopName} 
                                    type="text" 
                                    class="add__input add__input-doc"
                                    onChange={(e)=>{dispatch(addEqCurrentSopNameCh(e.target.value))}}
                                />
                            </div>  
          
                        </div>
                    </div>
                    
                    
                    <div className="add__destination">
                        <div className="add__label">Документы</div>
                        <div className="add__document">
                            <div className="add__document_window">
                                <div className="add__document-title">Добавить паспорт:</div>
                                <div className="add__document-checkbox">
                                    <input 
                                        value={'link'}
                                        checked = {passportType === 'link'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addLinkPassport" 
                                        name="chb-addLinkPassport"
                                        onChange={(e) => setPassportType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addLinkPassport">Ссылка</label>

                                    <input 
                                        checked = {passportType === 'file'}
                                        value = {'file'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addFilePassport" 
                                        name="chb-addFilePassport"
                                        onChange={(e) => setPassportType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addFilePassport">Файл</label>
                                </div>

                                {passportType === 'file' && <InputFile passportFile={passportFile} setPassportFile = {setPassportFile}/>}
                                  
                                {passportType === 'link' && 
                                <div className="add__document-result">
                                    <input onChange={(e)=> dispatch(addEqPassportCh(e.target.value))} type="text" class="add__input add__input-doc add__input-passport"/>
                                </div>}            
                            </div> 
           
                            <div className="add__document_window">
                                <div className="add__document-title">Инструкция:</div>
                                <div className="add__document-checkbox">
                                    <input 
                                        value={'link'}
                                        checked = {manualType === 'link'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addLinkManual" 
                                        name="chb-addLinkManual"
                                        onChange={(e) => setManualType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addLinkManual">Ссылка</label>

                                    <input 
                                        checked = {manualType === 'file'}
                                        value = {'file'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addFileManual" 
                                        name="chb-addFileManual"
                                        onChange={(e) => setManualType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addFileManual">Файл</label>
                                </div>

                                {manualType === 'file' && <InputFile maxSize={1024*1024*20} passportFile={manualFile} setPassportFile = {setManualFile}/>}
                                  
                                {manualType === 'link' && 
                                <div className="add__document-result">
                                    <input onChange={(e)=> dispatch(addEqManualCh(e.target.value))} type="text" class="add__input add__input-doc add__input-passport"/>
                                </div>}            
                            </div> 

                            <div className="add__document_window">
                                <div className="add__document-title">Сертификат поверки:</div>
                                <div className="add__document-checkbox">
                                    <input 
                                        value={'link'}
                                        checked = {certType === 'link'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addLinkCert" 
                                        name="chb-addLinkCert"
                                        onChange={(e) => setCertType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addLinkCert">Ссылка</label>

                                    <input 
                                        checked = {certType === 'file'}
                                        value = {'file'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addFileCert" 
                                        name="chb-addFileCert"
                                        onChange={(e) => setCertType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addFileCert">Файл</label>
                                </div>

                                {certType === 'file' && <InputFile passportFile={passportFile} setPassportFile = {setPassportFile}/>}
                                  
                                {certType === 'link' && 
                                <div className="add__document-result">
                                    <input onChange={(e)=> dispatch(addEqCertCh(e.target.value))} type="text" class="add__input add__input-doc add__input-passport"/>
                                </div>}            
                            </div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
    )
}