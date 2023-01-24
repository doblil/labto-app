import React, { useState } from 'react';


import './add.scss'

import { addItemReset, addCASCh, addCatCh, addContainerCh, addFromDateCh, addItemIdCh, addLotCh, addManufacturerCh, addNameCh,  addPassportCh, addPriceCh, addSDSCh, addStandartTypeCh, addTDSCh, addToDateCh, addTypeCh, addUnitsCh, addWarnCh, addLocationCh } from '../../../../redux/store/addItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'
import { useAddReagentMutation } from '../../../../redux/api/reagentApi'
import { useConfirm } from '../../../../hooks/useConfirm'
import { InputFile } from './inputFile';
import { useUploadMutation } from '../../../../redux/api/uploadApi';


export const AddReag = () => {
    
    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null)

    console.log(passportFile)

    const { 
        itemId, CAS, name, location,
        cat, container, fromDate, lot, 
        manufacturer, passport, price, 
        SDS, standartType, TDS, toDate,
        type, units, warn,
    } = useSelector(state => state.addItem);
    
    const [AddDialog, addConfirm] = useConfirm(`Внести реактив ID: ${itemId}, ${name}?`);


    const {userId} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [addReagent, {isLoading,}] = useAddReagentMutation()
    const [upload, {isSuccess}] = useUploadMutation()
    
    
    const handleWarn = (w) => {
        if (warn.includes(w)){
            dispatch(addWarnCh((warn.filter(item=> item !== w))))
        } else {
            dispatch(addWarnCh([...warn, w]))
        }
    }

    const handleWarnStyle = (w) => {
        if (warn.includes(w)){
            return {
                boxShadow: '-2px 1px 4px rgb(181, 181, 181)',
                border: '1px solid rgb(185, 185, 185)',
            }
        } else {
            return {}
        }
    }

    const handleValidateAddForm = () => {
        const falseValues = [!type, !itemId, !CAS, !name, !manufacturer, !fromDate, !toDate, !cat, !lot,  !container];
        console.log(falseValues)

        if (falseValues.includes(true)){
            return false
        }
        return true
    }

    const handleAddItem = async () =>{
        dispatch(addTypeCh('reag'));
        if(!handleValidateAddForm()){
            dispatch(sMessageCh('Заполните обязательные поля'))
            return 
        }
        const body = {
            itemId, 
            CAS, 
            name,
            location,
            cat, 
            container, 
            fromDate: Date.parse(fromDate), 
            lot, 
            manufacturer, 
            passport, 
            price, 
            SDS, 
            standartType,
            TDS,
            toDate: Date.parse(toDate),
            type,
            units,
            warn,
        }

        if(isLoading){
            return dispatch(sMessageCh("Повторите через 10 секунд"))
        }

        
        
        await addReagent({body, userId}).unwrap()
        // FOR UPLOAD FILES
        if(passportType === 'file'){
            const formData = new FormData();
            formData.append('files', passportFile[0])
            formData.append('fileName', passportFile[0].name)
            await upload({userId, itemId, formData}).unwrap()
        }
        setPassportFile(null);
        setPassportType('link')
        dispatch(addItemReset())

    }

    const handleAddConfirm = async () => {
        if(!handleValidateAddForm()){
            dispatch(sMessageCh('Заполните обязательные поля'))
            return 
        }
        const confirm = await addConfirm();
        if(confirm){
            handleAddItem()
        } else {
            return
        }
    }
    
    return(
        <div className="add">
            <AddDialog/>            
            <div className="add__heading">Добавление реактива</div>
            <div className="add__wrap">
                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">ID</div>
                        <input type="text" class="add__input"
                            value={itemId}
                            onChange={(e)=>{dispatch(addItemIdCh(e.target.value)); dispatch(addTypeCh('reag'));}}
                        />
                        <div className="add__confirm add__confirm_yes">✔</div>
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Наименование</div>
                        <input type="text" class="add__input add__input_warn"
                            value={name}
                            onChange={(e)=>{dispatch(addNameCh(e.target.value))}}
                        />
                        <div className="add__confirm add__confirm_no">﹗</div>
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">CAS-№</div>
                        <input type="text" class="add__input"
                            value={CAS}
                            onChange={(e)=>{dispatch(addCASCh(e.target.value))}}
                        />
                    </div>


                    <div className="add__destination">
                        <div className="add__label">Производитель</div>
                        <input type="text" class="add__input"
                            value={manufacturer}
                            onChange={(e)=>{ dispatch(addManufacturerCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Каталожный номер</div>
                        <input type="text" class="add__input"
                            value={cat}
                            onChange={(e)=>{ dispatch(addCatCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Партия</div>
                        <input type="text" class="add__input"
                            value={lot}
                            onChange={(e)=>{dispatch(addLotCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Упаковка</div>
                        <div className="add__destination add__destination-mini">
                            <input type="text" class="add__input add__input-mini"
                                value={container}
                                onChange={(e)=>{dispatch(addContainerCh(e.target.value))}}
                            />
                            <select defaultValue='g' onChange={(e)=>dispatch(addUnitsCh(e.target.value))} class="add__input add__input-mini" >
                                <option  value={'g'}>грамм (g)</option>
                                <option  value={'mg'}>миллиграмм (mg)</option>
                                <option  value={'kg'}>килограмм (kg)</option>
                                <option  value={'l'}>литр (l)</option>
                                <option  value={'ml'}>миллилитр (ml)</option>
                                <option  value={'pcs'}>штук (pcs)</option>
                            </select>
                        </div>
                    </div>
                   
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Дата производства</div>
                        <input type="date" class="add__input"
                            value={fromDate}
                            onChange={(e)=>{ dispatch(addFromDateCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Годен до</div>
                        <input type="date" class="add__input"
                            value={toDate}
                            onChange={(e)=>{ dispatch(addToDateCh(e.target.value))}}
                        />
                    </div>
                    
                    

                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Цена</div>
                        <input type="text" class="add__input"
                            value={price}
                            onChange={(e)=>{dispatch(addPriceCh(e.target.value))}}
                        />
                    </div>
                </div>

                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">Расположение</div>
                        <input type="text" class="add__input"
                            value={location}
                            onChange={(e)=>{dispatch(addLocationCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_top">
                        <div className="add__label">Пиктограммы опасности СГС</div>
                        <div className="add__choice">
                            <div  className="add__choice-heading">Выберите необходимые из списка:</div>
                            <div style={handleWarnStyle('explosive')} onClick={()=>handleWarn('explosive')} className="add__pict"><img src="icons/danger/explosive.svg" alt="explosive" />Explosive</div>
                            <div style={handleWarnStyle('flameble')} onClick={()=>handleWarn('flameble')} className="add__pict"><img src="icons/danger/flammable.svg" alt="flammable" />Flammable</div>
                            <div style={handleWarnStyle('oxidizing')} onClick={()=>handleWarn('oxidizing')} className="add__pict"><img src="icons/danger/oxidizing.svg" alt="oxidizing" />Oxidizing</div>
                            <div style={handleWarnStyle('gas')} onClick={()=>handleWarn('gas')} className="add__pict"><img src="icons/danger/compressed_gas.svg" alt="compressed_gas" />Compressed gas</div>
                            <div style={handleWarnStyle('corrosive')} onClick={()=>handleWarn('corrosive')} className="add__pict"><img src="icons/danger/corrosive.svg" alt="corrosive" />Corrosive</div>
                            <div style={handleWarnStyle('toxic')} onClick={()=>handleWarn('toxic')} className="add__pict"><img src="icons/danger/toxic.svg" alt="toxic" />Toxic</div>
                            <div style={handleWarnStyle('harmful')} onClick={()=>handleWarn('harmful')} className="add__pict"><img src="icons/danger/harmful.svg" alt="harmful" />Harmful</div>
                            <div style={handleWarnStyle('hHazard')} onClick={()=>handleWarn('hHazard')} className="add__pict"><img src="icons/danger/health_hazard.svg" alt="health_hazard" />Health hazard</div>
                            <div style={handleWarnStyle('eHazard')} onClick={()=>handleWarn('eHazard')} className="add__pict"><img src="icons/danger/environmentally_hazardous.svg" alt="environmentally_hazardous" />Environmentally hazardous</div>
                        </div>
                    </div>
                    <div className="add__destination add__destination_top">
                        <div className="add__label">Документы</div>
                        <div className="add__document">
                            <div className="add__document_window">
                                <div className="add__document-title">Добавить паспорт:</div>
                                <div className="add__document-checkbox">
                                    <input 
                                        value={'link'}
                                        checked = {passportType === 'link'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addLink" 
                                        name="chb-addLink"
                                        onChange={(e) => setPassportType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addLink">Ссылка</label>

                                    <input 
                                        checked = {passportType === 'file'}
                                        value = {'file'}
                                        className="custom-checkbox" 
                                        type="checkbox"id="chb-addFile" 
                                        name="chb-addFile"
                                        onChange={(e) => setPassportType(e.target.value)}
                                    />
                                    <label className="custom-checkbox__text" for="chb-addFile">Файл</label>
                                </div>

                                {passportType === 'file' && <InputFile passportFile={passportFile} setPassportFile = {setPassportFile}/>}
                                  
                                {passportType === 'link' && 
                                <div className="add__document-result">
                                    <input onChange={(e)=> dispatch(addPassportCh(e.target.value))} type="text" class="add__input add__input-doc"/>
                                </div>}            
                            </div>
                        

                            <div className="add__document_window">
                                <div className="add__document-title">Добавить SDS:</div>
                                <input type="text" class="add__input add__input-doc"/>
                            </div>             

                            <div className="add__document_window">
                                <div className="add__document-title">Добавить TDS:</div>
                                <input type="text" class="add__input add__input-doc"/>
                            </div>             
                        </div>
                    </div>
                    
                    <div className="add__btn-wrap">
                        <button  className="btn btn_white add__btn">В черновик</button>
                        <button onClick={handleAddConfirm} className="btn add__btn">Внести</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }