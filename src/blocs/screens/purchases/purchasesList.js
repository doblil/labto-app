import { useState } from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useGetMyOrdersQuery, useGetOrdersQuery } from '../../../redux/api/orderApi'
import { PurchasesItem } from './purchasesItem'


import '../../../sass/sassTemplates/menu.scss'


export const PurchasesList = (props) => {
    const {status} = props;
  
    const {data, isLoading, isError} = useGetOrdersQuery(status);
    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav(status)
    }, [])
    let content = <></>
    
    
    if(isLoading){
        content = <h5>Загрузка заказов...</h5>
    }
    if(isError){
        content = <h5>Не удается найти ваши заказы</h5>
    }
    if(!data?.orders?.length){
        content = <h5>Похоже, в данной категории нет заяввок</h5>
    }
    if(data && data?.orders?.length){
        content = data.orders.map (item=> {
            const {fromDate, name, manufacturer, cat, text, status, uniqueId, messages, _id, ownerName, archive} = item
            return <PurchasesItem
                ownerName = {ownerName}
                target = {_id}
                fromDate = {fromDate}
                name = {name}
                manufacturer = {manufacturer}
                cat = {cat}
                text = {text}
                status = {status}
                messages = {messages}
                key = {uniqueId}
                uniqueId = {uniqueId}
                archive = {archive}
            />
        })
    }


	return(
        <>
            <h4>Адресованные мне</h4>
            
            <div className="profile__parameter overflow">
                <div className="profile__value profile__value_header">от</div>
                <div className="profile__value profile__value_header">№ заказа</div>
                <div className="profile__value profile__value_name profile__value_header">наименование</div>
                <div className="profile__value profile__value_text profile__value_header">текст</div>
                <div className="profile__value profile__value_header">статус</div>
                <div className="profile__value profile__value_header"></div>
            </div>            
            <div className="overflow" style={{height: 'calc(100% - 85px)'}}>
                {content}
            </div> 
                
        </>
    )
}