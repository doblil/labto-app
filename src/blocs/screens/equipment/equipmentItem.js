import { useSelector } from "react-redux";
import { stringifyDate } from "../../../services/services";
import { SVGstar } from "../../../svg/svg"

export const EquipmentItem = (props) => {
  
  const {handleActiveItem, item, activeItem} = props

  const {favorite} = useSelector(state => state.auth)
  const { itemId, eqName, manufacturer, model, nextVerification, sn, invn,  _id } = item
    const handleDateWarn = () => {
		if((Date.parse(nextVerification) - Date.now()) > (1000*60*60)){
				return 'table__item'
		} else {
				return 'table__item table__item_warn'
		} 
    } 
    


  return(
    <tr className={activeItem ? "table__row table__row_active" : "table__row"} onClick = {() => handleActiveItem(_id)}>
        <td className="table__item">{itemId}</td>
        <td className="table__item">
			{(favorite.includes(_id)) && <SVGstar style={{
				fill: `${activeItem ? "white" : "#ffb027"}`,
				position: 'absolute',
				top: '9px',
				left: '-9px'
			}}/>}
			<span className="table__name">{eqName}</span> 
			<br /> 
			<span className="prep__producer">{manufacturer} | {model}</span>
        </td>
        <td className="table__item">{sn}</td>
        <td className="table__item">{invn}</td>
        <td className={handleDateWarn()}>{stringifyDate(Date.parse(nextVerification))}</td>
    </tr>
)
}