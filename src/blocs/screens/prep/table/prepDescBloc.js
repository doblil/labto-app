import '../prep.scss'
import '../../../../sass/sassTemplates/desc.scss'
import '../../../../sass/sassTemplates/flow.scss'
import { FlowForm } from './flowForm'
import { useDispatch, useSelector } from 'react-redux'
import { useFavoriteReagentMutation, useGetOneReagentQuery, useUnfavoriteReagentMutation } from '../../../../redux/api/reagentApi'
import { SVGstar } from '../../../../svg/svg'
import { handleWarnImg, stringifyDate } from '../../../../services/sevices'
import { useEffect } from 'react'
import { favoriteCh } from '../../../../redux/store/authSlice'

export const PrepDescBloc = () => {
    const dispatch = useDispatch();

    let content = <></>
    let isFavorite = false
    const {favorite, userId} = useSelector(state => state.auth);
    
    const { _id: target } = useSelector(state => state.activeReagent);

    if(favorite.includes(target)){isFavorite = true}

    const [favoriteReagent, {isLoading: favoriteLoading, isSuccess: favoriteSuccess}] = useFavoriteReagentMutation()
    const [unfavoriteReagent, {isLoading: unfavoriteLoading, isSuccess: unfavoriteSuccess}] = useUnfavoriteReagentMutation()
    const {data, isLoading, isSuccess} = useGetOneReagentQuery(target);

    const handleJarColor = (container, rest) => {
        const restPercent = Math.floor(rest/container*100)
        if(restPercent > 60) return 'lawnGreen'
        if(restPercent > 40) return 'yellow'
        if(restPercent > 20) return 'red'
        return 'darkRed'
    }
    
    const handleFavorite = async () => {
        if(favoriteLoading || unfavoriteLoading) return

        if(!favorite.includes(target)){
            await favoriteReagent({userId, target})
            dispatch(favoriteCh(target))
        }
        if(favorite.includes(target)){
            await unfavoriteReagent({userId, target})
            dispatch(favoriteCh(target))
        }
    }
    
    if(!target){
        return(
            <div className="desc__return">
                Выберите строку в таблице
            </div>
        )
    }


    if (isLoading){
        content = <div className="desc__return">Загрузка...</div>
    }

    if(isSuccess && data.reagent){
        const {itemId, 
            name, manufacturer, cat, 
            lot, container, fromDate, 
            toDate, units, restUnits, 
            inUse, warn, SDS, TDS, 
            passport} = data.reagent;
        
        const last = inUse[inUse.length - 1]
        content = <> 
            <div className="desc__top">
                <div className="desc__heading">
                    <div className="desc__title">ID {itemId}</div>
                    <div className="desc__name">{name}</div>
                    <div className="desc__title">{manufacturer} | {cat}</div>
                </div>
                <div className="desc__status">
                    <div className="desc__presence">{restUnits > 0.1 && 'В наличии'}</div>
                    <div className="desc__favorite">
                        {isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#ffb027", height:"25", width: "25"}}/>}
                        {!isFavorite && <SVGstar handleFavorite = {handleFavorite} style={{fill: "#cdcdcd", height:"25", width: "25"}}/>}
                    </div>
                </div>
            </div>

       <div className="desc__overflow">
            <div className="desc__overflow-wrap">
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
                        <div className="grid__value">{stringifyDate(fromDate) } - {stringifyDate(toDate) }</div>
                        <div className="grid__descr">осталось {(toDate - (+Date.now()))/1000/60/60/24} суток</div>
                        <img className="grid__icon" src="icons/date.svg" alt="document" />
                    </div>
                    <div className="grid__box item-d">
                        <div className="grid__heading">Расположение</div>
                        <div className="grid__value">шкаф 2 <br /> полка 3</div>
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
                            {inUse.length ?  <>
                                <div className="grid__history">{last.name}</div>
                                <div className="grid__history">{last.quan} {units}</div>
                                <div className="grid__history">{stringifyDate(last.date, true)}</div>
                            </> : <div className="grid__history">Похоже, никто не пользовался</div>}
                        </div>
                        <img className="grid__icon" src="icons/person.svg" alt="document" />
                        <button className="grid__btn">Смотреть развернутую историю списаний &#10095;&#10095;</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    }

    
  
    return(
    <div className="desc">
        <div className="desc__close">×</div>
        {content}
        <FlowForm/>
    </div>
  )
}