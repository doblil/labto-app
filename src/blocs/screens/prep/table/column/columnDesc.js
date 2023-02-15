
import { Barcode } from '../../../../barcode/barcode'
import { SVGstar } from '../../../../../svg/svg'
import { ColumnFlowForm } from './columnFlowForm'

import '../../../../../sass/sassTemplates/desc.scss'
import '../../../../../sass/sassTemplates/flow.scss'
import '../../../../../sass/sassTemplates/overflow.scss'


export const ColumnDesc = () => {
       const content = <>                 
            <div className="desc__top">

                <div className="desc__heading">
                    <div className="desc__title">ID </div>
                    <div className="desc__name">Name</div>
                    <div className="desc__title">Made by | CAS</div>
                </div>

                <div className="desc__status">
                    <div className="desc__favorite">
                        <SVGstar style={{fill: "#ffb027", height:"25", width: "25"}}/>
                    </div>
                </div>
            </div>
        
            <div className="overflow overflow__mt29 desc__overflow">
                
                <div className="overflow_border desc__overflow-wrap">
                </div>

                <div className="desc__overflow-wrap">
                    <div className="grid grid_columns">
                        <div className="grid__box item-a"style={{ backgroundColor:'#00ac7f'}}>
                            <div className="grid__heading"style={{color:'white'}}>Статус</div>
                            <div className="grid__value" style={{color:'white'}}>Свободна</div>
                        </div>
                        {/* <div className="grid__box item-a"style={{ backgroundColor:'red'}}>
                            <div className="grid__heading"style={{color:'white'}}>Статус</div>
                            <div className="grid__value" style={{color:'white'}}>В работе</div>
                        </div> */}

                        <div className="grid__box item-b">
                            <div className="grid__heading">Партия</div>
                            <div className="grid__value">734874</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c">
                            <div className="grid__heading">Серийный номер</div>
                            <div className="grid__value">t12341234</div>
                        </div>
                        <div className="grid__box item-d" >
                            <div className="grid__heading">Дата производства</div>
                            <div className="grid__value">45.45.2023</div>
                            <img className="grid__icon" src="icons/date.svg" alt="document" />
                        </div>

                        <div className="grid__box item-r">
                        <div className="grid__heading">Основной проект</div>
                            <div className="grid__value">Диклофенак Диклофенак Диклофенак Диклофенак</div>
                        </div>

                        <div className="grid__box item-f"style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <div>
                                <div className="grid__quantity"style={{fontSize:'7px', lineHeight:'20px', marginBottom:'15px'}}>Счётчик инжекций <br /> <span style={{fontSize:'20px'}}>34673</span></div>
                                <div className="grid__quantity"style={{fontSize:'7px', lineHeight:'18px'}}>Растворитель хранения: <br /> <span style={{fontSize:'16px'}}>ACN:H2O=1:1</span></div>
                            </div>
                            <img src="icons/injector.svg" alt="injector" style={{height:'90px'}}/> 
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                <div className="grid__doc"> Паспорт</div>
                            </div>
                            
                            <div className="grid__barcode"> 
                                <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <img className="grid__icon" src="icons/document.svg" alt="document" />
                            <Barcode/>
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
        </>

    
  
return(
    <div className="desc">
        {content}
        <ColumnFlowForm/>
    </div>
  )
}