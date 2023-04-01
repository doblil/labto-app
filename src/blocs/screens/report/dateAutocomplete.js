import { fillInDates } from "../../../services/services"

export const DateAutocomplete = (props) => {
   
    const {startSetter, endSetter} = props
    const {handlePeriodDay, handlePeriodMonth, handlePeriodWeek, handlePeriodYear} = fillInDates()
    
    const handleSetPeriod = (period) => {
        
        if (period === 'day') {
            const { endInputDate, startInputDate } = handlePeriodDay()
            console.log(endInputDate, startInputDate)
            startSetter(startInputDate);
            endSetter(endInputDate);
        }
        if (period === 'week') {
            const { endInputDate, startInputDate } = handlePeriodWeek()
            startSetter(startInputDate);
            endSetter(endInputDate);
        }
        if (period === 'month') {
            const { endInputDate, startInputDate } = handlePeriodMonth()
            startSetter(startInputDate);
            endSetter(endInputDate);
        }
        if (period === 'year') {
            const { endInputDate, startInputDate } = handlePeriodYear()
            startSetter(startInputDate);
            endSetter(endInputDate);
        }
    }

    return(
    <>
        <div className="filter__wrap" style={{marginBottom:'5px'}}>
            <div className="filter__item filter__item_mini" onClick={() => {handleSetPeriod('day')}}>
                сегодня
            </div>
            <div className="filter__item filter__item_mini" onClick={() => {handleSetPeriod('week')}}>
                текущая неделя
            </div>
            <div className="filter__item filter__item_mini" onClick={() => {handleSetPeriod('month')}}>
                текущий месяц
            </div>
            <div className="filter__item filter__item_mini" onClick={() => {handleSetPeriod('year')}}>
                текущий год
            </div>
        </div>
    </>
   )
}