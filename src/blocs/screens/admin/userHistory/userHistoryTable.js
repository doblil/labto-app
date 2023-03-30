import { stringifyDate, stringifyHistoryAction } from "../../../../services/services";

export const UserHistoryTable = (props) => {
    const {history} = props;
    if (!history) return <h5><br /> Ошибка при загрузке истории пользователя</h5>
    if(!history.length) return <h5><br />Пользователь не совершал никаких дествий за указанный период</h5>
    return (
        <div className=" overflow overflow__mt50" style={{height:'calc(100% - 150px)'}}>
            <table table className="table__wrap"> 
                <thead>     
                    <tr>
                        <th>Дата</th>
                        <th>Действие</th>
                        <th>Наименование</th>
                        <th>Информация</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(item=>{
                        return (
                            <tr>
                                <td>{stringifyDate(item.date, true)}</td>
                                <td>{stringifyHistoryAction(item.action)}</td>
                                <td>{item.historyTarget.name} </td>
                                <td>{!!item.historyTarget.itemId && ('ID: ' + item.historyTarget.itemId)}</td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
    )
}