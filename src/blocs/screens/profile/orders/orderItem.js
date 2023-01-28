import { stringifyDate, stringifyOrderStatus } from '../../../../services/sevices'

export const OrderItem = (props) => {
    
    const {name, status, fromDate, manufacturer, cat, text} = props
    
    return (
        <div className="profile__item">
            <div className="profile__value profile__value_date">{stringifyDate(fromDate)}</div>
            <div className="profile__value"> <span>{name}</span> <br /> {manufacturer} <br /> {cat}</div>
            <div className="profile__value profile__value_text">{text}</div>
            <div className="profile__value profile__value_border">{stringifyOrderStatus(status)}</div>
            <div className="profile__wrap">
                <div className="profile__select">Редактировать</div>
                <div className="profile__select">Отменить</div> 
            </div>          
        </div>
    )
}