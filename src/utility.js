export const getReportQueryId = ({
    category, startDate, endDate
}) => `${category}/${startDate}/${endDate}`

export const getSummaryQueryId = ({
    startDate, endDate
}) => `${startDate}/${endDate}`