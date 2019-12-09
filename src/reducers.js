import { combineReducers } from 'redux'


const login = (state = {}, action) => {
    switch(action.type) {
        case 'login_start':
            return {
                status: 'loading'
            }
        case 'login_success':
            return {
                status: 'success'
            }
        case 'login_error':
            return {
                status: action.data.status
            }
        default:
            return state
    }
}

const reportQueries = (state = {}, action) => {

    switch(action.type) {
        case 'read_report_start': {

            const {
                queryId
            } = action.data
            return {
                ...state,
                [queryId]: {
                    ...state[queryId],
                    status: 'loading'
                }
            }
        }
        case 'read_report_success': {
            
            const {
                queryId,
                reports
            } = action.data

            return {
                ...state,
                [queryId]: {
                    status: 'success',
                    data: reports
                }
            }
        }
        case 'read_report_error': {

            const {
                queryId
            } = action.data

            return {
                ...state,
                [queryId]: {
                    ...state[queryId],
                    status: 'error'
                }
            }
        }
        default: 
            return state
    }
}

const summaryQueries = (state = {}, action) => {

    switch(action.type) {
        case 'read_summary_start': {

            const {
                queryId
            } = action.data
            return {
                ...state,
                [queryId]: {
                    ...state[queryId],
                    status: 'loading'
                }
            }
        }
        case 'read_summary_success': {
            
            const {
                queryId,
                summary
            } = action.data

            return {
                ...state,
                [queryId]: {
                    status: 'success',
                    data: summary
                }
            }
        }
        case 'read_report_error': {

            const {
                queryId
            } = action.data

            return {
                ...state,
                [queryId]: {
                    ...state[queryId],
                    status: 'error'
                }
            }
        }
        default: 
            return state
    }
}


export default combineReducers({
    login,
    reportQueries,
    summaryQueries
})