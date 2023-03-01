
import '../../../../sass/sassTemplates/desc.scss'
import '../../../../sass/sassTemplates/flow.scss'
import '../../../../sass/sassTemplates/overflow.scss'
import { FlowForm } from './flowForm'
import { Barcode } from '../../../barcode/barcode'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteReagentMutation, useFavoriteReagentMutation, useGetOneReagentQuery, useGetPassportMutation, useIsolateReagentMutation, useUnfavoriteReagentMutation } from '../../../../redux/api/reagentApi'
import { SVGstar } from '../../../../svg/svg'
import { handleWarnImg, stringifyDate, stringifyRSType } from '../../../../services/services'
import { useState } from 'react'
import { deleteFavorite, favoriteCh } from '../../../../redux/store/authSlice'
import { addCreateSame } from '../../../../redux/store/addItemSlice'
import { useNavigate } from 'react-router-dom'
import { HistoryOfUsage } from './historyOfUsage'
import { reagentFill, reagentReset } from '../../../../redux/store/activeReagSlice'
import { Options } from './options'
import { ChangeForm } from './changeForm'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'
import { changeFill } from '../../../../redux/store/changeItemSlice'
import { orderCatCh, orderManufacturerCh, orderNameCh, orderTextCh, orderTypeCh } from '../../../../redux/store/orderSlice'
import { OrderForm } from '../../../orderForm/orderForm'

