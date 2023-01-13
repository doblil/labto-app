export const handleWarnImg = (arr) => {
    const imgs = {
        'corrosive': './icons/danger/corrosive.svg',
        'eHazard': './icons/danger/environmentally_hazardous.svg',
        'harmful': './icons/danger/harmful.svg',
        'hHazard': './icons/danger/health _hazard.svg',
        'oxidizing': './icons/danger/oxidizing.svg',
        'toxic': './icons/danger/toxic.svg',
    }
     return arr.map((item, index)=>{
        return <img src={imgs[item]} alt="danger symbol" key={index} />
    })
}

export const stringifyDate = ( exact = false) => {
    const date = new Date;

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    console.log( year, month, day, hours)
}

stringifyDate()