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
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Производитель</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Каталожный номер</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Упаковка (вес)</div>
                        <div className="add__destination add__destination-mini">
                            <input type="text" class="add__input add__input-mini"/>
                            <select class="add__input add__input-mini" ></select>
                        </div>
                        
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Партия</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">CAS-№</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Дата производства</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination add__destination_mt8">
                        <div className="add__label">Годен до</div>
                        <input type="text" class="add__input"/>
                    </div>
                </div>

                <div className="add__inner">
                    <div className="add__destination">
                        <div className="add__label">Расположение</div>
                        <input type="text" class="add__input"/>
                    </div>
                    <div className="add__destination add__destination_top">
                        <div className="add__label">Пиктограммы опасности СГС</div>
                        <div className="add__choice">
                            <div className="add__choice-heading">Выберите необходимые из списка</div>
                            <div className="add__pict"><img src="icons/danger/explosive.svg" alt="explosive" />Explosive</div>
                            <div className="add__pict"><img src="icons/danger/flammable.svg" alt="flammable" />Flammable</div>
                            <div className="add__pict"><img src="icons/danger/oxidizing.svg" alt="oxidizing" />Oxidizing</div>
                            <div className="add__pict"><img src="icons/danger/compressed_gas.svg" alt="compressed_gas" />Compressed gas</div>
                            <div className="add__pict"><img src="icons/danger/corrosive.svg" alt="corrosive" />Corrosive</div>
                            <div className="add__pict"><img src="icons/danger/toxic.svg" alt="toxic" />Toxic</div>
                            <div className="add__pict"><img src="icons/danger/harmful.svg" alt="harmful" />Harmful</div>
                            <div className="add__pict"><img src="icons/danger/health_hazard.svg" alt="health_hazard" />Health hazard</div>
                            <div className="add__pict"><img src="icons/danger/environmentally_hazardous.svg" alt="environmentally_hazardous" />Environmentally hazardous</div>
                        </div>
                    </div>
                    <div className="add__destination">
                        <div className="add__label">Документы</div>
                        <div className="add__document">
                            <div className="add__document_form">Добавить паспорт</div>
                            <div className="add__document_form">Добавить SDS</div>
                            {/* <div className="add__document_form">Добавить TDS</div> */}
                            <div className="add__document-wrap">
                                <div className="add__document-title">TDS</div>
                                <div className="add__document_form add__document_success">
                                    <div className="add__document_cancel">x</div>
                                    <div className="add__file"><p>name_file.docdfsdsfsdfdsfdsfdsfsdfdsfsdfdsfdfsdfghjkljhgfdxszxfcghjk</p></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="add__btn-wrap">
                        <button className="add__btn add__btn_white">В черновик</button>
                        <button className="add__btn">Внести</button>
                    </div>
                </div>
            </div>

        </div>
    )
  }