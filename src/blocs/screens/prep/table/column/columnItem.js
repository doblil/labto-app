import { useSelector } from "react-redux";
import { stringifyDate } from "../../../../../services/services";
import { SVGstar } from "../../../../../svg/svg"

export const ColumnItem = (props) => {
  
  const {favorite} = useSelector(state => state.auth)
  const {_id: target} = useSelector(state => state.activeColumn)
  const { itemId, name, sn, manufacturer, cat, mainProject, _id} = props.item;

  return(
    <tr className={_id ===  target ? "table__row table__row_active" : "table__row"} onClick = {() => props.handleActiveItem(_id)}>
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
		<td className="table__item">{sn}</td>
		<td className="table__item">{mainProject.name}</td>
	</tr>
  )
}