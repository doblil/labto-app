import './barcode.scss'
import BCode from 'react-barcode';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export const Barcode = (props) => {
    
    const printRef = useRef(null)
    const [printSize, setPrintSize] = useState('big') //'big', 'middle', 'small'
    const [isPrinting, setIsPrinting] = useState(false)
    const styles = {
        big: {
            nameFontSize: "14px",
            infoFontSize: "12px",
            barcodeWidth: 2,  
            boxWidth: '315px',
            boxHeigt: '95px',
            padding: ""
        },
        middle: {
            nameFontSize: "10px",
            infoFontSize: "9px",
            barcodeWidth: 2,  
            boxWidth: '220px',
            boxHeigt: '91px',
            padding: ""

        },
        small: {
            nameFontSize: "0",
            infoFontSize: "0",
            barcodeWidth: 1,  
            boxWidth: '126px',
            boxHeigt: '52px',
            padding: "0"

        }
    }

    const {showBarcode, setShowBarcode} = props
    const {itemId, cat, lot, name, manufacturer} = props

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
      });

    if(!itemId) {return <></>}


    const handleCloseBarcode = (e) => {
        if(e.target.className === 'barcode'){
            setShowBarcode(false)
        }
        
    }
    const handleShow = () => {
        if (showBarcode) {
            return {
                display: ''
            }
        } else {
            return {
                display: 'none'
            }
        }
    }

    const handleActiveClass = (v) => {
        if(v === printSize){
            return 'btn btn_bar btn_active barcode__btn '
        } else {
            return 'btn btn_bar barcode__btn'
        }
    }
   

    return(
        
        <div className="overlay" style={handleShow()} onClick={handleCloseBarcode}>
            <div className="overlay__window">
                <div className="close" onClick={() => setShowBarcode(false)}></div>
                <div className="overlay__heading">Выберите подходящий размер штрихкода</div>
                <div className="barcode__btn-wrap">
                    <button className={handleActiveClass('big')} onClick={() => setPrintSize('big')} >Большой</button>
                    <button className={handleActiveClass('middle')} onClick={() => setPrintSize('middle')} >Средний</button>
                    <button className={handleActiveClass('small')} onClick={() => setPrintSize('small')} >Маленький</button>
                </div>
                <div className="barcode__wrap">
                    <div className="barcode__toprint" ref={printRef} style= {{width: styles[printSize].boxWidth, height:styles[printSize].boxHeigt, padding:styles[printSize].padding}}>
                        <BCode margin={5} width={styles[printSize].barcodeWidth} height={30} fontSize={14} value={`${itemId}`}/>
                        <div className="barcode__name" style={{fontSize: styles[printSize].nameFontSize}}>{name}</div>
                        <div className="barcode__info" style={{fontSize: styles[printSize].infoFontSize}}>{manufacturer} | {cat} | (lot: {lot})</div>
                    </div>
                </div>
                <button className='btn overlay__btn' onClick={handlePrint}> <img src="icons/printer_white.svg" alt="printer" /> Распечатать</button>
            </div>
        </div>
            
    );
};