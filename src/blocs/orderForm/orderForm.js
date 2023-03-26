import { CustomSelect } from "../customSelect/customSelect";
import { useDispatch, useSelector } from "react-redux";
import './orderForm.scss'
import { orderAddresseeNameCh, orderCatCh, orderDestinationCh, orderManufacturerCh, orderNameCh, orderReset, orderTextCh, orderTypeCh } from "../../redux/store/orderSlice";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { sMessageCh } from "../../redux/store/sMessageSlice";
import { useState } from "react";


export const OrderForm = (props) => {
const [initialise, setInitialise] = useState(false)
    const { setShowOrderForm } = props;
    const dispatch = useDispatch()


    const {allUsers} = useSelector(state=> state.global)
    const {projects} = useSelector(state => state.project);
    const {name, type, text, addresseeName, initialDestination, manufacturer, cat} = useSelector(state => state.order)
    const [createOrder, {isLoading}] = useCreateOrderMutation()


    const projectOptions = projects.map(item => {
        return { value: {code: item.code, name: item.name}, label: `${item.code}, ${item.name}`}
    })

    const usersOptions = allUsers.map(item => {
        return { value: item._id, label: `${item.name}, ${item.position}`}
    })

    const typeOptions =  [
        { value: 'reag', label: 'реактива' },
        { value: 'subst', label: 'субстанции' },
        { value: 'rs', label: 'стандартного образца' },
        { value: 'column', label: 'колонки'}
    ]

    const handleHideForm = () => {
        
            setShowOrderForm(false);
            dispatch(orderReset());
        
    }

    const handleSelectDestination = (target) => {
        dispatch(orderDestinationCh(target?.value))
    }

    const handleSelectAdressee = (target) => {
        dispatch(orderAddresseeNameCh(target?.value))
    }

    const handleSelectType = (target) => {
        dispatch(orderTypeCh(target?.value))
    }

    const hanleCreateOrder = async () => {
        try {
            if(!name || !text || !addresseeName){
                return dispatch(sMessageCh('заполните обязательные поля'))
            }
            
            const body = {
                name, type, text, addressee : addresseeName, manufacturer, cat, initialDestination
            };

            if(isLoading) return;

            await createOrder(body).unwrap()
            dispatch(orderReset());
            setShowOrderForm(false)
            setInitialise(true)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        
        <div className="overlay" onClick={(e)=>{if(e.target.className === 'order') {handleHideForm()}}}>
            <div className="overlay__window">
                <div className="close" onClick={handleHideForm}></div>
                <div className="flow__destination">
                    <div className="flow__label" style={{marginTop:'7px'}}>Оформление заказа</div>
                    
                    <CustomSelect
                        handleChange = {handleSelectType}
                        initialise = {initialise}
                        setInitialise = {setInitialise}
                        options = {typeOptions}
                        width = {'60%'}
                        height = {'20px'}
                        fontSize = {'10px'}
                        selected = {type}
                    />
                    </div>
                

                <div className="flow__destination">
                    <div className="flow__label">Наименование</div>
                    <input
                        value={name}
                        onChange={(e) => {dispatch(orderNameCh(e.target.value))}}
                        placeholder='Наименование'
                        style ={{width: '60%', height: '30px'}}
                    />
                </div>
                <div className="flow__destination">
                    <div className="flow__label">Производитель</div>
                    <input
                        value = {manufacturer}
                        onChange={(e) => {dispatch(orderManufacturerCh(e.target.value))}}
                        placeholder='Производитель'
                        style ={{width: '60%', height: '30px'}}
                    />
                </div>
                <div className="flow__destination">
                    <div className="flow__label">Каталожный номер</div>
                    <input
                        value = {cat}
                        onChange={(e) => {dispatch(orderCatCh(e.target.value))}}
                        placeholder='Кат. №'
                        style ={{width: '60%', height: '30px'}}
                    />
                </div>

                <div className="flow__destination">
                    <div className="flow__label"style={{marginTop:'7px'}}>Проект</div>
                    <CustomSelect
                        handleChange = {handleSelectDestination}
                        initialise = {initialise}
                        setInitialise = {setInitialise}
                        options = {projectOptions}
                        width = {'60%'}
                        height = {'20px'}
                        fontSize = {'10px'}
                        selected = {initialDestination}
                    />
                </div>
                <div className="flow__destination">
                    <div className="flow__label"style={{marginTop:'7px'}}>Адресат</div>
                    <CustomSelect
                        handleChange = {handleSelectAdressee}
                        initialise = {initialise}
                        setInitialise = {setInitialise}
                        options = {usersOptions}
                        width = {'60%'}
                        height = {'20px'}
                        fontSize = {'10px'}
                        selected = {addresseeName}

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