import React from 'react';

export const ServicePage = () => {
    return (
        <div className="not-allowed__page" style={{zIndex:99}}>
            <div className="not-allowed">
                <div className="not-allowed__pic"><img src="icons/settings.svg" alt="settings" /></div>
                <div className="not-allowed__text">В данный момент проходят сервисные работы. Обновите страницу и дождитесь окончания работ</div>
            </div>
        </div>
    )
} 