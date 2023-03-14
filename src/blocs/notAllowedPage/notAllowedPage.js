import './notAllowedPage.scss'


export const NotAllowedPage = () => {

return(
        <>
            <div className="not-allowed__page" style={{zIndex:99}}>
                <div className="not-allowed">
                    <div className="not-allowed__pic"><img src="icons/lock.svg" alt="lock" /></div>
                    <div className="not-allowed__text">Извините, у Вас нет доступа к этой странице</div>
                </div>
            </div>
        </>
    )
}