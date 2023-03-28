import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { stringifyDate } from "../../../../../services/services";
import '../column/column.scss'

export const ColumnHistory = (props) => {
    
    const printRef = useRef(null)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        print()
    }

    const {inUse, itemId, sn, cat, name, setShowHistory} = props;
    let content = inUse
      .map((item, index) => {
        const {fromDate, toDate, restSolvent, comment, userName, destination, countInj, test, mobilePhase,} = item
        return(
            <>         
                <tr key={index} className="table__row">
                    <td style={{fontSize: '13px'}} className="table__item"> {stringifyDate(fromDate)} -- {stringifyDate(toDate)}<br/><br />{userName}</td>
                    <td style={{fontSize: '13px'}} className="table__item">{destination?.code}<br/><br />{destination?.name}</td>
                    <td style={{fontSize: '13px'}} className="table__item">{test}, <br/><br />{countInj} инжекций</td>
                    <td style={{fontSize: '13px'}} className="table__item">{mobilePhase}</td>
                    <td style={{fontSize: '13px'}} className="table__item">{restSolvent}</td>
                    <td style={{fontSize: '13px'}} className="table__item">{comment}</td>
                </tr> 
            </>
        )
    }).reverse()
    if(!inUse.length){
        content = <h6>Здесь пока что ничего нет...</h6>
    }



    return (
        <>
            <div className="overlay">
                <div className="overlay__window" style={{width: '90vw', maxWidth: 'none'}}>
                    <div className="close close_big" style={{top: '5px', right: '5px'}} onClick={() => {setShowHistory(false)}}></div>
                    <div className="print" onClick={handlePrint} style={{top: '5px', right: '35px'}}></div>

                        <div className="overflow overflow__mt50" style={{height: '70vh', width:'100%'}}>
                            <div className="" ref={printRef}>
                                <div className="overlay__heading" style={{position: 'sticky'}}> 
                                    История использования колонки ID: <b>{itemId}</b>,   <b>{name}</b>,   серийный номер: <b>{sn}</b>,   каталожный номер: <b>{cat}</b> 
                                </div>
                                <table className="table__wrap table__wrap_low" >

                                <thead  className="table__shadow">
                                    <tr>
                                        <th style={{fontSize: '13px'}} >Дата, имя</th>
                                        <th style={{fontSize: '13px'}} >Проект</th>
                                        <th style={{fontSize: '13px'}} >Анализ, кол-во инж.</th>
                                        <th style={{fontSize: '13px'}} >Подвижная фаза</th>
                                        <th style={{fontSize: '13px'}} >Растворитель <br/> хранения</th>
                                        <th style={{fontSize: '13px'}} >Комментарий</th>
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