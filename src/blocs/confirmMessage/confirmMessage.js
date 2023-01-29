import './confirmMessage.scss'


export const ConfirmMessage = (props) => {
    const {confirmFunction, rejectFunction, text, open} = props


    return(
        <>{open && <div className="overlay" >
                        <div className="overlay__window">
                            <div className="close"></div>
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