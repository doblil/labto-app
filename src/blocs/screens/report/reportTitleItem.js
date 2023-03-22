export const ReportTitleItem = (props) => {
    const {descr, value} = props
    return(
        <div className="report__title-values">
                    <div className="report__title-value">
                        {descr}
                    </div>
                    <div className="report__title-value">
                        {value}
                    </div>
                </div>
    )
}