
import { useSelector } from "react-redux"
import { stringifyDate } from "../../../../services/sevices"

export const HistoryOfUsage = (props) => {
    const {setShowHistory} = props
    const {units, itemId, name, cat, lot, inUse} = useSelector(state=> state.activeReagent)

    if(!props.reagent){
        return <></>
    }

    if(!inUse){
        return<></>
    }
    
    const content = inUse.map((item) =>{
        return(
            <tr className="table__row">
                <td className="table__item">{stringifyDate(Date.parse(item.date), true)}</td>
                <td className="table__item">{item.destination}</td>
                <td className="table__item">{item.test}</td>
                <td className="table__item">{item.quan} {units}</td>
                <td className="table__item">{item.name}</td>
            </tr>
        )
    })
    console.log(props.reagent)

    return(
        <table className="table__wrap table__wrap_low">
            <div className="close close_big" onClick={()=>{setShowHistory(false)}}></div>
        
            <thead  className="table__shadow">
                <tr>
                    <th>Дата</th>
                    <th>Статья</th>
                    <th>Анализ</th>
                    <th>Расход</th>
                    <th>Ответственный</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
    
        </table>
    )
}