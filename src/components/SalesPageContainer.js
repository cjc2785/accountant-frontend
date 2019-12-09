"use strict"

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import SalesPage from './SalesPage'
import { readReport } from '../creators'

const SalesPageContainer = ({ readReport }) => {

    const [
        state,
        setState
    ] = useState({
        category: 'shoes',
        editing: false,
        startDate: moment().subtract(1, "year"),
        endDate: moment()
    })

    const {
        category,
        startDate,
        endDate,
        editing,
        reportFilter
    } = state

    useEffect( () => {
        if(reportFilter) {
            readReport(reportFilter)
        }
    }, [reportFilter])

    useEffect(() => {

        if (!editing) {
      
            setState(state => ({
                ...state,
                reportFilter: {
                    category,
                    startDate: startDate.format('YYYY-MM-DD'),
                    endDate: endDate.format('YYYY-MM-DD')
                }
            }))
        }

    }, [editing, category, startDate, endDate])


    const handleToggleEditing = () => setState(
        ({ editing, ...state }) => ({
            ...state,
            editing: !editing
        })
    )

    const handleCategoryChange = category => setState(
        state => ({
            ...state,
            category
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
        <SalesPage {...state}
            onCategoryChange={handleCategoryChange}
            onDatesChange={handleDatesChange}
            onToggleEditing={handleToggleEditing} />
    )
}

export default connect(
    null,
    { readReport }
)(SalesPageContainer)
