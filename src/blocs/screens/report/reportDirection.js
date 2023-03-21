import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom'
import { useDirectionReportMutation } from '../../../redux/api/reportApi';
import { sMessageCh } from '../../../redux/store/sMessageSlice';
import { ReportColumnDirectionItem, ReportReagDirectionItem } from './reportItem';


const  ReagentTable = (props) =>{
    const {isSuccess, data, current} = props;
    return(
        <table table className="table__wrap"> 
                  <thead>     
                      <tr>
                        <th>№</th>
                        <th>дата</th>
                        <th>Пользователь</th>
                        <th style={{minWidth:'120px'}}>Проект</th>
                        <th style={{minWidth:'120px'}}>Анализ</th>
                        <th>Вещество</th>
                        <th>Количество</th>
                        <th>Стоимость</th>
                      </tr>
                  </thead>
                <tbody>
                {isSuccess && data?.resultReags?.filter(item => item.type === current).map((item, index) => {
                    const {name, userName, quan, units, test, date, price, destination,} = item;

                   return <ReportReagDirectionItem
                        index = {index}
                        key = {index}
                        date = {date}
                        userName = {userName}
                        test = {test}
                        name = {name}
                        quan = {quan}
                        units = {units}
                        price = {price}
                        destination = {destination}
                    />
                })}
                </tbody>
                
              </table>
    )
}

const ColumnTable = (props) => {
    const {isSuccess, data} = props;
    return(
        <>
        <h6>Стоимость из рассчета pecypca колонки 40000 инжекций</h6>
        <table table className="table__wrap"> 
            <thead>     
                <tr>
                    <th>№</th>
                    <th>Период</th>
                    <th>Пользователь</th>
                    <th style={{minWidth:'120px'}}>Проект</th>
                    <th style={{minWidth:'120px'}}>Анализ</th>
                    <th>Колонка</th>
                    <th>Тип</th>
                    <th>Инжекций</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {isSuccess &&  data?.resultColumns?.map((item, index) => {
                    const {itemId, type, sn, name, userName, countInj, test, fromDate, toDate, price, destination} = item;
                    return <ReportColumnDirectionItem
                        itemId = {itemId}
                        key = {itemId}
                        type = {type}
                        sn = {sn}
                        name = {name}
                        userName = {userName}
                        countInj = {countInj}
                        test = {test}
                        fromDate = {fromDate}
                        toDate = {toDate}
                        price = {price}
                        index = {index}
                        destination = {destination}
                    />
                })}

            </tbody>
            
        </table>
    </>
    )
}

export const ReportDirection = (props) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [direction, setDirection] = useState('')
    const [current, setCurrent] = useState('reag')

    const dispatch = useDispatch()

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('direction')
    }, [setActiveNav])


    const [createReport, {data, isLoading, isSuccess}] = useDirectionReportMutation()
    
    const {allDirections} = useSelector(state => state.global)
    
    const handleCreateReport = () => {
        if (isLoading) return dispatch(sMessageCh('Дождитесь загрузки предыдущего отчета'));
        console.log({startDate, endDate, direction});
        if (!endDate || !startDate || !direction) return dispatch(sMessageCh('Заполните все поля формы!'));
        console.log('click trigger')
        createReport({startDate, endDate, direction});
    }

    const handleActive = (v) => {
        if(v === current) return "filter__item filter__item_active"
        return "filter__item"
    }

    return(
        <div className="report">
        <div className="filter__print"><img src="icons/printer_white.svg" alt="printer" /></div>
        <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
            <h5 style={{marginBottom:'30px'}}>Задайте период и интересующий отдел</h5>

            <div className="filter__wrap" style={{marginBottom:'5px'}}>
                <div className="filter__inputs" >
                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                        <div className="filter__label">От (дд.мм.гггг 00:00)</div>
                        <input 
                            type="date" 
                            className="filter__input" 
                            style={{height:'38px'}}
                            onChange = {(e) => {setStartDate(e.target.value)}}
                            value = {startDate}
                        />
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                        <div className="filter__label">До (дд.мм.гггг 00:00)</div>

                        <input 
                            type="date" 
                            className="filter__input" 
                            style={{height:'38px'}}
                            onChange = {(e) => {setEndDate(e.target.value)}}
                            value = {endDate}
                        />
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}} >
                        <div className="filter__label">Отдел</div>
                        <select value={direction} style={{width:'255px', height:'38px'}} onChange={(e) => {setDirection(e.target.value)}}>
                            <option value=""></option>
                            {allDirections.map(item => {
                                return <option key = {item.value} value={item.value}> {item.label}</option>
                            })} 
                            
                        </select>
                    </div>
                </div>
                <button className="btn" style={{height:'38px'}} onClick={handleCreateReport}>Создать отчет</button>  
            </div>

            <div className="filter__wrap" style={{marginTop:'5px', marginBottom:'10px', marginRight:'120px'}}>
                {(isSuccess && data?.resultReags && data.resultColumns) && <><div 
                        className = {handleActive('reag')}  
                        style={{marginTop:'5px'}}
                        onClick = {() => {setCurrent('reag')}}
                    >Реактивы</div>
                    <div 
                        className = {handleActive('rs')}  
                        style={{marginTop:'5px'}}
                        onClick = {() => {setCurrent('rs')}}
                    >Стандарты</div>
                    <div 
                        className = {handleActive('subst')}  
                        style={{marginTop:'5px'}}
                        onClick = {() => {setCurrent('subst')}}
                    >Субстанции</div>
                    <div 
                        className = {handleActive('column')}  
                        style={{marginTop:'5px'}}
                        onClick = {() => {setCurrent('column')}}
                >ВЭЖХ/ГХ</div> </>}
            </div>
            
        </div>

        <div className="history overflow overflow__mt50"  style={{height: '60vh'}}>
                {(data?.resultReags && current === 'column') && <ColumnTable data = {data} isSuccess = {isSuccess} current = {current}/>}
			 	{(data?.resultReags && current !== 'column') && <ReagentTable data = {data} isSuccess = {isSuccess} current = {current}/>}
                {isLoading && <div className='report__title' style={{justifyContent:'start'}}> <img src="icons/loading.svg" alt="loading" className='report__load-img'/>Загрузка отчета...</div>}
        </div>
    </div>
    )
  }

