
import { Barcode } from '../../../../barcode/barcode'
import { SVGstar } from '../../../../../svg/svg'

import '../../../../../sass/sassTemplates/desc.scss'
import '../../../../../sass/sassTemplates/flow.scss'
import '../../../../../sass/sassTemplates/overflow.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetOneColumnQuery, useGetPassportMutation } from '../../../../../redux/api/columnApi'
import { sMessageCh } from '../../../../../redux/store/sMessageSlice'
import { columnFill } from '../../../../../redux/store/activeColumnSlice'
import { ColumnHistory } from './columnHistory'
import { useNavigate } from 'react-router-dom'
import { FormBusyColumn } from './formBusyColumn'
import { FormTakeColumn } from './formTakeColumn'
import { FormReturnColumn } from './formReturnColumn'


export const ColumnDesc = () => {
    
    const dispatch = useDispatch(); 
    const navigate = useNavigate();


    const [showHistory, setShowHistory] = useState(false)
    const [showBarcode, setShowBarcode] = useState(false)
    const [showReturnForm, setShowReturnForm] = useState(false)
    let content = <></>
    
    const {_id: target} = useSelector(state => state.activeColumn)
    const column = useSelector(state => state.activeColumn)


    ///////********RTQ Query hook
    const {data, isLoading, isSuccess} = useGetOneColumnQuery(target)
    const [passportLoader] = useGetPassportMutation();
    //////********* HANDLERS

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
        content = <div className="desc__load">Загрузка...</div>
    }

    // after success fetching

    if (isSuccess && data.column){
        const {type, itemId, name, cat, lot, sn,
        manufacturer, totalInj, restSolvent, descr, 
        busy, passport, pressureLimit, mainSubstance,
        mainProject, current, inUse, fromDate, _id} = data.column;


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
        dispatch(columnFill(data.column));
        const last = inUse[inUse.length - 1];


        content = <>                 
            <div className="desc__top">

                <div className="desc__heading">
                    <div className="desc__title">ID: {itemId} </div>
                    <div className="desc__name">{name}</div>
                    <div className="desc__title">{manufacturer} | {cat}</div>
                </div>

                <div className="desc__status">
                    <div className="desc__favorite">
                        <SVGstar style={{fill: "#ffb027", height:"25", width: "25"}}/>
                    </div>
                </div>
            </div>
        
            <div className="overflow overflow__mt29 desc__overflow">
                
                <div className="overflow_border desc__overflow-wrap" style={{display: `${showHistory === true ? '' : 'none' }`}}>
                    <ColumnHistory setShowHistory={setShowHistory} column = {column}/>
                </div>


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
                                <div className="grid__doc"> Паспорт</div>
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
                                <>
                                    <div className="grid__history">Lily</div>
                                    <div className="grid__history"></div>
                                    <div className="grid__history"></div>
                                </> 
                                <div className="grid__history">Похоже, никто не пользовался</div>
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            <button className="grid__btn">Смотреть развернутую историю списаний ❯❯</button>
                        </div>
                            
                        </div>
                        
                    </div>
                </div>
                {!!current.userName && <FormBusyColumn setShowReturnForm = {setShowReturnForm} userName = {current.userName} current = {current}/>}
                {!current.userName && <FormTakeColumn/>}
                {(current.userName && showReturnForm) && 
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