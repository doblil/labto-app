import { SVGstar } from "../../../svg/svg"

export const PrepReagItem = (props) => {
  return(
    <tr className={props.active ? "table__row table__row_active" : "table__row"}>
        <td className="table__item">92147</td>
        <td className="table__item">
			{props.favorite && <SVGstar style={{
				fill: `${props.active ? "white" : "#ffb027"}`,
				position: 'absolute',
				top: '9px',
				left: '-9px'
			}}/>}
			<span className="table__name">Муравьиная кислота</span> 
			<br /> 
			<span className="prep__producer">Нева Реактив | ГОСТ 4166-76</span>
        </td>
        <td className="table__item">1388/H10</td>
        <td className="table__item">64-18-6</td>
        <td className="table__item">70 мл</td>
        <td className="table__item">35%</td>
        <td className="table__item">12.12.2032</td>
    </tr>
)
}