import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import { useDirectionReportMutation } from '../../../redux/api/reportApi';
import { sMessageCh } from '../../../redux/store/sMessageSlice';
import { stringifyDate, stryngifyType } from '../../../services/services';
import { ReportColumnDirectionItem, ReportReagDirectionItem } from './reportItem';
import { ReportTitleItem } from './reportTitleItem';


const  ReagentTable = (props) =>{
    const {isSuccess, data, current, direction, startDate, endDate} = props;
    const printRef = useRef(null)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        print()
    }

    const handleSummary = (data = []) => {
        let totalPrice;
        const count = data.length;
        const countWPrice = data.filter(item => item.price).length;
        const countWOPrice = Math.round(count - countWPrice)
        if(data.filter(item => item.price).length){
            totalPrice = data.filter(item => item.price).map(item => item.price).reduce((a, b) => a+b)
        } else {
            totalPrice = 0
        }

        return {
            count,
            totalPrice,
            countWPrice,
            countWOPrice}
    }

    const summary = handleSummary(data.resultReags.filter(item => item.type === current))

    return(
        <>
            {isSuccess && <div className="filter__print" onClick={handlePrint}> <img src="icons/printer_white.svg" alt="printer" /></div>}
            <div ref={printRef}>
                <div className="report__title">
                    <div className="report__title-wrap">
                        <ReportTitleItem descr = "Отчет по отделу" value = {direction}/>
                        <ReportTitleItem descr = "за период" value = {`c ${stringifyDate(startDate)} по ${stringifyDate(endDate)}`}/>
                        <ReportTitleItem descr = "критерий" value = {stryngifyType(current)}/>
                        <ReportTitleItem descr = "содержит" value = {`${summary.count} пунктов`}/>
                        <ReportTitleItem descr = "с не указанной стоимостью" value = {`${summary.countWOPrice} пунктов`}/>
                        <ReportTitleItem descr = "Приблизительная стоимость :" value = {`${summary.totalPrice} руб`}/>
                    </div>
                    <div className="report__logo"><img src="icons/report_logo.svg" alt="logo" /></div>
                </div>
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
            </div>
           
        </>
    )
}

const ColumnTable = (props) => {
    const {isSuccess, data, startDate, endDate, direction} = props;
    
    const printRef = useRef(null)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        print();
    }
    
    const handleSummary = (data = []) => {
        let totalInj, totalPrice;
        const count = data.length;
        const countWPrice = data.filter(item => item.price).length;
        const countWOPrice = Math.round(count - countWPrice)
        if(data.filter(item => item.price).length){
            totalPrice = data.filter(item => item.price).map(item => item.price).reduce((a, b) => a+b)
        } else {
            totalPrice = 0
        }
        if(data.filter(item => item.countInj).length){
            totalInj = data.filter(item => item.countInj).map(item => item.countInj).reduce((a,b)=> a+b);
        } else {
            totalInj = 0
        }
        
        return {
            count,
            totalPrice,
            totalInj,
            countWPrice,
            countWOPrice}
    }

    const summary = handleSummary(data.resultColumns)
    
    return(
        <>
        <div className="filter__print" onClick={handlePrint}><img src="icons/printer_white.svg" alt="printer" /></div>
        <div ref={printRef}>
            <div className="report__title">
                <div className="report__title-wrap">
                    <ReportTitleItem descr = "Отчет по отделу (ВЭЖХ / ГХ)" value = {direction}/>
                    <ReportTitleItem descr = "за период" value = {`c ${stringifyDate(startDate)} по ${stringifyDate(endDate)}`}/>
                    <ReportTitleItem descr = "содержит" value = {`${summary.count} пунктов`}/>
                    <ReportTitleItem descr = "с не указанной стоимостью" value = {`${summary.countWOPrice} пунктов`}/>
                    <ReportTitleItem descr = "Количество инжекций за указанный период:" value = {`${summary.totalInj} инжекций`}/>
                    <ReportTitleItem descr = "Приблизительная стоимость инжекций:" value = {`${summary.totalPrice} руб`}/>
                    
                        <h6>*Стоимость из рассчета pecypca колонки 40000 инжекций</h6>
                    </div>
                    <div className="report__title-right">
                        <div className="report__logo"><img src="icons/report_logo.svg" alt="logo" /></div>
                    </div>
            </div>

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

        </div>
        
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
        if (!endDate || !startDate || !direction) return dispatch(sMessageCh('Заполните все поля формы!'));
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
                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}}>
                        <div className="filter__label">От (дд.мм.гггг 00:00)</div>
                        <input 
                            type="date" 
                            className="filter__input" 
                            style={{height:'38px'}}
                            onChange = {(e) => {setStartDate(e.target.value)}}
                            value = {startDate}
                        />
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}}>
                        <div className="filter__label">До (дд.мм.гггг 00:00)</div>

                        <input 
                            type="date" 
                            className="filter__input" 
                            style={{height:'38px'}}
                            onChange = {(e) => {setEndDate(e.target.value)}}
                            value = {endDate}
                        />
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'15px'}} >
                        <div className="filter__label">Отдел</div>
                        <select value={direction} style={{width:'250px', height:'38px'}} onChange={(e) => {setDirection(e.target.value)}}>
                            <option value=""></option>
                            {allDirections.map(item => {
                                return <option key = {item.value} value={item.value}> {item.label}</option>
                            })} 
                            
                        </select>
                    </div>
                </div>
                <button className="btn" style={{height:'38px'}} onClick={handleCreateReport}>Создать отчет</button>  
            </div>

            <div className="filter__wrap" style={{marginBottom:'5px'}}>
                    <div className="filter__item filter__item_mini">
                        за последнюю неделю
                    </div>
                    <div className="filter__item filter__item_mini">
                        за последний месяц
                    </div>
                    <div className="filter__item filter__item_mini">
                        с 1 января
                    </div>
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

        <div className="history overflow overflow__mt50"  style={{height:'calc(100% - 180px)'}}>
                {(data?.resultReags && current === 'column') && <ColumnTable 
                    data = {data} 
                    isSuccess = {isSuccess} 
                    current = {current}
                    startDate = {startDate}
                    endDate = {endDate}
                    direction = {direction}
                />}
			 	{(data?.resultReags && current !== 'column') && <ReagentTable 
                    data = {data} 
                    isSuccess = {isSuccess} 
                    current = {current}
                    startDate = {startDate}
                    endDate = {endDate}
                    direction = {direction}
                />}
                {isLoading && <div className='report__title' style={{justifyContent:'start'}}> <div className="spinner"></div>Загрузка отчета...</div>}
        </div>
    </div>
    )
  }

