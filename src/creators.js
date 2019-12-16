import axios from './axiosInstance'
import { getReportQueryId, getSummaryQueryId } from './utility'

export const readReport = ({
    category,
    startDate,
    endDate
}) => dispatch => {

    const queryId = getReportQueryId({
        category,
        startDate,
        endDate
    })

    dispatch({
        type: 'read_report_start',
        data: {
            queryId
        }
    })

    return axios
        .get('accountant/reports', {
            params: {
                category,
                start: startDate,
                end: endDate
            }
        })
        .then(({ data }) => {

            const reports = data.map(
                ({ product, sales, count }) => ({
                    sales,
                    quantity: count,
                    productId: product.productId,
                    brand: product.brand,
                    name: product.name
                })
            )

            dispatch({
                type: 'read_report_success',
                data: {
                    queryId,
                    reports
                }
            })
        })
        .catch(() => {

            dispatch({
                type: 'read_report_error',
                data: {
                    queryId,
                    status: 'error'
                }
            })
        })
}

export const readSummary = ({
    startDate,
    endDate
}) => dispatch => {

    const queryId = getSummaryQueryId({
        startDate,
        endDate
    })

    dispatch({
        type: 'read_summary_start',
        data: {
            queryId
        }
    })

    return axios
        .get('accountant/summaries', {
            params: {
                start: startDate,
                end: endDate
            }
        })
        .then(({ data }) => {

            const {
                revenue,
                taxesDue
            } = data

            dispatch({
                type: 'read_summary_success',
                data: {
                    queryId,
                    summary: {
                        revenue,
                        taxesDue
                    }
                }
            })
        })
        .catch(() => {

            dispatch({
                type: 'read_summary_error',
                data: {
                    queryId,
                    status: 'error'
                }
            })
        })
}

export const login = ({
    email,
    password
}) => dispatch => {


    dispatch({
        type: 'login_start'
    })

    return axios
        .post('login', {
            email,
            password
        })
        .then(() => {

            dispatch({
                type: 'login_success'
            })
        })
        .catch(e => {

            const status = e.response.status === 401 ? 
                'unauthenticated' : 'error'

            dispatch({
                type: 'login_error',
                data: {
                    status
                }
            })
        })
}