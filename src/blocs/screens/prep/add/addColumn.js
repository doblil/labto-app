import React, { useEffect, useState } from 'react';
import { CustomSelect } from '../../../customSelect/customSelect';

import './add.scss'

import { useDispatch, useSelector } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'
import { useAddReagentMutation } from '../../../../redux/api/reagentApi'
import { useConfirm } from '../../../../hooks/useConfirm'
import { InputFile } from './inputFile';
import { useUploadColMutation, useUploadMutation } from '../../../../redux/api/uploadApi';
import { addColCatCh, addColDescrCh, addColFromDateCh, addColInitialDestinationCh, addColItemIdCh, addColLotCh, addColManufacturerCh, addColNameCh, addColPassportCh, addColPressureLimitCh, addColPriceCh, addColReset, addColRestSolventCh, addColSnCh, addColTotalInjCh, addColTypeCh } from '../../../../redux/store/addColumnSlise';
import { useAddColumnMutation } from '../../../../redux/api/columnApi';
import { useOutletContext } from 'react-router-dom';
import { useRoleValidate } from '../../../../hooks/useRoleValidate';
import { NotAllowed } from '../../../handleComponents/notAllowed';


export const AddColumn = () => {
    const [initialise, setInitialise]=useState(false);
    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null)
    const {projects} = useSelector(state => state.project);

    const roleValidation = useRoleValidate();

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('addColumn')
    })

    const { 
        itemId, type, name, cat, lot, sn, manufacturer, totalInj, restSolvent, descr, pressureLimit, passport, mainSubstance, mainProject, initialDestination, price, fromDate
    } = useSelector(state => state.addColumn);

    

    const [AddDialog, addConfirm] = useConfirm(`Внести колонку ID: ${itemId}, ${name}, серийный номер: ${sn}?`);


    const {userId} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [addColumn, {isLoading,}] = useAddColumnMutation()
    const [uploadCol, {isSuccess}] = useUploadColMutation()
    
    //////////////HANDLERS





    const handleValidateAddForm = () => {
        if (!(itemId && type && name && cat && sn && manufacturer && restSolvent && initialDestination)){
            return false
        }
        return true
    }

    const handleAddColumn = async () =>{
        if(!handleValidateAddForm()) return dispatch(sMessageCh('Заполните обязательные поля'))
            
        const body = {
            itemId, 
            name, 
            manufacturer,
            cat,
            lot, 
            sn, 
            restSolvent, 
            passport,
            initialDestination,
            mainSubstance,
            mainProject,
            type,
            fromDate,
            pressureLimit

        }

        if(isLoading){
            return dispatch(sMessageCh("Повторите через 10 секунд"))
        }

        await addColumn(body).unwrap()
        // FOR UPLOAD FILES
        if(passportType === 'file'){
            const formData = new FormData();
            formData.append('files', passportFile[0])
            formData.append('fileName', passportFile[0].name)
            await uploadCol({itemId, formData}).unwrap()
        }
        setPassportFile(null);
        setPassportType('link')
        dispatch(addColReset());
        

    }

    const handleAddConfirm = async () => {
        if(!handleValidateAddForm()){
            dispatch(sMessageCh('Заполните обязательные поля'))
            return 
        }
        const confirm = await addConfirm();
        if(confirm){
            handleAddColumn()
        } else {
            return
        }
    }

    const handleChangeType = (target) => {
        dispatch(addColTypeCh(target.value))
    }

    const handleChangeDestination = (target) =>{
        dispatch(addColInitialDestinationCh(target.value))
    } 

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

    /////////////// OPTIONS
    
    const projectOptions = projects.map(item => {
        return { value: {code: item.code, name: item.name}, label: `${item.code}, ${item.name}`}
    })


const options = [
        { value: 'gc', label: 'для ГХ' },
        { value: 'hplc', label: 'для ВЭЖХ' },
    ]
    
