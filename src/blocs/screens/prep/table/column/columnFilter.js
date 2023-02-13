import { useState } from "react"
import { useSelector } from "react-redux";
import { SVGstar } from "../../../../../svg/svg"

export const ColumnFilter = () => {

    return(
        <div className="filter">
                <div className="filter__inputs" style={{justifyContent:'flex-start'}}>
                    <div className="filter__wrap" style={{marginBottom:'18px', marginRight:'20px'}}>
                        <div className="filter__label">Поиск по названию</div>
                        <input type="text" className="filter__input"/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap" style={{marginBottom:'14px'}}>
                        <div className="filter__label">Поиск по проекту</div>
                        <input type="text" className="filter__input"/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                </div>
                <div className="filter__row">
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-allFavorite" 
                            name="chb-allFavorite"
                        />
                        <label className="custom-checkbox__text" for="chb-allFavorite">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-favorite" 
                            name="chb-favorite"
                        />
                        <label className="custom-checkbox__text" style={{position: 'relative'}} for="chb-favorite">Избранное
                            <SVGstar style={{
                                fill: "#ffb027",
                                position: 'absolute',
                                bottom: '4px',
                                right: '-12px'
                                }}/>
                        </label> <br />
                    </div>
            </div>
    )
}