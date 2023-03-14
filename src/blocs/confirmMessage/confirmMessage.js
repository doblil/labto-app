import './confirmMessage.scss'


export const ConfirmMessage = (props) => {
    const {confirmFunction, rejectFunction, text, open, handleClose} = props


    return(
        <>{open && <div className="overlay" style={{zIndex:99}}>
                        <div className="overlay__window">
                            <div className="close" onClick={handleClose}></div>
                            <div className="confirm__text">{text}</div>
                            <div className="confirm__text">*после подтверждения данное действвие нельзя отменить</div>
                            <div className="confirm__btns">
                                <button className='btn' onClick={confirmFunction}>Подтвердить</button>
                                <button className='btn' onClick={rejectFunction}>Отменить</button>
                            </div>
                        </div>
                    </div>}
        </>
    )
}