if(!roleValidation(['admin', 'prep', 'head', 'developer'])) return <NotAllowed/>
    return(
        <div className="page">
            <div className="add__top" style={{marginTop:'-10px'}}>
                <div className="add__heading">Внесение колонки</div>
                
                <CustomSelect
                    initialise = {initialise}
                    setInitialise = {setInitialise}
                    handleChange = {handleChangeType}
                    fontSize = {'15px'}
                    width = {'250px'}
                    input = {'none'}
                    options = {options}
                    selected = {type}
                />
                {handleInputIcons(type)}
            </div>           
            <div className="overflow add__overflow">  
            <AddDialog/>            
            
            <div className="add__wrap">
                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">ID</div>
                        <input type="text" class="add__input"
                            value={itemId}
                            onChange={(e)=>{dispatch(addColItemIdCh(e.target.value));}}
                            style={handleInputStyle(itemId)}
                        />
                        {handleInputIcons(itemId)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Наименование</div>
                        <input type="text" class="add__input"
                            value={name}
                            onChange={(e)=>{dispatch(addColNameCh(e.target.value))}}
                            style={handleInputStyle(name)}
                        />
                        {handleInputIcons(name)}
                    </div>

                    <div className="add__destination">
                        <div className="add__label">Производитель</div>
                        <input type="text" class="add__input"
                            value={manufacturer}
                            onChange={(e)=>{ dispatch(addColManufacturerCh(e.target.value))}}
                            style={handleInputStyle(manufacturer)}
                        />
                            
                        {handleInputIcons(manufacturer)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Каталожный номер</div>
                        <input type="text" class="add__input"
                            value={cat}
                            onChange={(e)=>{ dispatch(addColCatCh(e.target.value))}}
                            style={handleInputStyle(cat)}
                        />
                        {handleInputIcons(cat)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Партия</div>
                        <input type="text" class="add__input"
                            value={lot}
                            onChange={(e)=>{dispatch(addColLotCh(e.target.value))}}
                        />

                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Серийный номер</div>
                        <input type="text" class="add__input"
                            value={sn}
                            onChange={(e)=>{dispatch(addColSnCh(e.target.value))}}
                            style={handleInputStyle(sn)}
                        />
                        {handleInputIcons(sn)}
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Предел давления</div>
                        <input type="text" class="add__input"
                            value={pressureLimit}
                            onChange={(e)=>{dispatch(addColPressureLimitCh(e.target.value))}}
                            placeholder = "1000 bar"
                        />
                        {handleInputIcons(pressureLimit)}
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Текущий растворитель хранения</div>
                        <input type="text" class="add__input"
                            value={restSolvent}
                            onChange={(e)=>{dispatch(addColRestSolventCh(e.target.value))}}
                        />
                        {handleInputIcons(restSolvent)}
                    </div>
                   
                   
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Дата производства</div>
                        <input type="date" class="add__input"
                            value={fromDate}
                            onChange={(e)=>{ dispatch(addColFromDateCh(e.target.value))}}
                        />
                    </div>
                    
                    
                    

                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Цена</div>
                        <input type="text" class="add__input"
                            value={price}
                            onChange={(e)=>{dispatch(addColPriceCh(e.target.value))}}
                        />
                    </div>
                </div>

                <div className="add__inner">
                <div className="add__destination">
                        <div className="add__label">Целевой проект</div>
                        <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleChangeDestination}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'250px'}
                                options = {projectOptions}
                            /> 

                    </div>
                    <div className="add__destination">
                        <div className="add__label">Количество инжекций (для колонок бывших в употреблении)</div>
                        <input type="number" min={0} step ={1} class="add__input"
                            placeholder='Тип колонки, фаза, для разделения каких веществ может подойти'
                            value={totalInj}
                            onChange={(e)=>{dispatch(addColTotalInjCh(e.target.value));}}
                        />
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Описание колонки</div>
                        <textarea type="text" class="add__input"
                            placeholder='Тип колонки, фаза, для разделения каких веществ может подойти'
                            value={descr}
                            onChange={(e)=>{dispatch(addColDescrCh(e.target.value));}}
                            style={{height: '100px'}}
                        />
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
                                    <input onChange={(e)=> dispatch(addColPassportCh(e.target.value))} type="text" class="add__input add__input-doc add__input-passport"/>
                                </div>}            
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
        </div>
    )
  }