import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'


export const ProfileHistory = () => {
  
	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('history')
    }, [setActiveNav])
  
  	return(
        <div className="history">
          <div className="history__top">
            <div className="profile__select profile__select_history">Списания</div>
            <div className="profile__select profile__select_history">Внесения</div>
            <div className="profile__select profile__select_history">Перенос в карантин</div>
            <div className="profile__select profile__select_history">Удаление</div>
          </div>
          <div className="overflow">
            	<table table className="table__wrap"> 

              		<thead>     
                  		<tr>
							<th>Дата</th>
							<th>Наименование</th>
							<th>Количество</th>
                  		</tr>
              		</thead>

            		<tbody>
						<tr>
							<td>lalal</td>
							<td>lalalla</td>
							<td>lala</td>
						</tr>

						<tr>
							<td>lalal</td>
							<td>lalalla</td>
							<td>lala</td>
						</tr>

						<tr>
							<td>lalal</td>
							<td>lalalla</td>
							<td>lala</td>
						</tr>

						<tr>
							<td>lalal</td>
							<td>lalalla</td>
							<td>lala</td>
						</tr>
              		</tbody>

              </table>
          </div>

      	</div>
    )
}