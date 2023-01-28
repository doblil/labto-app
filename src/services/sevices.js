export const handleWarnImg = (arr) => {
    const imgs = {
        'corrosive': './icons/danger/corrosive.svg',
        'eHazard': './icons/danger/environmentally_hazardous.svg',
        'harmful': './icons/danger/harmful.svg',
        'hHazard': './icons/danger/health_hazard.svg',
        'oxidizing': './icons/danger/oxidizing.svg',
        'toxic': './icons/danger/toxic.svg',
        'explosive': './icons/danger/explosive.svg',
        'flameble' : './icons/danger/flammable.svg',
        'gas': './icons/danger/compressed_gas.svg'
    }
     return arr.map((item, index)=>{
        return <img src={imgs[item]} alt="danger symbol" key={index} />
    })
}

export const stringifyDate = (value, exact = false, input = false) => {

    const date = new Date(value)

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const needZero = (num) => {
        if(num < 10){
            return `0${num}`
        }
        return `${num}`
    }

    if (exact) {
        return `${year}.${needZero(month)}.${needZero(day)}  ${needZero(hours)}:${needZero(minutes)}`
    }
    if(input) {
        return `${year}-${needZero(month)}-${needZero(day)}T${needZero(hours)}:${needZero(minutes)}`
    }
    return `${year}.${needZero(month)}.${needZero(day)}`

};

export const stringifyRSType = (type = '') => {
    switch (type) {
        case 'usp':
            return 'USP RS';
        case 'epcrs':
            return 'EP CRS';
        case 'bp':
            return 'BP RS';
        case 'who':
            return 'ВОЗ';
        case 'rso':
            return 'РСО';
        case 'gso':
            return 'ГСО';
        case 'fso':
            return 'ФСО';
        case 'oth':
            return '';
        default:
            return ''
    }
}

export const stringifyHistoryAction = (type = '') => {
    switch (type) {
        case 'addReag':
            return 'добавление реактива';
        case 'takeReag':
            return 'списание реактива';
        case 'changeReag':
            return 'изменение данных реактива';
        case 'isolateReag':
            return 'перенесение в карантин';
        case 'deleteReag':
            return 'удаление реактива';
        case 'takeColumn':
            return 'начало работы с колонкой';
        case 'returnColumn':
            return 'заавершение работы с колонкой';
        case 'createOrder':
            return 'создание заказа';
        case 'changeOrderStatus':
            return 'изменение статуса заказа';
        case 'deleteOrder':
            return 'удаление заказа';
        case 'createReport':
            return 'создание отчета';
        case 'addUser':
            return 'добавление пользователя';
        case 'deleteUser':
            return 'удаление пользователя';
        case 'enterSystem':
            return 'вход в систему';
        case 'getUserHistory':
            return 'просмотр истории сотрудника';
        case 'changeUser':
            return 'изменение данных сотрудника';
        default:
            return ''
    }
}

export const stringifyOrderStatus = (type = '') => {
    switch (type) {
        case 'created':
            return 'Создан';
        case 'processed':
            return 'в обработке';
        case 'executed':
            return 'выполняется';
        case 'completed':
            return 'готов, ожидает подтверждения';
        case 'canceled':
            return 'отменен';
        case 'reviced':
            return 'отправлен на доработку';
        case 'changed':
            return 'изменен';
        case 'confirmed':
            return 'Завершен, подтвержден заказчиком';
        default:
            return ''
    }
}