export const Desc = (props) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showOrderForm, setShowOrderForm] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    const [showBarcode, setShowBarcode] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [showChange, setShowChange] = useState(false)

 

    let content = <></>
    let isFavorite = false

    
    const {favorite} = useSelector(state => state.auth);
    const { _id: target } = useSelector(state => state.activeReagent);
    const reagent = useSelector(state => state.activeReagent);
    if(favorite.includes(target)){isFavorite = true}

    ///////********RTQ Query hooks

    const [deleteReagent, {isLoading: deleteLoading}] = useDeleteReagentMutation();
    const [isolateReagent, {isLoading:isolateLoading}] = useIsolateReagentMutation()
    const [favoriteReagent, {isLoading: favoriteLoading}] = useFavoriteReagentMutation()
    const [unfavoriteReagent, {isLoading: unfavoriteLoading}] = useUnfavoriteReagentMutation()
    const {data, isLoading, isSuccess} = useGetOneReagentQuery(target);
    const [passportLoader] = useGetPassportMutation();

    //////********* HANDLERS

    const handleLoaders = () => {
        return deleteLoading || favoriteLoading || unfavoriteLoading || isLoading || isolateLoading 
    }

    const handleJarColor = (container, rest) => {
        const restPercent = Math.floor(rest/container*100)
        if(restPercent > 60) return 'lawnGreen'
        if(restPercent > 40) return 'yellow'
        if(restPercent > 20) return 'red'
        return 'darkRed'
    }
    
    const handleFavorite = async () => {
         if (handleLoaders()) return

        if(!favorite.includes(target)){
            await favoriteReagent(target)
            dispatch(favoriteCh(target))
        }
        if(favorite.includes(target)){
            await unfavoriteReagent(target)
            dispatch(favoriteCh(target))
        }
    }

    // options handlers

    const handleAddSame = async () => {
        if (isSuccess && data.reagent);
        dispatch(addCreateSame(data.reagent));
        navigate('/prep/addReagent');
    }
    const handleChange = async () => {
        if (isSuccess && data.reagent)
        navigate('/prep/addReagent');
    }

    const handleDelete = async () => {
        if (handleLoaders()) return
        try {
            dispatch(reagentReset())
            await deleteReagent(target)
            dispatch(deleteFavorite(target))
        } catch (error) {
            console.error(error)
        }
    }

    const handleIsURL = (str) =>  {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    const handleIsolate = async () => {
        if (handleLoaders()) return
        try {
            await isolateReagent(target)
            dispatch(deleteFavorite(target))
            dispatch(reagentReset())
        } catch (error) {
            console.error(error)
        }
    }

    // before fetching
    
    if(!target){
        return(
            <div className="desc__return">
                Выберите строку в таблице
            </div>
        )
    }


    if (isLoading){
        content = <div className="desc__load">Загрузка...</div>
    }

    // after success fetching

    if(isSuccess && data.reagent){
        const {itemId, location,
            name, manufacturer, cat, 
            lot, container, fromDate, 
            toDate, units, restUnits, 
            inUse, warn, standartType, SDS, TDS, 
            passport, price, CAS, type} = data.reagent;
        
        const passportIsURL = handleIsURL(passport)
        
        const handlePassport = async () => {
            if(passportIsURL) return

            if(!passport){
                return dispatch(sMessageCh('Похоже вы не добавили паспорт для этого вещества'))
            }
            
            try {
                await passportLoader(target)
            } catch (error) {
                console.error(error)
            }
            
            
        }

        const handleRestDays = () => {
            const rest = Math.floor((Date.parse(toDate.toString())-(+Date.now().toString()))/1000/3600/24);
            if (rest <0){
                return 'истек срок годности'
            }
            return `осталось ${rest} суток`
        }
        
        dispatch(reagentFill(data.reagent))
        dispatch(changeFill({passport, SDS, TDS, warn, location, price, CAS, itemId, name}))
        const last = inUse[inUse.length - 1]

        const handleOrderSame = () => {
            dispatch(orderNameCh(name));
            dispatch(orderTypeCh(type));
            dispatch(orderManufacturerCh(manufacturer));
            dispatch(orderCatCh(cat));
            dispatch(orderTextCh(`Хочу заказать ${name}, ${manufacturer}, кат.№ ${cat},  _____  ${units}. 
            Необходимо для  _________  , срочность средняя.`));
            setShowOrderForm(true);
        }


        content = <>                 
            <div className="desc__action-wrap">
                {showOrderForm && <OrderForm setShowOrderForm={setShowOrderForm}/>}
                {!!showOptions && 
                
                    <Options
                        handleAddSame = {handleAddSame}
                        handleDelete = {handleDelete}
                        handleIsolate = {handleIsolate}
                        handleChange = {handleChange}
                        setShowChange = {setShowChange}
                    />
                
                }
                <button className='desc__item-action desc__item-action_main' onClick={() => setShowOptions(!showOptions)}>Опции</button>
            </div>
            <div className="desc__top">

                <div className="desc__heading">
                    <div className="desc__title">ID {itemId}</div>
                    <div className="desc__name">{name}</div>
                    <div className="desc__title">{manufacturer} | {cat}</div>
                </div>

                <div className="desc__status">
                    {!!standartType && <div className="desc__rs">Стандартный образец {stringifyRSType(standartType)}</div>}
                    <div className="desc__favorite">
                        {isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#ffb027", height:"25", width: "25"}}/>}
                        {!isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#cdcdcd", height:"25", width: "25"}}/>}
                    </div>
                </div>
            </div>
        
            <div className="overflow overflow__mt29 desc__overflow">
                
                <div className="overflow_border desc__overflow-wrap" style={{display: `${showHistory === true ? '' : 'none' }`}}>
                    <HistoryOfUsage setShowHistory={setShowHistory} reagent = {reagent}/>
                </div>

                <div style={{display: `${!showHistory === true ? '' : 'none' }`}} className="desc__overflow-wrap">
                    <div className="grid">
                        <div className="grid__box item-a">
                            <div className="grid__heading">Партия</div>
                            <div className="grid__value">{lot}</div>
                        </div>

                        <div className="grid__box item-b">
                            <div className="grid__heading">Упаковка</div>
                            <div className="grid__value">{container} {units}</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c" >
                            <div className="grid__heading">Дата производства - <br /> годен до</div>
                            {(!toDate && !!standartType) && <div className="grid__value">Проверьте текущую партию на сайте производителя</div>}
                            {toDate && <div className="grid__value">{stringifyDate(fromDate) } - {stringifyDate(toDate) }</div>}
                            {toDate && <div className="grid__descr">{handleRestDays()}</div>}
                            <img className="grid__icon" src="icons/date.svg" alt="document" />
                        </div>
                        <div className="grid__box item-d">
                            <div className="grid__heading">Расположение</div>
                            <div className="grid__value">{location}</div>
                            <img className="grid__icon" src="icons/location.svg" alt="location" />
                        </div>
                        <div className="grid__box item-e">
                            {handleWarnImg(warn)}
                        </div>
                        <div className="grid__box item-f">
                            <div className="grid__heading grid__heading_white">Наличие</div>
                            <div className="grid__value">
                                <div className="grid__quantity">{Math.floor(restUnits/container*100)}%</div>
                                <div className="grid__quantity">{restUnits} {units}</div>
                            </div>
                            <div className="grid__jar">
                                <img className="grid__img" src="icons/jar.svg" alt="jar" />
                                <div className="grid__jar-scale" style={{backgroundColor: handleJarColor(container, restUnits), height: `${Math.floor(restUnits/container*100)}%`}}></div>
                            </div>
                            <div className="grid__icon"></div>
                            <button className="grid__btn" onClick={handleOrderSame}>Заказать</button>
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                {!passportIsURL && <div className="grid__doc" onClick={handlePassport}>Паспорт</div>}
                                {!!passportIsURL && <div className="grid__doc" onClick={handlePassport}><a rel="noreferrer" href={passport} target="_blank">Паспорт</a></div>}
                                {!!SDS && <div className="grid__doc"><a href={SDS}>SDS</a></div>} 
                                {!!TDS && <div className="grid__doc"><a href={TDS}>TDS</a></div>}
                            </div>
                            <div className="grid__barcode" onClick={()=>{setShowBarcode(true);}}> 
                            <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <Barcode 
                                setShowBarcode = {setShowBarcode} 
                                showBarcode = {showBarcode}
                                itemId={itemId}
                                name = {name}
                                cat = {cat}
                                lot = {lot}
                                manufacturer = {manufacturer}
                            />
                            <img className="grid__icon" src="icons/document.svg" alt="document" />
                        </div>
                        <div className="grid__box item-h">
                            <div className="grid__heading grid__heading_white">Последний пользователь</div>
                            <div className="grid__value grid__value_row">
                                {inUse.length ?  <>
                                    <div className="grid__history">{last.name}</div>
                                    <div className="grid__history">{last.quan} {units}</div>
                                    <div className="grid__history">{stringifyDate(last.date, true)}</div>
                                </> : <div className="grid__history">Похоже, никто не пользовался</div>}
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            {!!inUse.length && <button className="grid__btn" onClick={()=> {setShowHistory(true)}}>Смотреть развернутую историю списаний &#10095;&#10095;</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    
  
    return(
    <div className="desc">
        {content}
        <FlowForm/>
        {showChange && <ChangeForm setShowChange={setShowChange}/>}
    </div>
  )
}