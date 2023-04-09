import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { stringifyDate } from "../../../../services/services.js";


export const TrainingList = (props) => {
    
    const printRef = useRef(null)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        print()
    }
    

    const { trainingList, itemId, eqName, currentSop, setShowTrainingList, sopVersions } = props;
    const [version, setVersion] = useState(currentSop.version)

    const handleFilterList = (arr) => {
      if (!version || version === 'all') return arr
      return arr.filter(item => item.sopVersion === version)
    }


    let content = handleFilterList(trainingList)
      .map((item, index) => {
        const {date, sopVersion, userName, trainer: {userName: trainerName}} = item
        return(
            <>         
                <tr key={index} className="table__row">
                    <td style={{fontSize: '10px'}} className="table__item"> {stringifyDate(date)}</td>
                    <td style={{fontSize: '10px'}} className="table__item">{sopVersion} версия</td>
                    <td style={{fontSize: '10px'}} className="table__item">{userName}</td>
                    <td style={{fontSize: '10px'}} className="table__item">{trainerName}</td>
                </tr> 
            </>
        )
    }).reverse()
    if(!trainingList.length){
        content = <h6>Здесь пока что ничего нет...</h6>
    }



    return (
        <>
            <div className="overlay">
                <div className="overlay__window" style={{width: '90vw', maxWidth: 'none'}}>
                    <div className="close close_big" style={{top: '5px', right: '5px'}} onClick={() => {setShowTrainingList(false)}}></div>
                    <div className="print" onClick={handlePrint} style={{top: '5px', right: '35px'}}></div>
                    <div className="flow__destination">
                        <div className="overlay__heading" style={{justifyContent:'left', width:'auto'}}>Версия СОП
                            <select
                                placeholder='Выберите версию СОП'
                                style ={{width: '200px', height: '27px', marginLeft:'10px'}}
                                onChange = {(e) => {setVersion(e.target.value)}}
                                value={version}
                            > 
                                {sopVersions.map(item=>{
                                    return <option  value={item} key={item}>Версия {item}</option>
                                })}
                                <option  value={'all'}>Все</option>
                            </select>
                        </div>

                            </div>
                        <div className="overflow overflow__mt50" style={{height: '70vh', width:'100%'}}>
                            <div className="" ref={printRef}>
                                <div className="overlay__heading" style={{position: 'sticky'}}> 
                                    Список ознакомления с СОП "{currentSop.sopName}", версия {version} для оборудования: "{eqName}", ID:{itemId}
                                </div>
                                <table className="table__wrap table__wrap_low" >

                                <thead  className="table__shadow">
                                    <tr>
                                        <th style={{fontSize: '12px'}} >Дата</th>
                                        <th style={{fontSize: '12px'}} >Версия СОП</th>
                                        <th style={{fontSize: '12px'}} >Пользователь</th>
                                        <th style={{fontSize: '12px'}} >Ответственный</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>

                                </table>
                            </div>
                            
                        </div> 
            
                </div>
            </div>
        </>
    )
}