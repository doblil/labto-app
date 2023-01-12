import './add.scss'
export const AddReag = () => {
    return(
        <div className="add">            
            <div className="add__heading">Добавление реактива</div>
            <div className="add__wrap">
                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">ID</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Наименование</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Производитель</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Каталожный номер</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Упаковка</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Партия</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">CAS-№</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Дата производства</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Годен до</div>
                        <input type="text" class="add__input"/>
                    </div>
                </div>

                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">Расположение</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Пиктограммы опасности СГС</div>
                        <div className="add__choice">
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="" />Toxic</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }