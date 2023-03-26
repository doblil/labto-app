
import { Barcode } from '../../../../barcode/barcode'
import { SVGstar } from '../../../../../svg/svg'

import '../../../../../sass/sassTemplates/desc.scss'
import '../../../../../sass/sassTemplates/flow.scss'
import '../../../../../sass/sassTemplates/overflow.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetOneColumnQuery, useGetColPassportMutation, useDeleteColumnMutation, useIsolateColumnMutation, useFavoriteColumnMutation, useUnfavoriteColumnMutation } from '../../../../../redux/api/columnApi'
import { sMessageCh } from '../../../../../redux/store/sMessageSlice'
import { activeColumnCh, columnFill } from '../../../../../redux/store/activeColumnSlice'
import { ColumnHistory } from './columnHistory'
import { useNavigate } from 'react-router-dom'
import { FormBusyColumn } from './formBusyColumn'
import { FormTakeColumn } from './formTakeColumn'
import { FormReturnColumn } from './formReturnColumn'
import { ColumnOptions } from './columnOptions'
import { changeColFill } from '../../../../../redux/store/changeColumnSlice'
import { stringifyDate } from '../../../../../services/services'
import { FormChangeColumn } from './formChangeColumn'
import { addColCreateSame } from '../../../../../redux/store/addColumnSlise'
import { favoriteCh } from '../../../../../redux/store/authSlice'


