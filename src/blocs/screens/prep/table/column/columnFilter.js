import React from 'react';
import { SVGstar } from "../../../../../svg/svg"

export const ColumnFilter = (props) => {

    const {  setNameSearch,  setProjectSearch, setIUse, setFavoriteSearch, nameSearch, projectSearch, iUse, favoriteSearch, currentFavorite} = props

    const handleResetFilter = () => {
        setNameSearch('');
        setProjectSearch('');
        setIUse(false);
        setFavoriteSearch(false)
    }

    return(
        <div className="filter">
            <div style={{display:'flex',flexWrap:'wrap', alignItems:'center'}}>
                <div className="filter__inputs">
                    <div className="filter__wrap" style={{marginBottom:'18px', marginRight:'20px'}}>
                        <div className="filter__label">Поиск по названию</div>
                        <input 
                            type="text" 
                            className="filter__input" 
                            onChange={(e)=>{setNameSearch(e.target.value)} }
                            value = {nameSearch}
                        />
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap" style={{marginBottom:'14px'}}>
                        <div className="filter__label">Поиск по проекту</div>
                        <input 
                            type="text" 
                            className="filter__input" 
                            onChange={(e)=>{setProjectSearch(e.target.value)}}
                            value = {projectSearch}
                        />
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                </div>
                <div className="filter__condition">
                    <div className="filter__row">
                        <label className="filter__parameter">Использование </label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-iuseAll" 
                            name="chb-iuseAll"
                            checked={iUse === false}
                            onChange = {() => setIUse(false)}
                        />
                        <label className="custom-checkbox__text" for="chb-iuseAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-iuse" 
                            name="chb-iuse"
                            checked={iUse === true}
                            onChange = {() => setIUse(true)}
                        />
                        <label className="custom-checkbox__text" for="chb-iuse">используются мной</label> <br />
                    </div>

                    <div className="filter__row">
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-allFavorite" 
                            name="chb-allFavorite"
                            checked={favoriteSearch === false}
                            onChange = {() => setFavoriteSearch(false)}
                        />
                        <label className="custom-checkbox__text" for="chb-allFavorite">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-favoriteSearch" 
                            name="chb-favoriteSearch"
                            checked={favoriteSearch === true}
                            onChange = {() => setFavoriteSearch(true)}
                        />
                        <label className="custom-checkbox__text" style={{position: 'relative'}} for="chb-favoriteSearch">Избранное({currentFavorite})
                            <SVGstar style={{
                                fill: "#ffb027",
                                position: 'absolute',
                                bottom: '4px',
                                right: '-12px'
                                }}/>
                        </label> <br />
                    </div>
                    <button 
                        className="btn" 
                        style={{fontSize: '9px', lineHeight:'10px', width: '120px', height:'26px', fontWeight: '500', marginTop:"10px"}}
                        children='Сбросить фильтры'
                        onClick = {handleResetFilter}
                    />

                </div>
            </div>

        </div>
    )
}