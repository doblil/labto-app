
import '../../../sass/sassTemplates/desc.scss'
import '../../../sass/sassTemplates/flow.scss'
import '../../../sass/sassTemplates/overflow.scss'

import { useState } from 'react'
import { SVGstar } from '../../../svg/svg'
import { Barcode } from '../../barcode/barcode'
import { useDispatch, useSelector } from 'react-redux'
import { stringifyDate, stringifyEquipmentStatus } from '../../../services/services'
import { handleIsURL } from '../../../services/handleIsURL'
import { sMessageCh } from '../../../redux/store/sMessageSlice'
import { useFavoriteEqMutation, useGetEqCertMutation, useGetEqManualMutation, useGetEqPassportMutation, useGetOneEquipmentQuery, useUnfavoriteEqMutation } from '../../../redux/api/equipmentApi'
import { favoriteCh } from '../../../redux/store/authSlice'
import { EquipmentOptions } from './equipmentOptions'
import { TrainingForm } from './forms/trainingForm'
import { TrainingList } from './forms/tarainingList'
import { VerificationForm } from './forms/verificationForm'
import { StatusForm } from './forms/statusForm'
import { VerificationList } from './forms/verifycationList'






export const EquipmentDesc = (props) => {
    
    const dispatch = useDispatch();

    const [showBarcode, setShowBarcode] = useState(false);
    const [showTrainingList, setShowTrainingList] = useState(false);
    const [showTrainingForm, setShowTrainingForm] = useState(false);
    const [showVerificationList, setShowVerificationList] = useState(false)
    const [showVerificationForm, setShowVerificationForm] = useState(false)
    const [showChangeForm, setShowChangeForm] = useState(false)
    const [showStatusForm, setShowStatusForm] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    
    let content = <></>
    const {_id: target} = useSelector(state => state.activeEquipment);
    const {favorite} = useSelector(state => state.auth);
    
    let isFavorite = false;
    if(favorite.includes(target)){isFavorite = true};

    ///////********RTQ Query hooks
    const {data, isLoading: dataLoading, isSuccess: dataSuccess} = useGetOneEquipmentQuery(target)
    const [favoriteEuipment, {isLoading: favoriteLoading}] = useFavoriteEqMutation();
    const [unfavoriteEquipment, {isLoading: unfavoriteLoading}] = useUnfavoriteEqMutation();
    const [getEqCert] = useGetEqCertMutation();
    const [getEqPassport] = useGetEqPassportMutation();
    const [getEqManual] = useGetEqManualMutation();
    //////********* HANDLERS

    const handleLoaders = () => {
        if(dataLoading || favoriteLoading || unfavoriteLoading) return true;
        return false
    }

    const handleFavorite = async () => {
        if (handleLoaders()) return

        if(!favorite.includes(target)){
            await favoriteEuipment(target)
            dispatch(favoriteCh(target))
        }
        if(favorite.includes(target)){
            await unfavoriteEquipment(target)
            dispatch(favoriteCh(target))
        }
    }


    //// before fetching

    if(!target){
        return(
            <div className="desc__return">
                Выберите строку в таблице
            </div>
        )
    }
    if (dataLoading){
        content = <div className="desc__load"><div className="spinner"></div>Загрузка...</div>
    }

    //// after fetching


    if (!dataLoading || !dataSuccess){
        content = <div className="desc__load">Нет данных!</div>
    }

    if (dataSuccess && data.equipment){
        const { itemId, eqName, model, manufacturer, sn,
        invn, respUser, deputyRespUser, status, lastVerification,
        nextVerification, verificationList, passport, cert, manual,
        troubleshooting, currentSop, trainigList, location, sopVersions
    } = data.equipment;

        

        const passportIsURL = handleIsURL(passport);
        const certIsURL = handleIsURL(cert);
        const manualIsURL = handleIsURL(manual)

        const handlePassport = async () => {
            if(passportIsURL) return
            if(!passport) return dispatch(sMessageCh('Похоже вы не добавили паспорт для этого оборудования'))
            try {
                await getEqPassport(target)
            } catch (error) {
                console.error(error)
            }
        }
        const handleCert = async () => {
            if(certIsURL) return
            if(!cert) return dispatch(sMessageCh('Похоже вы не добавили сертификат поверки для этого оборудования'))
            try {
                await getEqCert(target)
            } catch (error) {
                console.error(error)
            }
        }
        const handleManual = async () => {
            if(manualIsURL) return
            if(!manual) return dispatch(sMessageCh('Похоже вы не добавили инструкцию для этого оборудования'))
            try {
                await getEqManual(target)
            } catch (error) {
                console.error(error)
            }
        }
        
    
   
    content =  <>
                {showVerificationForm && <VerificationForm
                    target = {target}
                    setShowVerificationForm = {setShowVerificationForm}
                    eqName = {eqName}
                    model = {model}
                    manufacturer = {manufacturer}
                    sn = {sn}
                    itemId = {itemId}
                />}
                {showVerificationList && <VerificationList
                    verificationList = {verificationList}
                    setShowVerificationList = {setShowVerificationList}
                    eqName = {eqName}
                    model = {model}
                    manufacturer = {manufacturer}
                    sn = {sn}
                    itemId = {itemId}
                />}
                {showTrainingForm && <TrainingForm
                    target = {target}
                    setShowTrainingForm = {setShowTrainingForm}
                    currentSop = {currentSop}
                    sopVersions = {sopVersions}
                />}
                {showTrainingList && <TrainingList
                    trainingList = {trainigList}
                    itemId = {itemId}
                    setShowTrainingList = {setShowTrainingList}
                    eqName = {eqName}
                    currentSop = {currentSop}
                    sopVersions = {sopVersions}
                />}
                {showStatusForm && <StatusForm
                    eqName = {eqName} 
                    target = {target} 
                    setShowStatusForm = {setShowStatusForm} 
                    status = {status} 
                    itemId = {itemId} 
                    manufacturer = {manufacturer} 
                    model = {model} 
                    sn = {sn}
                />}
                <div className="desc__action-wrap">
                        {showOptions && <EquipmentOptions
                            setShowStatusForm = {setShowStatusForm}
                            handleAddSame = {0}
                            handleDelete = {0}
                            handleIsolate = {0}
                            setShowChange = {0}
                        />}

                    <button className='desc__item-action desc__item-action_main' onClick={() => setShowOptions(!showOptions)}>Опции</button>
                </div>
                <div className="desc__top">

                    <div className="desc__heading">
                        <div className="desc__title">ID {itemId}</div>
                        <div className="desc__name">{eqName}, {manufacturer}, {model}</div>
                        <div className="desc__title">Ответственный: {respUser?.userName} <br/> Замещающий: {deputyRespUser?.userName}</div>
                    </div>

                    <div className="desc__status">
                        <div className="desc__favorite">
                        {isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#ffb027", height:"25", width: "25"}}/>}
                        {!isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#cdcdcd", height:"25", width: "25"}}/>}
                        </div>
                    </div>
                </div>
            
                <div className="overflow desc__overflow" style={{marginRight:'10px'}}>
                    
                    {/* <div className="overflow_border desc__overflow-wrap" style={{display: `${showHistory === true ? '' : 'none' }`}}>
                        <HistoryOfUsage setShowHistory={setShowHistory} reagent = {reagent}/>
                    </div> */}

                    <div className="grid grid_equipment">
                        <div className="grid__box item-a">
                            <div className="grid__heading">Серийный номер</div>
                            <div className="grid__value">{sn}</div>
                        </div>

                        <div className="grid__box item-b">
                            <div className="grid__heading">Инвентарный номер</div>
                            <div className="grid__value">{invn}</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c" >
                            <div className="grid__heading">Текущая поверка:</div>
                            <div className="grid__value">{stringifyDate(lastVerification)} - {stringifyDate(nextVerification)}</div>
                            <img className="grid__icon" src="icons/date.svg" alt="date" />
                        </div>
                        <div className="grid__box item-d" >
                            <div className="grid__heading">Текущая версия СОП</div>
                            <div className="grid__value">{currentSop?.version}</div>
                            <img className="grid__icon" src="icons/date.svg" alt="date" />
                        </div>
                        <div className="grid__box item-r">
                            <div className="grid__heading">Расположение</div>
                            <div className="grid__value">{location}</div>
                            <img className="grid__icon" src="icons/location.svg" alt="location" />
                        </div>
                        <div className="grid__box item-f" style={{backgroundColor: stringifyEquipmentStatus(status).color}}>
                            <div className="grid__heading grid__heading_white">Статус</div>
                            <div className="grid__value">
                                <div className="grid__quantity">{stringifyEquipmentStatus(status).name}</div>
                            </div>
                            <div className="grid__jar">
                                <img className="grid__equipment" src="icons/equipment.svg" alt="equipment" />
                            </div>
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                <div className="grid__doc" onClick={handlePassport}>Паспорт</div>
                                <div className="grid__doc" onClick={handleCert}>Сертификат поверки</div>
                                <div className="grid__doc" onClick={handleManual}>Инструкция</div>
                            </div>
                            <div className="grid__barcode" onClick={0}> 
                                <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <Barcode/>
                            <img className="grid__icon" src="icons/document.svg" alt="document" />
                        </div>
                        <div className="grid__box item-i">
                            <div className="grid__heading grid__heading_white">Текущий СОП и список ознакомления</div>
                            <div className="grid__value grid__value_row">
                                    <div className="grid__history" style={{textAlign: 'start'}}>{currentSop.sopName}</div>
                                    <div className="grid__history" style={{marginLeft: '5px', }}>версия: {currentSop.version}</div>
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            <button className="grid__btn" onClick={() => setShowTrainingList(true)}>Смотреть список ознакомления&#10095;&#10095;</button>
                            <button className="grid__btn" onClick={() => setShowTrainingForm(true)} style={{right: '25px', width:'120px'}}>Ознакомиться</button>
                        </div>
                        <div className="grid__box item-j" >
                            <div className="grid__heading grid__heading_white">Данные о поверках</div>
                                <img className="grid__icon" src="icons/person.svg" alt="document" />
                                
                                <div className="grid__btn" onClick={() => setShowVerificationList(true)}>Смотреть историю поверок и результаты&#10095;&#10095;</div>
                                <button className="grid__btn" onClick={() => setShowVerificationForm(true)} style={{right: '25px', width:'120px'}}>Внести поверку</button>
                                
        
                            </div>
                        <div className="grid__box item-k" >
                                <div className="grid__heading grid__heading_white">Логи оборудования</div>
                                {!!troubleshooting?.length && <>
                                    <div className="grid__history">{troubleshooting[troubleshooting.length - 1].description}</div>
                                    <div className="grid__history">{stringifyDate(troubleshooting[troubleshooting.length - 1].date)}</div>
                                    
                                </>} 
                                {!troubleshooting?.length && <div className="grid__history">Похоже, логов пока что нет</div>}
                                <img className="grid__icon" src="icons/person.svg" alt="document" />
                                <button className="grid__btn" onClick={0}>Смотреть историю логов&#10095;&#10095;</button>

                        </div>
                    </div>
                </div>
        </>
    
    }
    return(
        <div className="desc">
            {content}
            
        </div>
      )
}