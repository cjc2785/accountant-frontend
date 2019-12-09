"use strict"

import React from 'react'
import { connect } from 'react-redux'
import ReportSelect from './ReportSelect'
import ProductReportTable from './ProductReportTable'
import { getReportQuery } from '../selectors'

const SalesPage = ({
    category,
    startDate,
    endDate,
    editing,
    status,
    reports,
    onCategoryChange,
    onDatesChange,
    onToggleEditing
}) => (
    <div className='container'>
        <ReportSelect category={category}
            status={status}
            startDate={startDate}
            endDate={endDate}
            editing={editing}
            onCategoryChange={onCategoryChange}
            onDatesChange={onDatesChange}
            onToggleEditing={onToggleEditing}/>
        <ProductReportTable
            products={reports} />
    </div>
)

const defaultReports = []

export default connect(
    (state, props) => {

        const {
            reportFilter
        } = props

        const query = reportFilter ? getReportQuery(state, reportFilter, {}) : {}

        const {
            status = 'idle',
            data: reports = defaultReports
        } = query

        return {
            ...props,
            status,
            reports
        }
    }
)(SalesPage)