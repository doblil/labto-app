import React from 'react';


export const BackupLoading = (props) => {
    
    return(
        <div className="overlay overlay__blur">
            <h4>{props.text}</h4> 
            <br/>
            <h4>Это может занять несколько минут</h4>
        </div>
    )
}

