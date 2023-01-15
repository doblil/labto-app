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

export const stringifyDate = (value, exact = false) => {



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
    return `${year}.${needZero(month)}.${needZero(day)}`

}

export const restToExpired = () => {

}

