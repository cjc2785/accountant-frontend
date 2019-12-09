import { getReportQueryId, getSummaryQueryId } from './utility'

export const getReportQuery = (
    {reportQueries}, 
    {category, startDate, endDate},
    defaultReportQuery = null
) => {
 
    const queryId = getReportQueryId({
        category, 
        startDate: startDate,
        endDate: endDate
    })

    const {
        [queryId]: query = defaultReportQuery
    } = reportQueries

    return query
}

export const getSummaryQuery = (
    {summaryQueries}, 
    {startDate, endDate},
    defaultSummaryQuery = null
) => {
 
    const queryId = getSummaryQueryId({
        startDate: startDate,
        endDate: endDate
    })

    const {
        [queryId]: query = defaultSummaryQuery
    } = summaryQueries

    return query
}