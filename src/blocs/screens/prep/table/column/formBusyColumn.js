import { useSelector } from "react-redux";

export const FormBusyColumn = (props) => {
    const { current, setShowReturnForm} = props;
    const {userId} = useSelector(state => state.auth)  

    const handleOpenReturn = () => {
        setShowReturnForm(true);
    }

    return (
        <div className="flow">
        <div className="flow__heading" style={{marginBottom:'16spx'}}>Колонка в использовании</div>

        <div className="flow__destination" style={{fontSize:'13px'}}>
            Текущий пользователь: {current.userName}
        </div>
        <div className="flow__destination" style={{fontSize:'13px'}}>
            Проект: {current.destination.name}
        </div>
        <div className="flow__btn-wrap">
            {(userId === current.userId) && 
            <button 
                    className="btn flow__btn" 
                    onClick={handleOpenReturn}
                    children= 'Завершить использование'
                    // disabled = {!(date && test && destination && name && quan )}
            />
            }
        </div>
    </div>
    )
}