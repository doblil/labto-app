import React, { useState, useRef } from 'react';

import { useSelector } from "react-redux"
import { stringifyDate } from "../../../../services/sevices"
import { useReactToPrint } from "react-to-print"

export const HistoryOfUsage = (props) => {
    const {setShowHistory} = props
    const {units, itemId, name, cat, lot, inUse} = useSelector(state=> state.activeReagent)

    const printRef = useRef(null)
    const [printPrep, setPrintPrep] = useState(false)

    const print = useReactToPrint({
        content: () => printRef.current,
      });
    
    const printStyles = {
        margin: '30px'
    }

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

    if(!itemId) {return <></>}


    if(!props.reagent){
        return <></>
    }

    if(!inUse){
        return<></>
    }

    let totalUsage = 0
    const startDate = inUse.map(item => stringifyDate(Date.parse(item.date))).sort()[0];
    const endDate = inUse.map(item => stringifyDate(Date.parse(item.date))).sort()[inUse.length - 1]
    inUse.forEach(item => {
        totalUsage += (+item.quan)
        console.log(item.quan);
        return totalUsage
    })
    
    const content = inUse.map((item) =>{
        return(
                
                <tr key={item._id} className="table__row">
                    <td className="table__item">{stringifyDate(Date.parse(item.date), true)}</td>
                    <td className="table__item">{item.destination}</td>
                    <td className="table__item">{item.test}</td>
                    <td className="table__item">{item.quan} {units}</td>
                    <td className="table__item">{item.name}</td>
                </tr>
            
        )
    })

    return(
        <div ref={printRef} style={printPrep ? printStyles : {}}>
            {printPrep && <h5>ID: {itemId}, {name}, cat: {cat}, lot: {lot}</h5>}
            <table className="table__wrap table__wrap_low" >
            
                {!printPrep &&<div className="close close_big" onClick={()=>{setShowHistory(false)}}></div>}
                {!printPrep && <div className="print" onClick={handlePrint}> </div>}
            
                <thead  className="table__shadow">
                    <tr>
                        <th>Дата</th>
                        <th>Статья</th>
                        <th>Анализ</th>
                        <th>Расход</th>
                        <th>Ответственный</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
        
            </table>
            {printPrep && <h5>Всего использовано {Math.round(totalUsage*1000)/1000}{units} за период {startDate} - {endDate}</h5>}
        </div>
       
    )
}