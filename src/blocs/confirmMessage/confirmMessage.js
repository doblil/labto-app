import './confirmMessage.scss'


export const ConfirmMessage = () => {
    return(
        <div className="confirm">
            <div className="confirm__window">
                <div className="close"></div>
                <div className="confirm__text">Вы уверены, что хотите списать 30г реактива "Муравьиная кислота"?</div>
                <button className='btn'> Подтвердить</button>
            </div>
        </div>
    )
}