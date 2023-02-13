
import '../../../../../sass/sassTemplates/desc.scss'
import '../../../../../sass/sassTemplates/flow.scss'
import '../../../../../sass/sassTemplates/overflow.scss'
import { FlowForm } from '../flowForm'
import { Barcode } from '../../../../barcode/barcode'
import { SVGstar } from '../../../../../svg/svg'

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
                    <div className="grid">
                        <div className="grid__box item-a">
                            <div className="grid__heading">Партия</div>
                            <div className="grid__value">7878</div>
                        </div>

                        <div className="grid__box item-b">
                            <div className="grid__heading">Упаковка</div>
                            <div className="grid__value">600 g</div>
                            <img className="grid__icon" src="icons/scales.svg" alt="document" />
                        </div>
                        <div className="grid__box item-c" >
                            <div className="grid__heading">Дата производства - <br /> годен до</div>
                            <div className="grid__descr">45.45.2023</div>
                            <img className="grid__icon" src="icons/date.svg" alt="document" />
                        </div>
                        <div className="grid__box item-d">
                            <div className="grid__heading">Расположение</div>
                            <div className="grid__value">there</div>
                            <img className="grid__icon" src="icons/location.svg" alt="location" />
                        </div>
                        <div className="grid__box item-e"></div>
                        <div className="grid__box item-f">
                            <div className="grid__heading grid__heading_white">Наличие</div>
                            <div className="grid__value">
                                <div className="grid__quantity">100%</div>
                                <div className="grid__quantity">600 g</div>
                            </div>
                            <div className="grid__jar">
                                <img className="grid__img" src="icons/jar.svg" alt="jar" />
                                <div className="grid__jar-scale" style={{height: `100%`}}></div>
                            </div>
                            <div className="grid__icon"></div>
                            <button className="grid__btn">Заказать</button>
                        </div>
                        <div className="grid__box item-g">
                            <div className="grid__heading grid__heading_white">Документы</div>
                            <div className="grid__value">
                                <div className="grid__doc"> Паспорт</div>
                                <div className="grid__doc"><a href='/'>SDS</a></div>
                                <div className="grid__doc"><a href='/'>TDS</a></div>
                            </div>
                            
                            <div className="grid__barcode"> 
                                <img src="icons/upc.svg" alt="" /> 
                            </div>
                            <Barcode/>
                        </div>
                            <img className="grid__icon" src="icons/document.svg" alt="document" />
                        </div>
                        <div className="grid__box item-h">
                            <div className="grid__heading grid__heading_white">Последний пользователь</div>
                            <div className="grid__value grid__value_row">
                                <>
                                    <div className="grid__history">Lily</div>
                                    <div className="grid__history"></div>
                                    <div className="grid__history"></div>
                                </> : <div className="grid__history">Похоже, никто не пользовался</div>
                            </div>
                            <img className="grid__icon" src="icons/person.svg" alt="document" />
                            <button className="grid__btn">Смотреть развернутую историю списаний</button>
                        </div>
                    </div>
                </div>
        </>

    
  
return(
    <div className="desc">
        {content}
        <FlowForm/>
    </div>
  )
}