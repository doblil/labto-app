import React from 'react';


export const BackupLoading = (props) => {
    
    return(
        <div className="overlay overlay__blur">

            <div className="animate__logo">
                <img src="icons/backup_logo.svg" alt="logo" />
                <div className="animate__circle animate__circle1"><img src="icons/circle_white.svg" alt="circle" /></div>
                <div className="animate__circle animate__circle2"><img src="icons/circle_white.svg" alt="circle" /></div>
                <div className="animate__circle animate__circle5"><img src="icons/circle_white.svg" alt="circle" /></div>
                <div className="animate__circle animate__circle3"><img src="icons/circle.svg" alt="circle" /></div>
                <div className="animate__circle animate__circle4"><img src="icons/circle.svg" alt="circle" /></div>
                <div className="animate__circle animate__circle6"><img src="icons/circle.svg" alt="circle" /></div>
            </div>

            <h4>{props.text}</h4> 
            <br/>
            <h4>Это может занять несколько минут</h4>
        </div>
    )
}

