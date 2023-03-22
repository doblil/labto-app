import React from "react";
import { stringifyDate } from "../../../../../services/services";
import '../column/column.scss'

export const ColumnHistory = (props) => {
    
    const {inUse, itemId, sn, cat, name, setShowHistory} = props;
    let content = inUse
      .map(item => {
        const {fromDate, toDate, restSolvent, comment, userName, destination, countInj, test, mobilePhase, _id} = item
        return(
            <>          
                <div className="column__history" key={_id}>
                    <div className="column__value" style={{width:'20%'}}> {stringifyDate(fromDate)} -- {stringifyDate(toDate)}<br/><br />{userName}</div>
                    <div className="column__value" style={{width:'10%'}}>{destination?.code}<br/><br />{destination?.name}</div>
                    <div className="column__value" style={{width:'20%'}}>{test}, <br/><br />{countInj} инжекций</div>
                    <div className="column__value" style={{width:'15%'}}> {mobilePhase}</div>
                    <div className="column__value" style={{width:'10%'}}> {restSolvent}</div>
                    <div className="column__value" style={{width:'25%'}}> {comment}</div>
                </div>
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
                    <div className="print" style={{top: '5px', right: '35px'}}></div>
                    <div className="overlay__heading"> 
                        История использования колонки ID: <b>{itemId}</b>,   <b>{name}</b>,   серийный номер: <b>{sn}</b>,   каталожный номер: <b>{cat}</b> 
                    </div>
                    <div className="column__history-head">
                        <div className="column__value-head" style={{width:'20%'}}>дата, имя</div>
                        <div className="column__value-head" style={{width:'10%'}}>проект</div>
                        <div className="column__value-head" style={{width:'20%'}}>количество инжекций</div>
                        <div className="column__value-head" style={{width:'15%'}}>подвижная фаза</div>
                        <div className="column__value-head" style={{width:'10%'}}>растворитель хранения</div>
                        <div className="column__value-head" style={{width:'25%'}}>комментарий</div>
                    </div>  
                    <div className="overflow" style={{height: '70vh', width:'100%',}}>
                        {content}
                    </div> 
                </div>
            </div>
        </>
    )
}