import { stringifyDate, stringifyOrderStatus } from '../../../../services/sevices'


export const OrderItem = (props) => {
    
    const {name, status, fromDate, manufacturer, cat, text} = props
    
    return (
        <>        
            <div className="profile__item">
                <div className="profile__value ">{stringifyDate(fromDate)}</div>
                <div className="profile__value profile__value_name"> <span>{name}</span> <br /> {manufacturer} <br /> {cat}</div>
                <div className="profile__value profile__value_text overflow"  style={{maxHeight:'125px'}}>
                    <p><span>Вы:</span> „{text}“</p>
                    <br />
                    <p style={{fontWeight:'700', backgroundColor:'white', padding:'5px'}}>„Нет“</p>

                    <br />
                    <div className="profile__wrap">
                        <textarea  type="text" class="flow__input-text" placeholder="Введите комментарий" style={{width:'90%'}}>Почему?</textarea> <button className='btn' style={{width:'52px',height:'36px', backgroundColor:'#00a0a0',marginRight:'7px', marginLeft:'7px', fontSize:'11px'}}> <img src="icons/send.svg" alt="send" /> </button>
                    </div>
                </div>
                <div className="profile__value profile__value_border">{stringifyOrderStatus(status)}</div>
                <div className="profile__wrap">
                    {status === "canceled" && <div className="profile__select">Удалить</div>}
                    {status === "сompleted" && <div className="profile__select">Подтвердить</div>}
                    <div className="profile__select" style={{marginLeft:'0'}}>+Kомментарий</div> 
                </div>        
            </div>
            {/* <div className="profile__messages">
                <span>Cообщения</span>
            </div>  */}
        </>
        
    )
}