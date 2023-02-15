import { useState } from "react";
import { useSelector } from "react-redux";
import { useRedirectOrderMutation } from "../../../redux/api/orderApi";
import { useChangeCredentialsMutation } from "../../../redux/api/userApi";
import { sMessageCh } from "../../../redux/store/sMessageSlice";
import { stringifyDate, stringifyOrderStatus } from "../../../services/services";
import { CustomSelect } from "../../customSelect/customSelect";


export const RedirectForm = (props) => {
    const {allUsers} = useSelector(state => state.global);
    const {userId} = useSelector (state => state.auth)
    const {name, uniqueId, fromDate, ownerName, status, setShowRedirectForm, id} = props
    const [newAdressee,  setNewAdressee] = useState(null);

    const [redirectOrder, {isLoading}] = useRedirectOrderMutation();


    const usersOptions = allUsers.filter(item => item._id !== userId).map(item => {
        return { value: item._id, label: `${item.name}, ${item.position}`}
    })


    const handleCancel = () => {
        setShowRedirectForm(false);
        setNewAdressee(null)
    }

    const handleSelectAdressee = (target) => {
        setNewAdressee(target.value)
        console.log(newAdressee)
    }

    const handleRedirect = async () => {
        if(!newAdressee || isLoading) return
        
        try {
            const target = uniqueId
            const targetUser = newAdressee
            await redirectOrder({target, targetUser}).unwrap();
            handleCancel();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
             <div className="overlay">
                <div className="overlay__window">
                    <div className="close" onClick={handleCancel}></div>
                    <div className="overlay__heading">Перенаправить заказ другому сотруднику
                    </div>
                    <br />
                    <div className="confirm__text" style={{marginBottom:'6px'}}> 
                        Заказ № {uniqueId} от {stringifyDate(fromDate)} <br /> {name} <br /> Заказчик: {ownerName} <br /> Статус: {stringifyOrderStatus(status)}
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label"style={{marginTop:'6px'}}>Новый адресат</div>
                        <CustomSelect
                            handleChange = {handleSelectAdressee}
                            options = {usersOptions}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {newAdressee}
                        />
                    </div>

                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn" onClick={handleRedirect}>Изменить</button>
                        <button className="btn flow__btn" onClick={handleCancel}>Отменить</button>
                    </div>
                </div>
            </div>
        </>
    )
}