import React from 'react'
import QRCode from 'react-qr-code'
import c from '../../../../config.json'


export const SetMobileApp = () => {
    const baseApiUrl = c.baseApiUrl;
    
    return(
        <>
            <h5 style={{marginBottom: '30px'}}>Отсканируйте QR-код на стартовой странице приложения, чтобы его активировать</h5>
            
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "15%", width: "15%" }}
                value={baseApiUrl}
                viewBox={`0 0 256 256`}
            />
        </>
    )
}