import React from "react";
import { stringifyDate } from "../../../../../services/services";
import '../column/column.scss'

export const ColumnHistory = (props) => {
    
    const {inUse, itemId, sn, cat, name, setShowHistory} = props;
    let content = inUse
      .map(item => {
        const {fromDate, toDate, restSolvent, comment, userName, destination, countInj, test, mobilePhase, _id} = item
        return(
            <div className="column__history" key={_id}>
                <div className="column__value" style={{width:'20%'}}> {stringifyDate(fromDate)} -- {stringifyDate(toDate)}<br/><br />{userName}</div>
                <div className="column__value" style={{width:'10%'}}>{destination?.code}<br/><br />{destination?.name}</div>
                <div className="column__value" style={{width:'20%'}}>{test}, <br/><br />{countInj} инжекций</div>
                <div className="column__value" style={{width:'15%'}}> {mobilePhase}</div>
                <div className="column__value" style={{width:'10%'}}> {restSolvent}</div>
                <div className="column__value" style={{width:'25%'}}> {comment}</div>
       
            </div>
        )
    }).reverse()
    if(!inUse.length){
        content = <h6>Здесь пока что ничего нет...</h6>
    }



    return (
        <>
            <div className="overlay">
                <div className="overlay__window" style={{width: '90vw', maxWidth: 'none'}}>
                    <div className="close" onClick={() => {setShowHistory(false)}}></div>
                    <div className="overlay__heading"> 
                        <p>
                            История использования колонки ID: <b>{itemId}</b>,   <b>{name}</b>,   серийный номер: <b>{sn}</b>,   каталожный номер: <b>{cat}</b> 
                        </p>
                    </div>
                    <div className="overflow" style={{height: '70vh', width:'100%',}}>
                        {content}
                    </div> 
                </div>
            </div>
        </>
    )
}