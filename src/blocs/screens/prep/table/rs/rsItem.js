import { useSelector } from "react-redux";
import { stringifyDate, stringifyRSType } from "../../../../../services/services";
import { SVGstar } from "../../../../../svg/svg"

export const RsItem = (props) => {
  
  const {favorite} = useSelector(state => state.auth)
  const { itemId, CAS, name, standartType,  cat, lot, manufacturer, toDate, units, restUnits, container, _id } = props.item;
  const handleDateWarn = () => {
    if((Date.parse(toDate) - Date.now()) > (1000*60*60*24*10)){
      return 'table__item'
    } else {
      return 'table__item table__item_warn'
    }
  }


  return(
    <tr className={props.activeItem ? "table__row table__row_active" : "table__row"} onClick = {() => props.handleActiveItem(_id)}>
        <td className="table__item">{itemId}</td>
        <td className="table__item">
			{(favorite.includes(_id)) && <SVGstar style={{
				fill: `${props.activeItem ? "white" : "#ffb027"}`,
				position: 'absolute',
				top: '9px',
				left: '-9px'
			}}/>}
			<span className="table__name">{name}</span> 
			<br /> 
			<span className="prep__producer">{manufacturer}, cat: {cat}</span>
        </td>
        <td className="table__item">{stringifyRSType(standartType)}</td>
        <td className="table__item">{lot}</td>        
        <td className="table__item">{CAS}</td>
        <td className="table__item">{restUnits} {units}</td>
        <td className={handleDateWarn()}>{stringifyDate(Date.parse(toDate))}</td>
    </tr>
)
}