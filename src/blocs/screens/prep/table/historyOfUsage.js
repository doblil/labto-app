
import { useSelector } from "react-redux"
import { stringifyDate } from "../../../../services/sevices"

export const HistoryOfUsage = (props) => {
    
    const {units, itemId, name, cat, lot, inUse} = useSelector(state=> state.activeReagent)

    console.log(props.reagent)
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
        <table className="table__wrap">
                
        <thead>
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