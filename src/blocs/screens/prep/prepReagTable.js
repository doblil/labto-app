import { PrepReagItem } from "./prepReagItem"
import { PrepRSItem } from "./PrepRSItem"
import { PrepSubstItem } from "./prepSubstItem"

export const PrepTable = (props) => {
    
    const data = [
        {
            itemId: 92007,
            name: "Муравьиная кислота",
            cat: '',
            lot: '',
            manufacturer: '',
            fromDate: '',
            toDate: '',
            units: '',
            restUnits: '',
            restPercent: '',
            container: '',
            passport: '',
            inUse: [],
            SDS: '',
            TDS: '',
            location: '',
            danger: [],
        },
        {
            itemId: 92007,
            name: "Муравьиная кислота",
            cat: '',
            lot: '',
            manufacturer: '',
            fromDate: '',
            toDate: '',
            units: '',
            restUnits: '',
            restPercent: '',
            container: '',
            passport: '',
            inUse: [],
            SDS: '',
            TDS: '',
            location: '',
            danger: [],
        },
        {
            itemId: 92007,
            name: "Муравьиная кислота",
            cat: '',
            lot: '',
            manufacturer: '',
            fromDate: '',
            toDate: '',
            units: '',
            restUnits: '',
            restPercent: '',
            container: '',
            passport: '',
            inUse: [],
            SDS: '',
            TDS: '',
            location: '',
            danger: [],
        },
    ]
    

const coloumns = props.coloumns.map(item => <th>item</th>)
  return(
    <table className="prep__table">
                
    <thead>
        <tr>
			{coloumns}
            <th>ID</th>
            <th>Наименование</th>
            <th>Партия</th>
            <th>CAS-№</th>
            <th>Остаток</th>
            <th>%</th>
            <th>Годен до</th>
        </tr>
    </thead>

    <tbody>
        {/* {switch (props.type) {
            case reag value:
                <>
                break;
        
            default:
                break;
        }} */}
    </tbody>

</table>
)
}