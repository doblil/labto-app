
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
                    <textarea type="text" class="chat__input-text" placeholder="Описание анализа"></textarea>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Количество</div>
                    <input type="text" class="filter__input"/>
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Дата</div>
                    <input type="text" class="filter__input"/>
                </div>

            </div>
        </>
    )
}