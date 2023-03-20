export const ReportTitleItem = (props) => {
    const {key, value} = props
    return(
        <div className="report__title-values">
                    <div className="report__title-value">
                        {key}
                    </div>
                    <div className="report__title-value">
                        {value}
                    </div>
                </div>
    )
}