import { SVGstar } from "../../../svg/svg"

export const EquipmentFilter = () => {
    
    return(
        <div className="filter">
            <div style={{display:'flex',flexWrap:'wrap', alignItems:'center'}}>                
                <div className="filter__inputs">
                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по названию</div>
                        <input type="text" className="filter__input" />
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по серийному номеру</div>
                        <input type="text" className="filter__input"/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap" style={{marginBottom:'5px', marginRight:'0'}}>
                        <div className="filter__label">Поиск по инвентарному номеру</div>
                        <input type="text" className="filter__input" />
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
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-restAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-0" 
                            name="chb-0"
                            value={'null'}
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-0">0%</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-presence" 
                            name="chb-presence"
                            value={0}
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-presence">В наличии</label>
                    </div>
                       
                    <div className="filter__row">
                        <label className="filter__parameter">Срок годности</label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-expAll" 
                            name="chb-expAll"
                            value={0}
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-expAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-expired" 
                            name="chb-expired"
                            value={0}
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-expired">Истек</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-fit" 
                            name="chb-fit"
                            value={0}
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-fit">Годен</label>
                    </div>

                    <div className="filter__row">
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-allFavorite" 
                            name="chb-allFavorite"
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" for="chb-allFavorite">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-favorite" 
                            name="chb-favorite"
                            checked={0}
                            onChange = {0}
                        />
                        <label className="custom-checkbox__text" style={{position: 'relative'}} for="chb-favorite">Избранное ({0})
                            <SVGstar style={{
                                fill: "#ffb027",
                                position: 'absolute',
                                bottom: '4px',
                                right: '-12px'
                                }}/>
                        </label> <br />
                    </div>
                </div>
                <button 
                        className="btn" 
                        style={{fontSize: '9px', lineHeight:'10px', width: '120px', height:'26px', fontWeight: '500', marginTop:"10px"}}
                        children='Сбросить фильтры'
                        onClick = {0}
                    />
            </div>
        </div>
    )
}