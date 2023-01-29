import { useState } from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useGetMyOrdersQuery } from '../../../../redux/api/orderApi'



import '../../../../sass/sassTemplates/menu.scss'
import { OrderForm } from '../../../orderForm/orderForm'
import { OrderItem } from './orderItem'


export const Orders = () => {
    const [showOrderForm, setShowOrderForm] = useState(false)
    const {data, isLoading, isError} = useGetMyOrdersQuery();
	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('orders')
    }, [setActiveNav])
    let content = <></>
    
    
    if(isLoading){
        content = <h5>Загрузка заказов...</h5>
    }
    if(isError){
        content = <h5>Не удается найти ваши заказы</h5>
    }
    if(!data?.myOrders?.length){
        content = <h5>Похоже, вы не создали ни одного зааказа</h5>
    }
    if(data && data?.myOrders?.length){
        content = data.myOrders.map (item=> {
            const {fromDate, name, manufacturer, cat, text, status} = item
            return <OrderItem
                fromDate = {fromDate}
                name = {name}
                manufacturer = {manufacturer}
                cat = {cat}
                text = {text}
                status = {status}
            />
        })
    }


	return(
        <>
            {showOrderForm && <OrderForm setShowOrderForm = {setShowOrderForm}/>}
            <div className="history__top">
                <div className="profile__select profile__select_history" onClick={()=>setShowOrderForm(true)}>Создать заказ</div>
                <div className="profile__select profile__select_history">Активные</div>
                <div className="profile__select profile__select_history">Архив</div>
            </div>
            
            <div className="profile__parameter overflow">
                <div className="profile__value">дата</div>
                <div className="profile__value profile__value_name">наименование</div>
                <div className="profile__value profile__value_text">текст</div>
                <div className="profile__value">статус</div>
                <div className="profile__select"></div>
            </div>            
            <div className="overflow" style={{height: 'calc(100% - 200px)'}}>
                {content}
            </div> 
                
        </>
    )
}