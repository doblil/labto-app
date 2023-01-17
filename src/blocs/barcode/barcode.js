import './barcode.scss'
import JsBarcode from 'jsbarcode';
import { useSelector } from 'react-redux';

export const Barcode = (props) => {
    
    const {showBarcode, setShowBarcode} = props
    const {itemId, cat, lot, name, manufacturer} = useSelector(state => state.activeReagent)

    console.log('barcode render ith state ', showBarcode)
    if(!itemId) {return <></>}

    JsBarcode("#barcode", `${itemId}`, {
        lineColor: "#0aa",
        width:4,
        height:40,
        displayValue: true
      });
   


    const handleCloseBarcode = (e) => {
        if(e.target.Classname === 'barcode'){
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

    return(
        
        <div className="barcode" style={handleShow()} onClick={handleCloseBarcode}>
            <div className="barcode__window">
                <div className="barcode__heading">Штрихкод</div>
                <div className="barcode__btn-wrap">
                    <button className='btn barcode__btn'>Большой</button>
                    <button className='btn barcode__btn'>Средний</button>
                    <button className='btn barcode__btn barcode__btn_active'>Маленький</button>
                </div>
                <div className="barcode__wrap">
                    <img src="icons/bar.png" alt="" id='barcode' />
                    <div className="barcode__name">{name}</div>
                    <div className="barcode__info">{manufacturer} | {cat} | (lot: {lot})</div>
                </div>
            </div>
        </div>
            
    );
};