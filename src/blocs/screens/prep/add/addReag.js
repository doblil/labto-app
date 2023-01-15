import './add.scss'

import { addItemReset, addCASCh, addCatCh, addContainerCh, addFromDateCh, addItemIdCh, addLotCh, addManufacturerCh, addNameCh,  addPassportCh, addPriceCh, addSDSCh, addStandartTypeCh, addTDSCh, addToDateCh, addTypeCh, addUnitsCh, addWarnCh, addLocationCh } from '../../../../redux/store/addItemSlice'
import { useDispatch, useSelector } from 'react-redux'


export const AddReag = () => {
    

    const { 
        itemId, 
        CAS, 
        name,
        location,
        cat, 
        container, 
        fromDate, 
        lot, 
        manufacturer, 
        passport, 
        price, 
        SDS, 
        standartType,
        TDS,
        toDate,
        type,
        units,
        warn,
    } = useSelector(state => state.addItem)
    const dispatch = useDispatch()



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

    const handleAddItem = (type) =>{
        dispatch(addTypeCh(type))
    }


    
    return(
        <div className="add">            
            <div className="add__heading">Добавление реактива</div>
            <div className="add__wrap">
                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">ID</div>
                        <input type="text" class="add__input"
                            value={itemId}
                            onChange={(e)=>{dispatch(addItemIdCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Наименование</div>
                        <input type="text" class="add__input"
                            value={name}
                            onChange={(e)=>{dispatch(addNameCh(e.target.value))}}
                        />
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
                            onChange={(e)=>{dispatch(addManufacturerCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Каталожный номер</div>
                        <input type="text" class="add__input"
                            value={cat}
                            onChange={(e)=>{dispatch(addCatCh(e.target.value))}}
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
                            <select class="add__input add__input-mini" ></select>
                        </div>
                        

                    </div>
                   
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Дата производства</div>
                        <input type="text" class="add__input"
                            value={fromDate}
                            onChange={(e)=>{dispatch(addFromDateCh(e.target.value))}}
                        />
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Годен до</div>
                        <input type="text" class="add__input"
                            value={toDate}
                            onChange={(e)=>{dispatch(addToDateCh(e.target.value))}}
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
                            <div  className="add__choice-heading">Выберите необходимые из списка</div>
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
                    <div className="add__destination">
                        <div className="add__label">Документы</div>
                        <div className="add__document">
                            <div className="add__document_form">Добавить паспорт</div>
                            <div className="add__document_form">Добавить SDS</div>
                            {/* <div className="add__document_form">Добавить TDS</div> */}
                            <div className="add__document-wrap">
                                <div className="add__document-title">TDS</div>
                                <div className="add__document_form add__document_success">
                                    <div className="add__document_cancel">x</div>
                                    <div className="add__file"><p>name_file.docdfsdsfsdfdsfdsfdsfsdfdsfsdfdsfdfsdfghjkljhgfdxszxfcghjk</p></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="add__btn-wrap">
                        <button onClick={handleAddItem} className="add__btn add__btn_white">В черновик</button>
                        <button className="add__btn">Внести</button>
                    </div>
                </div>
            </div>

        </div>
    )
  }