export const ColumnDesc = () => {
    
    const dispatch = useDispatch(); 
    const navigate = useNavigate();


    const [showHistory, setShowHistory] = useState(false)
    const [showBarcode, setShowBarcode] = useState(false)
    const [showReturnForm, setShowReturnForm] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [showChange, setShowChange] = useState(false)

    let content = <></>
    
    const {_id: target} = useSelector(state => state.activeColumn)
    const {favorite} = useSelector(state => state.auth)
    
    let isFavorite = false;
    if(favorite.includes(target)){isFavorite = true};
    ///////********RTQ Query hook
    const {data, isLoading, isSuccess} = useGetOneColumnQuery(target)
    const [passportLoader] = useGetColPassportMutation();
    const [deleteColumn, {isLoading: deleteLoading}] = useDeleteColumnMutation();
    const [isolateColumn, {isLoading: isolateLoading}] = useIsolateColumnMutation();
    const [favoriteColumn, {isLoading: favoriteLoading}] = useFavoriteColumnMutation();
    const [unfavoriteColumn, {isLoading: unfavoriteLoading}] = useUnfavoriteColumnMutation();
    //////********* HANDLERS

    const handleLoaders = () => {
        if(deleteLoading || isolateLoading || favoriteLoading || unfavoriteLoading) return true;
        return false
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


    

    // before fetching

    if(!target){
        return(
            <div className="desc__return">
                Выберите строку в таблице
            </div>
        )
    }


    if (isLoading){
        content = <div className="desc__load"><div className="spinner"></div>Загрузка...</div>
    }

    // after success fetching

    if (isSuccess && data.column){
        const {type, itemId, name, cat, lot, sn,
        manufacturer, totalInj, restSolvent, descr, 
        busy, passport, pressureLimit, mainSubstance,
        mainProject, current, inUse, fromDate, _id, price, isolate} = data.column;


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

        // OPTIONS HANDLERS

        const handleAddSame = () => {
            dispatch(addColCreateSame(data.column));
            navigate('/prep/addColumn');
        }
        const handleIsolate = async () => {
            if (handleLoaders()) return dispatch(sMessageCh('Пожалуста подождите'))
            await isolateColumn(_id).unwrap();
            dispatch(activeColumnCh(''));
        }
        const handleDelete = async () => {
            if (handleLoaders()) return dispatch(sMessageCh('Пожалуста подождите'))
            await deleteColumn(_id).unwrap();
            dispatch(activeColumnCh(''));
        };

        const handleFavorite = async () => {
            if (handleLoaders()) return
   
           if(!favorite.includes(target)){
               await favoriteColumn(target)
               dispatch(favoriteCh(target))
           }
           if(favorite.includes(target)){
               await unfavoriteColumn(target)
               dispatch(favoriteCh(target))
           }
       }
        

        dispatch(columnFill(data.column));
        dispatch(changeColFill({passport, descr, mainProject, itemId, restSolvent, pressureLimit, price}))
        const last = inUse[inUse.length - 1]

        content = <>   
            {showChange && <FormChangeColumn
                setShowChange = {setShowChange}
                
            />} 
            {showHistory && <ColumnHistory 
                setShowHistory = {setShowHistory} 
                itemId = {itemId} 
                sn = {sn} 
                cat = {cat} 
                name = {name} 
                inUse = {inUse}
            />}  
            <div className="desc__action-wrap">
                {!!showOptions && 
                    <ColumnOptions
                        handleAddSame = {handleAddSame}
                        handleDelete = {handleDelete}
                        handleIsolate = {handleIsolate}
                        setShowChange = {setShowChange}
                    />
                }
                <button className='desc__item-action desc__item-action_main' onClick={() => setShowOptions(!showOptions)}>Опции</button>
            </div>           
            <div className="desc__top">

                <div className="desc__heading">
                    <div className="desc__title">ID: {itemId} </div>
                    <div className="desc__name">{name}</div>
                    <div className="desc__title">{manufacturer} | {cat}</div>
                </div>

                <div className="desc__status">
                    <div className="desc__favorite">
                    {isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#ffb027", height:"25", width: "25"}}/>}
                        {!isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#cdcdcd", height:"25", width: "25"}}/>}
                    </div>
                </div>
            </div>
        
            <div className="overflow overflow__mt29 desc__overflow">

                <div className="desc__overflow-wrap">
                    <div className="grid grid_columns">
                        <div className="grid__box item-a"style={!busy ? { backgroundColor:'#00ac7f'} : { backgroundColor:'crimson'}}>
                            <div className="grid__heading"style={{color:'white'}}>Статус</div>
                            <div className="grid__value" style={{color:'white'}}>{!busy ? 'свободна' : 'в работе' }</div>
                        </div>
                        

                        <div className="grid__box item-b">
                            <div className="grid__heading">Партия</div>
                            <div className="grid__value">{lot}</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c">
                            <div className="grid__heading">Серийный номер</div>
                            <div className="grid__value">{sn}</div>
                        </div>
                        <div className="grid__box item-d" >
                            <div className="grid__heading">Лимит давления</div>
                            <div className="grid__value">{pressureLimit}</div>
                            <img className="grid__icon" src="icons/date.svg" alt="document" />
                        </div>

                        <div className="grid__box item-r">
                        <div className="grid__heading">Основной проект</div>
                            <div className="grid__value">{mainProject.name}</div>
                        </div>

                        <div className="grid__box item-f"style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <div>
                                <div className="grid__quantity"style={{fontSize:'7px', lineHeight:'20px', marginBottom:'15px'}}>Счётчик инжекций <br /> <span style={{fontSize:'20px'}}>{totalInj}</span></div>
                                <div className="grid__quantity"style={{fontSize:'7px', lineHeight:'18px'}}>Растворитель хранения: <br /> <span style={{fontSize:'20px'}}>{restSolvent}</span></div>
                            </div>
                            <img src="icons/injector.svg" alt="injector" style={{height:'90px'}}/> 
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                {!passportIsURL && <div className="grid__doc" onClick={handlePassport}>Паспорт</div>}
                                {!!passportIsURL && <div className="grid__doc" onClick={handlePassport}><a rel="noreferrer" href={passport} target="_blank">Паспорт</a></div>}
                            </div>
                            
                            <div className="grid__barcode" onClick={()=>{setShowBarcode(true);}}> 
                                <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <Barcode
                                setShowBarcode = {setShowBarcode}
                                showBarcode = {showBarcode}
                                itemId = {itemId}
                                name = {name}
                                cat = {cat}
                                sn = {sn}
                                manufacturer = {manufacturer}
                                col = {true}
                            />                            
                            <img className="grid__icon" src="icons/document.svg" alt="document" />

                        </div>
                        <div className="grid__box item-h">
                            <div className="grid__heading grid__heading_white">Последний пользователь</div>
                            <div className="grid__value grid__value_row">
                                {!!last && <>
                                    <div className="grid__history">{last.userName}</div>
                                    <div className="grid__history">{stringifyDate(last.toDate)}</div>
                                    <div className="grid__history">{last.destination.name}</div>
                                </>} 
                                {!last && <div className="grid__history">Похоже, никто не пользовался</div>}
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            <button className="grid__btn" onClick={() => {setShowHistory(true)} }>Смотреть развернутую историю списаний ❯❯</button>
                        </div>
                            
                        </div>
                        
                    </div>
                </div>
                {!!current.userName && !isolate && <FormBusyColumn setShowReturnForm = {setShowReturnForm} userName = {current.userName} current = {current}/>}
                {!current.userName && !isolate && <FormTakeColumn/>}
                {(current.userName && !isolate && showReturnForm) && 
                <FormReturnColumn 
                    current = {current} 
                    setShowReturnForm = {setShowReturnForm}
                    sn = {sn}
                    name = {name}
                    itemId = {itemId}
                />}
        </>

    }
    
  
return(
    <div className="desc">
        {content}
        
    </div>
  )
}


