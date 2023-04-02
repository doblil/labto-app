
import '../../../sass/sassTemplates/desc.scss'
import '../../../sass/sassTemplates/flow.scss'
import '../../../sass/sassTemplates/overflow.scss'

import { useState } from 'react'
import { Options } from '../prep/table/options'
import { SVGstar } from '../../../svg/svg'
import { Barcode } from '../../barcode/barcode'






export const EquipmentDesc = (props) => {
    const [showOptions, setShowOptions] = useState(false)

    return(
        <>
            <div className="desc">
                <div className="desc__action-wrap">
                        <Options
                            handleAddSame = {0}
                            handleDelete = {0}
                            handleIsolate = {0}
                            setShowChange = {0}
                        />

                    <button className='desc__item-action desc__item-action_main' onClick={() => setShowOptions(!showOptions)}>Опции</button>
                </div>
                <div className="desc__top">

                    <div className="desc__heading">
                        <div className="desc__title">ID 45678</div>
                        <div className="desc__name">Хроматоргаф Waters</div>
                        <div className="desc__title">Шо тут?</div>
                    </div>

                    <div className="desc__status">
                        <div className="desc__favorite">
                            <SVGstar style={{fill: "#cdcdcd", height:"25", width: "25"}}/>
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
                            <div className="grid__value">765</div>
                        </div>

                        <div className="grid__box item-b">
                            <div className="grid__heading">Инвентарный номер</div>
                            <div className="grid__value">хр777</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c" >
                            <div className="grid__heading">Дата последней поверки</div>
                            <div className="grid__value">08.03.2012</div>
                            <button className="grid__btn grid__btn_white" onClick={0}> Все поверки &#10095;&#10095;</button>
                            <img className="grid__icon" src="icons/date.svg" alt="date" />
                        </div>
                        <div className="grid__box item-d" >
                            <div className="grid__heading">Дата следующей поверки</div>
                            <div className="grid__value">08.04.2018</div>
                            <img className="grid__icon" src="icons/date.svg" alt="date" />
                        </div>
                        <div className="grid__box item-r">
                            <div className="grid__heading">Расположение</div>
                            <div className="grid__value">кабинет 6</div>
                            <img className="grid__icon" src="icons/location.svg" alt="location" />
                        </div>
                        <div className="grid__box item-f">
                            <div className="grid__heading grid__heading_white">Статус</div>
                            <div className="grid__value">
                                <div className="grid__quantity">Сломан</div>
                            </div>
                            <div className="grid__jar">
                                <img className="grid__img" src="icons/equipment.svg" alt="equipment" />
                            </div>
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                <div className="grid__doc" onClick={0}>Паспорт</div>
                                <div className="grid__doc" onClick={0}>Сертификат</div>
                                <div className="grid__doc">Руководство пользования</div>
                                <div className="grid__doc">СОП (2 версия)</div>
                            </div>
                            <div className="grid__barcode" onClick={0}> 
                                <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <Barcode/>
                            <img className="grid__icon" src="icons/document.svg" alt="document" />
                        </div>
                        <div className="grid__box item-h">
                            <div className="grid__heading grid__heading_white">Последний пользователь</div>
                            <div className="grid__value grid__value_row">
                                    <div className="grid__history">Илюша</div>
                                    <div className="grid__history">09.08.09 13-00</div>
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            <button className="grid__btn" onClick={0}>Смотреть развернутую историю использований &#10095;&#10095;</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}