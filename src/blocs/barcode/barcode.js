import './barcode.scss'

export const Barcode = () => {
    return(
        
        <div className="barcode">
            <div className="barcode__window">
                <div className="barcode__heading">Штрихкод</div>
                <div className="barcode__btn-wrap">
                    <button className='btn barcode__btn'>Большой</button>
                    <button className='btn barcode__btn'>Средний</button>
                    <button className='btn barcode__btn barcode__btn_active'>Маленький</button>
                </div>
                <div className="barcode__wrap">
                    <img src="icons/bar.png" alt="" id='canvas' />
                    <div className="barcode__name">Muravinaya kislota</div>
                    <div className="barcode__info">Sigma-Aldrich | 564879u32 (lot: 124fgh67)</div>
                </div>
            </div>
        </div>
            
    );
};