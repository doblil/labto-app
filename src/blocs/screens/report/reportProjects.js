import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { useProjectReportMutation } from '../../../redux/api/reportApi'
import { sMessageCh } from '../../../redux/store/sMessageSlice'
import { stringifyDate, stryngifyType } from '../../../services/services'
import { CustomSelect } from '../../customSelect/customSelect'
import { ReportColumnItem, ReportReagItem } from './reportItem'
import { ReportTitleItem } from './reportTitleItem'

const  ReagentTable = (props) =>{
    const {isSuccess, data, current, project, startDate, endDate} = props;
    
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
        <div className="filter__print" onClick={handlePrint}> <img src="icons/printer_white.svg" alt="printer" /></div>
        <div ref={printRef}>
            {/* ЭТО НАДО СДЕЛАТЬ ПО-ЧЕЛОВЕЧЕСКИ */}
        
            <div className="report__title">
                <div className="report__title-wrap">
                    <ReportTitleItem descr = "Отчет по проекту" value = {project.name}/>
                    <ReportTitleItem descr = "за период" value = {`c ${stringifyDate(startDate)} по ${stringifyDate(endDate)}`}/>
                    <ReportTitleItem descr = "критерий" value = {stryngifyType(current)}/>
                    <ReportTitleItem descr = "содержит" value = {`${summary.count} пунктов`}/>
                    <ReportTitleItem descr = "с не указанной стоимостью" value = {`${summary.countWOPrice} пунктов`}/>
                    <ReportTitleItem descr = "Приблизительная стоимость :" value = {`${summary.totalPrice} руб`}/>
                </div>
                <div className="report__logo"><img src="icons/report_logo.svg" alt="logo" /></div>

            </div>

            
            {/* .  */}
            <table  className="table__wrap"> 
            <thead>     
                <tr>
                    <th>№</th>
                    <th>дата</th>
                    <th>Пользователь</th>
                    <th style={{minWidth:'120px'}}>Анализ</th>
                    <th>Вещество</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {isSuccess && data?.resultReags?.filter(item => item.type === current).map((item, index) => {
                    const {itemId, date, userName, test, name, quan, units, price} = item;

                   return <ReportReagItem
                        index = {index}
                        key = {index}
                        date = {date}
                        userName = {userName}
                        test = {test}
                        name = {name}
                        quan = {quan}
                        units = {units}
                        price = {price}
                    />
                })}

            </tbody>
            
        </table>
        </div>
        
    </>
    
    )
} 

const ColumnTable = (props) => {
    const {isSuccess, data,  startDate, endDate, project} = props;

    const printRef = useRef(null)
    const [printPrep, setPrintPrep] = useState(true)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        setPrintPrep(true)
        const p = new Promise((resolve) => {
            setTimeout(() => {
                setPrintPrep(true)
                print();
                resolve(false)
            }, 1000);
        })

        p.then((data) => {
            setPrintPrep(data)
        })
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

        {/* ЭТО НАДО СДЕЛАТЬ ПО-ЧЕЛОВЕЧЕСКИ */}
        
        <div className="report__title">
            <div className="report__title-wrap">
                <ReportTitleItem descr = "Отчет по проекту (ВЭЖХ / ГХ)" value = {project.name}/>
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

        
        {/* .  */}

        
        <table table className="table__wrap"> 
            <thead>     
                <tr>
                    <th>№</th>
                    <th>Период</th>
                    <th>Пользователь</th>
                    <th style={{minWidth:'120px'}}>Анализ</th>
                    <th>Колонка</th>
                    <th>Тип</th>
                    <th>Инжекций</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {isSuccess &&  data?.resultColumns?.map((item, index) => {
                    const {itemId, type, sn, name, userName, countInj, test, fromDate, toDate, price} = item;
                    return <ReportColumnItem
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
                    />
                })}

            </tbody>
            
        </table>
    </div>
        </>
        
    )
}

export const ReportProjects = (props) => {
    const [initialise, setInitialise] = useState(false)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [project, setProject] = useState({
        name: '',
        code: '',
    })
    const [current, setCurrent] = useState('reag') // 'reag' | 'rs' | 'subst' | 'column' 

    //start printing logic
    

    

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('project')
    }, [setActiveNav])

    const {projects} = useSelector(state => state.project); 
    const dispatch = useDispatch();

    const [ createReport, {data, isLoading, isSuccess}] = useProjectReportMutation();

    const handleCreateReport = () => {
        if (isLoading) return dispatch(sMessageCh('Дождитесь загрузки предыдущего отчета'));
        if (!endDate || !startDate || !project.code) return dispatch(sMessageCh('Заполните все поля формы!'));
        createReport({startDate, endDate, project});
    }


    const handleSelectProject = (target) => {
        setProject(target.value)
    }

    const projectOptions = projects.map(item => {
        return { value: {code: item.code, name: item.name}, label: `${item.code}, ${item.name}`}
    });

    const handleActive = (v) => {
        if(v === current) return "filter__item filter__item_active"
        return "filter__item"
    }

    
    


    return(
        <div className="report">
            <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
                <h5 style={{marginBottom:'30px'}}>Задайте период и интересующий проект</h5>

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
                            <div className="filter__label">Проект</div>
                            <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleSelectProject}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'250px'}
                                options = {projectOptions}
                            /> 
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
                
			 	{(data?.resultReags && current === 'column') && <ColumnTable 
                    data = {data} 
                    isSuccess = {isSuccess} 
                    current = {current}
                    startDate = {startDate}
                    endDate = {endDate}
                    project = {project}
                    
                />}
			 	{(data?.resultReags && current !== 'column') && <ReagentTable 
                    data = {data} 
                    isSuccess = {isSuccess} 
                    current = {current}
                    startDate = {startDate}
                    endDate = {endDate}
                    project = {project}
                    
                />}
                {isLoading && <div className='report__title' style={{justifyContent:'start'}}> <div className="spinner"></div><p>Загрузка отчета...</p></div>}
                
			</div>
        </div>
    )
  }