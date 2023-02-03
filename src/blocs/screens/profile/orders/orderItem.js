import { stringifyDate, stringifyOrderStatus } from '../../../../services/services'


export const OrderItem = (props) => {
    
    const {name, status, fromDate, manufacturer, cat, text} = props
    
    return (
        <>        
            <div className="profile__item">
                <div className="profile__value ">{stringifyDate(fromDate)}</div>
                <div className="profile__value profile__value_name"> <span>{name}</span> <br /> {manufacturer} <br /> {cat}</div>
                <div className="profile__value profile__value_text">{text}</div>
                <div className="profile__value profile__value_border">{stringifyOrderStatus(status)}</div>
                <div className="profile__wrap">
                    {status === "canceled" && <div className="profile__select">Удалить</div>}
                    {status === "сompleted" && <div className="profile__select">Подтвердить</div>}
                    <div className="profile__select">+Kомментарий</div> 
                </div>        
            </div>
            {/* <div className="profile__messages">
                <span>Cообщения</span>
            </div>  */}
        </>
        
    )
}