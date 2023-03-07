export const ReportReagItem = (props) => {
    
    const {index, date, test, name, quan, price, userName, units} = props

    return(
        <tr>
            <td>{index}</td>
            <td>{date}</td>
            <td>{userName}</td>
            <td style={{minWidth:'120px'}}>{test}</td>
            <td>{name}</td>
            <td>{quan} {units}</td>
            <td>{price} руб</td>
        </tr>
    )
}
export const ReportColumnItem = (props) => {
    const {itemId, type, sn, name, userName, countInj, test, fromDate, toDate, price, index} = props
    
    const stringifyType = (type) => {
        switch (type) {
            case 'hplc': 
                return '(ВЭЖХ)';
            case 'gc': 
                return '(ГХ)';
            default:
                return '';
        }
    }

    return(
        <tr>
            <td>{index}</td>
            <td>{fromDate} - {toDate}</td>
            <td>{userName}</td>
            <td style={{minWidth:'120px'}}>{test}</td>
            <td>ID: {itemId}, {name}, {sn}</td>
            <td>{stringifyType(type)}</td>
            <td>{countInj}</td>
            <td>{price}</td>
        </tr>
    )
}