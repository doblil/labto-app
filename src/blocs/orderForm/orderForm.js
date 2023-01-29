import { CustomSelect } from "../customSelect/customSelect";
import { useDispatch, useSelector } from "react-redux";
import './orderForm.scss'
import { orderAddresseeNameCh, orderCatCh, orderDestinationCh, orderManufacturerCh, orderNameCh, orderReset, orderTextCh } from "../../redux/store/orderSlice";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { sMessageCh } from "../../redux/store/sMessageSlice";


export const OrderForm = (props) => {

    const { setShowOrderForm } = props;
    const dispatch = useDispatch()


    const {allUsers} = useSelector(state=> state.global)
    const {projects} = useSelector(state => state.project);
    const {name, type, text, addresseeName, initialDestination, manufacturer, cat} = useSelector(state => state.order)
    const [createOrder, {isLoading}] = useCreateOrderMutation()
    
    const options = projects.map(item => {
        return { value: item.code, label: `${item.code}, ${item.name}`}
    })

    const usersOptions = allUsers.map(item => {
        return { value: item.name, label: `${item.name}, ${item.positon}`}
    })

    const handleHideForm = () => {
        
            setShowOrderForm(false);
            dispatch(orderReset());
        
    }

    const hanleCreateOrder = async () => {
        try {
            if(!name || !text || !addresseeName){
                return dispatch(sMessageCh('заполните обязательные поля'))
            }
            
            const body = {
                name, type, text, addresseeName, manufacturer, cat, initialDestination
            };

            if(isLoading) return;

            await createOrder(body).unwrap()
            dispatch(orderReset());
            setShowOrderForm(false)

        } catch (error) {
            console.error(error)
        }
    }

    return(
        
        <div className="order" onClick={(e)=>{if(e.target.className === 'order') {handleHideForm()}}}>
            <div className="order__window">
                <div className="close" onClick={handleHideForm}></div>
                <div className="flow__heading">Оформление заказа</div>

                <div className="flow__destination">
                    <div className="flow__label">Заказать</div>
                    <input
                        value={name}
                        onChange={(e) => {dispatch(orderNameCh(e.target.value))}}
                        placeholder='Наименование'
                    />
                    <input
                        value = {manufacturer}
                        onChange={(e) => {dispatch(orderManufacturerCh(e.target.value))}}
                        placeholder='Производитель'
                    />
                    <input
                        value = {cat}
                        onChange={(e) => {dispatch(orderCatCh(e.target.value))}}
                        placeholder='Кат. №'
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Проект</div>
                    <CustomSelect
                        handleChange = {(target) => dispatch(orderDestinationCh(target.value))}
                        options = {options}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                    />
                </div>
                <div className="flow__destination">
                    <div className="flow__label">Адресат</div>
                    <CustomSelect
                        handleChange = {(target) => dispatch(orderAddresseeNameCh(target.value))}
                        options = {usersOptions}
                        width = {'60%'}
                        height = {'25px'}
                        fontSize = {'12px'}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label">Детали заказа</div>
                    <textarea 
                        value={text}
                        type="text" 
                        class="flow__input-text" 
                        placeholder="Описание анализа"
                        onChange={(e)=>{dispatch(orderTextCh(e.target.value))}}  
                    />
                </div>
                
                <div className="flow__btn-wrap">
                    <button className="btn btn_white flow__btn " onClick={hanleCreateOrder}>Заказать</button>
                    <button className="btn flow__btn" onClick={handleHideForm}>Отменить</button>
                </div>
            </div>
        </div>
    );
};