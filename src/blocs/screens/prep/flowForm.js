
export const FlowForm = () => {
    return(
        <>
            <div className="flow">
                <div className="flow__heading">Оформить расход</div>

                <div className="flow__destination">
                    <div className="flow__label">Статья списания</div>
                    <select class="flow__input" id="">
                        <option></option>
                        <option value="">1. На опыт</option>
                        <option value="">2. Просто так</option>
                        <option value="">3. Для личного пользования</option>
                    </select>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Вид испытания</div>
                    <textarea type="text" class="flow__input-text" placeholder="Описание анализа"></textarea>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Количество</div>
                    <div className="flow__wrap">
                        <input type="text" class="flow__input"/>
                        <div className="flow__inner">
                            <div className="flow__label">Дата</div>
                            <input type="text" class="flow__input flow__input-mini"/>
                        </div>
                    </div>
                </div>

                <div className="flow__btn-wrap">
                    <button className="flow__btn">В черновик</button>
                    <button className="flow__btn">Списать</button>
                </div>

            </div>
        </>
    )
}