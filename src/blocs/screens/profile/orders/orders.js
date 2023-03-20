import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useGetMyOrdersQuery, useLazyGetMyOrdersQuery } from '../../../../redux/api/orderApi'
import { sassVariables } from '../../../../sass/base/variables'



import '../../../../sass/sassTemplates/menu.scss'
import { OrderForm } from '../../../orderForm/orderForm'
import { OrderItem } from './orderItem'


export const Orders = () => {
    
    const [filter, setFilter] = useState('all')
    const [showOrderForm, setShowOrderForm] = useState(false)
    const [getMyOrders, {data, isLoading, isError}] = useLazyGetMyOrdersQuery();
    
	const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('orders')
    }, [setActiveNav])
    useEffect(() => {
        getMyOrders();
    }, [])

    console.log(data)

    let content = <></>

    const handleFilter = (arr) => {  
        if (filter === 'all') return arr
        if (filter === 'active')return arr.filter(item => ['created', 'processed', 'executed', 'completed', 'reviced', 'changed',].includes(item.status))
        if (filter === 'archive') return arr.filter (item => item.archive)
    }

    const handleStyle = (status) => {
        if(status === filter) return {backgroundColor: sassVariables.mainColor, color: 'white'}
        return {color: ''}
    }

    const bottomRef = useRef(null);
	useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "nearest"});
    }, [isLoading])
    
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
        content = <>
        
        {handleFilter(data.myOrders).length ? handleFilter(data.myOrders).map (item=> {
            const {fromDate, name, manufacturer, cat, text, status, uniqueId, messages, _id} = item
            return <OrderItem
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
            />
        }) : <h5>В данной категории ничего нет</h5>}
        <div ref = {bottomRef}></div>
        </>
    }


	return(
        <>
            {showOrderForm && <OrderForm setShowOrderForm = {setShowOrderForm}/>}
            <div className="history__top">
                <div className="profile__select profile__select_history" onClick={()=>setShowOrderForm(true)}>Создать заказ</div>
                <div className="profile__select profile__select_history" style={handleStyle('all')} onClick={() => {setFilter('all')}}>Все</div>
                <div className="profile__select profile__select_history" style={handleStyle('active')} onClick={() => {setFilter('active')}}>Активные</div>
                <div className="profile__select profile__select_history" style={handleStyle('archive')} onClick={() => {setFilter('archive')}}>Архив</div>
                <div className="refresh" title='Обновить' onClick={() => {getMyOrders()}}></div>
            </div>
            
            <div className="profile__parameter overflow">
                <div className="profile__value profile__value_header">дата</div>
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