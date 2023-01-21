import { useState } from "react"
import { useSelector } from "react-redux";
import { SVGstar } from "../../../../../svg/svg"

export const ReagFilter = (props) => {
    
    const { setCasSearch, setCatSearch, setNameSearch, setExpSearch, setFavoriteSearch, setRestSearch, rest, exp, favorite } = props;
    const {favorite: favoriteList} = useSelector(state => state.auth)


    console.log('from filter', favorite)

    return(
        <div className="filter">
                <div className="filter__inputs">
                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по названию</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setNameSearch(e.target.value)} }/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по каталожному номеру</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setCatSearch(e.target.value)} }/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по CAS-№</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setCasSearch(e.target.value)} }/>
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                        
                       
                    </div>

                </div>

                <div className="filter__condition">
                    <div className="filter__row">
                        <label className="filter__parameter">Остаток </label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-restAll" 
                            name="chb-restAll"
                            value={''}
                            checked={rest === ''}
                            onChange = {(e) => setRestSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-restAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-0" 
                            name="chb-0"
                            value={'null'}
                            checked={rest === 'null'}
                            onChange = {(e) => setRestSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-0">0%</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-presence" 
                            name="chb-presence"
                            value={'instok'}
                            checked={rest === 'instok'}
                            onChange = {(e) => setRestSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-presence">В наличии</label>
                    </div>
                       
                    <div className="filter__row">
                        <label className="filter__parameter">Срок годности</label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-expAll" 
                            name="chb-expAll"
                            value={''}
                            checked={exp === ''}
                            onChange = {(e) => setExpSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-expAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-expired" 
                            name="chb-expired"
                            value={'invalid'}
                            checked={exp === 'invalid'}
                            onChange = {(e) => setExpSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-expired">Истек</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-fit" 
                            name="chb-fit"
                            value={'valid'}
                            checked={exp === 'valid'}
                            onChange = {(e) => setExpSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-fit">Годен</label>
                    </div>

                    <div className="filter__row">
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-allFavorite" 
                            name="chb-allFavorite"
                            checked={favorite === false}
                            onChange = {(e) => setFavoriteSearch(false)}
                        />
                        <label className="custom-checkbox__text" for="chb-allFavorite">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-favorite" 
                            name="chb-favorite"
                            checked={favorite === true}
                            onChange = {(e) => setFavoriteSearch(true)}
                        />
                        <label className="custom-checkbox__text" style={{position: 'relative'}} for="chb-favorite">Избранное ({favoriteList.length})
                            <SVGstar style={{
                                fill: "#ffb027",
                                position: 'absolute',
                                bottom: '4px',
                                right: '-12px'
                                }}/>
                        </label> <br />
                    </div>
                </div>
            </div>
    )
}