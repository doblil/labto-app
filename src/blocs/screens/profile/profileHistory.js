import { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useGetHistoryQuery } from '../../../redux/api/historyApi'
import '../../../sass/sassTemplates/menu.scss'
import { stringifyDate, stringifyHistoryAction } from '../../../services/sevices'


export const ProfileHistory = () => {
	
	const {data, isLoading, isSuccess} = useGetHistoryQuery();

	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('history')
    }, [setActiveNav])

	const bottomRef = useRef(null);
	useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "nearest"});
    }, [])


	let content = <></>
	if (isLoading){
		content = <h5>Загрузка</h5>
	}
	if(data && data.length === 0){
		content = <h5>Нет данных об активности</h5>
	}

	if(isSuccess && data?.history?.history && data.history?.history?.length){
		const {history} = data.history
		content = (
			 <><table table className="table__wrap"> 
              		<thead>     
                  		<tr>
							<th>Дата</th>
							<th>Действие</th>
							<th>Наименование</th>
							<th>Информация</th>
                  		</tr>
              		</thead>
            		<tbody>
						{history.map(item=>{
							return (
								<tr>
									<td>{stringifyDate(item.date, true)}</td>
									<td>{stringifyHistoryAction(item.action)}</td>
									<td>{item.historyTarget.name} </td>
									<td>{!!item.historyTarget.itemId && ('ID: ' + item.historyTarget.itemId)}</td>
								</tr>
							)
						})}
              		</tbody>
					
              </table>
			  <div className="" ref={bottomRef}></div>
			  </>
		)
	}
  
						
  	return(
        <div className="history overflow">
          
            {content}

      	</div>
    )
}