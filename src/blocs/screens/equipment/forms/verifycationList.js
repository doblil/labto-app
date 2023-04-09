import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { stringifyDate } from "../../../../services/services.js";


export const VerificationList = (props) => {
    
    const printRef = useRef(null)

    const print = useReactToPrint({
        content: () => printRef.current,
    });

    const handlePrint =  () => {
        print()
    }
    

    const { verificationList, itemId, eqName, setShowVerificationList, manufacturer, model, sn } = props;
    const handleResult = (result) => {
        return result === 'pass' ? 'Пройдена' : 'Не пройдена'
    }

    let content = verificationList
      .map((item, index) => {
        const {fromDate, toDate, verificator, result, comment} = item
        return(
            <>         
                <tr key={index} className="table__row">
                    <td style={{fontSize: '10px'}} className="table__item"> {index+1}</td>
                    <td style={{fontSize: '10px'}} className="table__item"> {stringifyDate(fromDate)}</td>
                    <td style={{fontSize: '10px'}} className="table__item">{stringifyDate(toDate)} версия</td>
                    <td style={{fontSize: '10px'}} className="table__item">{verificator}</td>
                    <td style={{fontSize: '10px'}} className="table__item">{handleResult(result)}</td>
                    <td style={{fontSize: '10px'}} className="table__item">{comment}</td>
                </tr> 
            </>
        )
    }).reverse()
    if(!verificationList.length){
        content = <h6>Здесь пока что ничего нет...</h6>
    }



    return (
        <>
            <div className="overlay">
                <div className="overlay__window" style={{width: '90vw', maxWidth: 'none'}}>
                    <div className="close close_big" style={{top: '5px', right: '5px'}} onClick={() => {setShowVerificationList(false)}}></div>
                    <div className="print" onClick={handlePrint} style={{top: '5px', right: '35px'}}></div>
                    <div className="flow__destination">
                       

                            </div>
                        <div className="overflow overflow__mt50" style={{height: '70vh', width:'100%'}}>
                            <div className="" ref={printRef}>
                                <div className="overlay__heading" style={{position: 'sticky'}}> 
                                    История поверки оборудования: {eqName}, {model}, {manufacturer}, <br/>S/N:{sn} ID:{itemId}
                                </div>
                                <table className="table__wrap table__wrap_low" >

                                <thead  className="table__shadow">
                                    <tr>
                                        <th style={{fontSize: '12px'}} >№</th>
                                        <th style={{fontSize: '12px'}} >Дата поверки</th>
                                        <th style={{fontSize: '12px'}} >Окончание поверки</th>
                                        <th style={{fontSize: '12px'}} >Орган, проводивший поверку</th>
                                        <th style={{fontSize: '12px'}} >Результат</th>
                                        <th style={{fontSize: '12px'}} >Комментарий</th>
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