export const PrepReagItem = (props) => {
  return(
    <tr className={props.active ? "prep__table-row prep__table-row_active" : "prep__table-row"}>
        <td className="prep__table-item">92147</td>
        <td className="prep__table-item"><span className="prep__name">Муравьиная кислота</span> <br /> <span className="prep__producer">Нева Реактив | ГОСТ 4166-76</span></td>
        <td className="prep__table-item">1388/H10</td>
        <td className="prep__table-item">64-18-6</td>
        <td className="prep__table-item">70 мл</td>
        <td className="prep__table-item">35%</td>
        <td className="prep__table-item">12.12.2032</td>
    </tr>
)
}