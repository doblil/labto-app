import { useSelector } from "react-redux";
import { SVGstar } from "../../../../svg/svg"

export const PrepReagItem = (props) => {
  
  const {favorite} = useSelector(state => state.auth)
  const { itemId, name, CAS, cat, lot, manufacturer, toDate, units, restUnits, container, _id } = props.item;



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
			<span className="prep__producer">{manufacturer} | {cat}</span>
        </td>
        <td className="table__item">{lot}</td>
        <td className="table__item">{CAS}</td>
        <td className="table__item">{restUnits} {units}</td>
        <td className="table__item">{Math.floor(restUnits/container*100)}%</td>
        <td className="table__item">{toDate}</td>
    </tr>
)
}