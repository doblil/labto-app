import './prep.scss'
import '../../../sass/sassTemplates/desc.scss'
import '../../../sass/sassTemplates/flow.scss'
import { FlowForm } from './flowForm'

export const PrepDescBloc = () => {
  return(
    <div className="desc">
        <div className="desc__close">×</div>
        <div className="desc__top">
            <div className="desc__heading">
                <div className="desc__title">ID 92147</div>
                <div className="desc__name">Муравьиная кислота</div>
                <div className="desc__title">Нева Реактив | ГОСТ 4166-76</div>
            </div>
            <div className="desc__status">
                <div className="desc__presence">В наличии</div>
                <img src="icons/star.svg" className="desc__favorite" alt="star" />
            </div>
        </div>

       <div className="overflow">
        <div className="desc__overflow">
                <div className="grid">
                    <div className="grid__box item-a">
                        <div className="grid__heading">Партия</div>
                        <div className="grid__value">1388/H10</div>
                    </div>

                    <div className="grid__box item-b">
                        <div className="grid__heading">Упаковка</div>
                        <div className="grid__value">400мл</div>
                        <img className="grid__icon" src="icons/scales.svg" alt="document" />
                    </div>
                    <div className="grid__box item-c" >
                        <div className="grid__heading">Дата производства - <br /> годен до</div>
                        <div className="grid__value">12.12.2031 - 12.12.2032</div>
                        <div className="grid__descr">осталось 297 суток</div>
                        <img className="grid__icon" src="icons/date.svg" alt="document" />
                    </div>
                    <div className="grid__box item-d">
                        <div className="grid__heading">Расположение</div>
                        <div className="grid__value">шкаф 2 <br /> полка 3</div>
                        <img className="grid__icon" src="icons/location.svg" alt="location" />
                    </div>
                    <div className="grid__box item-e">
                        <img src="icons/danger/corrosive.svg" alt="corrosive" />
                        <img src="icons/danger/environmentally_hazardous.svg" alt="environmentally_hazardous" />
                        <img src="icons/danger/harmful.svg" alt="harmful" />
                        <img src="icons/danger/health _hazard.svg" alt="health _hazard" />
                        <img src="icons/danger/oxidizing.svg" alt="oxidizing" />
                        <img src="icons/danger/toxic.svg" alt="toxic" />
                    </div>
                    <div className="grid__box item-f">
                        <div className="grid__heading grid__heading_white">Наличие</div>
                        <div className="grid__value">
                            <div className="grid__quantity">56%</div>
                            <div className="grid__quantity">220мл</div>
                        </div>
                        <div className="grid__jar">
                            <img className="grid__img" src="icons/jar.svg" alt="jar" />
                            <div className="grid__jar-scale"></div>
                        </div>
                        <div className="grid__icon"></div>
                        <button className="grid__btn">Заказать</button>
                    </div>
                    <div className="grid__box item-g">
                        <div className="grid__heading grid__heading_white">Документы</div>
                        <div className="grid__value">
                            <div className="grid__doc">Паспорт</div>
                            <div className="grid__doc">SDS</div>
                            <div className="grid__doc">TDS</div>
                        </div>
                        <img className="grid__icon" src="icons/document.svg" alt="document" />
                    </div>
                    <div className="grid__box item-h">
                        <div className="grid__heading grid__heading_white">Последний пользователь</div>
                        <div className="grid__value grid__value_row">
                            <div className="grid__history">Добровльскяа Лилия</div>
                            <div className="grid__history">отдел разработки</div>
                            <div className="grid__history">12.29.2022</div>
                        </div>
                        <img className="grid__icon" src="icons/person.svg" alt="document" />
                        <button className="grid__btn">Смотреть развернутую историю списаний &#10095;&#10095;</button>
                    </div>
                    
                </div>
            </div>
       </div> 
       <div className="desc__flow-wrap">
            <FlowForm/>
       </div>
    </div>
  )
}