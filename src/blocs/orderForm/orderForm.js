import './orderForm.scss'
import { CustomSelect } from "../../../customSelect/customSelect";

export const OrderForm = () => {
    return(
        
        <div className="order">
            <div className="order__window">
                <div className="close"></div>
                <div className="flow__heading">Оформление заказа</div>

                <div className="flow__destination">
                    <div className="flow__label">Необходимое вещество</div>
                    <CustomSelect
                        // options = {options}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Проект</div>
                    <CustomSelect
                        // options = {options}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Детали заказа</div>
                    <textarea type="text" class="flow__input-text" placeholder="Описание анализа"> Прошу заказать для меня 2 банки муравьиной кислоты</textarea>
                </div>
                
                <div className="flow__btn-wrap">
                    <button className="btn btn_white flow__btn " >Заказать</button>
                    <button className="btn flow__btn" >Отменить</button>
                </div>

            </div>
        </div>
    );
};