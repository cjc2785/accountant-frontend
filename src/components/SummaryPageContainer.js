import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import SummaryPage from './SummaryPage'
import { readSummary } from '../creators'

const SummaryPageContainer = ({ readSummary }) => {

    const [
        state,
        setState
    ] = useState({
        editing: false,
        startDate: moment().subtract(1, "year"),
        endDate: moment()
    })

    const {
        startDate,
        endDate,
        editing,
        summaryFilter
    } = state

    useEffect( () => {
        if(summaryFilter) {
            readSummary(summaryFilter)
        }
    }, [summaryFilter])

    useEffect(() => {

        if (!editing) {
      
            setState(state => ({
                ...state,
                summaryFilter: {
                    startDate: startDate.format('YYYY-MM-DD'),
                    endDate: endDate.format('YYYY-MM-DD')
                }
            }))
        }

    }, [editing, startDate, endDate])


    const handleToggleEditing = () => setState(
        ({ editing, ...state }) => ({
            ...state,
            editing: !editing
        })
    )

    const handleDatesChange = ({ startDate, endDate }) => {

        setState(state => ({
            ...state,
            startDate,
            endDate
        }))
    }

    return (
        <SummaryPage {...state}
            onDatesChange={handleDatesChange}
            onToggleEditing={handleToggleEditing} />
    )
}

export default connect(
    null,
    { readSummary }
)(SummaryPageContainer)
