import { SVGstar } from '../../../../../svg/svg'
import { ColumnItem } from './columnItem'


export const ColumnTable = (props) => {
return(
        <table className="table__wrap"> 

        <thead>     
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Серийный номер</th>
                <th>Основной проект</th>
            </tr>
        </thead>

        <tbody>
            <tr className="table__row table__row_active">
                <td className="table__item">4545</td>
                <td className="table__item">
                    <SVGstar style={{
                        fill: `${props.activeItem ? "white" : "#ffb027"}`,
                        position: 'absolute',
                        top: '9px',
                        left: '-9px'
                    }}/>
                    <span className="table__name">колонка</span> 
                    <br /> 
                    <span className="prep__producer">Тут имя производителя | 264724672462</span>
                </td>
                <td className="table__item">fd843834</td>
                <td className="table__item">Диклофенак </td>
            </tr>
        </tbody>

    </table>
    )
}