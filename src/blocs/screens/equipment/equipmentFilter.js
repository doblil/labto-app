import { SVGstar } from "../../../svg/svg"

export const EquipmentFilter = (props) => {
    
    const {currentFavorite, favoriteSearch, setFavoriteSearch, nameSearch, setNameSearch, snSearch, setSnSearch, invnSearch, setInvnSearch, statusSearch, setStatusSearch, verifySearch, setVerifySearch} = props;

    const handleResetFilter = () => {
        setSnSearch('');
        setInvnSearch('');
        setNameSearch('');
        setFavoriteSearch(false);
        setVerifySearch('');
        setStatusSearch('');
    }

    return(
        <div className="filter">
            <div style={{display:'flex',flexWrap:'wrap', alignItems:'center'}}>                
                <div className="filter__inputs">
                    <div className="filter__wrap">
                        <div className="filter__label" >Поиск по названию</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setNameSearch(e.target.value)} } value = {nameSearch}/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по серийному номеру</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setSnSearch(e.target.value)} } value= {snSearch}/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap" style={{marginBottom:'5px', marginRight:'0'}}>
                        <div className="filter__label">Поиск по инвентарному номеру</div>
                        <input type="text" className="filter__input" onChange={(e)=>{setInvnSearch(e.target.value)} } value= {invnSearch}/>
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                        
                    </div>

                </div>

                <div className="filter__condition">
                    <div className="filter__row">
                        <label className="filter__parameter">Поверка</label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-verifiedAll" 
                            name="chb-verifiedAll"
                            value={''}
                            checked={verifySearch === ''}
                            onChange = {(e) => setVerifySearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-verifiedAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" id="chb-0" 
                            name="chb-0"
                            value={'unverified'}
                            checked={verifySearch === 'unverified'}
                            onChange = {(e) => setVerifySearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-0">Не поверенные</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-verified" 
                            name="chb-verified"
                            value={'verified'}
                            checked={verifySearch === 'verified'}
                            onChange = {(e) => setVerifySearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-verified">Поверенные</label>
                    </div>
                       
                    <div className="filter__row">
                        <label className="filter__parameter">Статус</label>
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-statusAll" 
                            name="chb-statusAll"
                            value={''}
                            checked={statusSearch === ''}
                            onChange = {(e) => setStatusSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-statusAll">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-broken" 
                            name="chb-broken"
                            value={'unready'}
                            checked={statusSearch === 'unready'}
                            onChange = {(e) => setStatusSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-broken">Не работает</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-ready" 
                            name="chb-ready"
                            value={'ready'}
                            checked={statusSearch === 'ready'}
                            onChange = {(e) => setStatusSearch(e.target.value)}
                        />
                        <label className="custom-checkbox__text" for="chb-ready">Готов</label>
                    </div>

                    <div className="filter__row">
                        <input 
                            className="custom-checkbox" 
                            type="checkbox"id="chb-allFavorite" 
                            name="chb-allFavorite"
                            checked={favoriteSearch === false}
                            onChange = {(e) => setFavoriteSearch(false)}
                        />
                        <label className="custom-checkbox__text" for="chb-allFavorite">Все</label> <br />
                        <input 
                            className="custom-checkbox" 
                            type="checkbox" 
                            id="chb-favorite" 
                            name="chb-favorite"
                            checked={favoriteSearch === true}
                            onChange = {(e) => setFavoriteSearch(true)}
                        />
                        <label className="custom-checkbox__text" style={{position: 'relative'}} for="chb-favorite">Избранное ({currentFavorite})
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
                        onClick = {handleResetFilter}
                    />
            </div>
        </div>
    )
}