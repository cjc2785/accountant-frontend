import React from 'react'
import { connect } from 'react-redux'
import { getSummaryQuery } from '../selectors'
import SummarySelect from './SummarySelect'

const summaryStyle = {
    maxWidth: '400px'
}

const SummaryPage = ({
    startDate,
    endDate,
    editing,
    status,
    summary,
    onDatesChange,
    onToggleEditing
}) => (
    <div className='container-fluid mt-5' style={summaryStyle}>
        <div className='d-flex mb-4'>
            <SummarySelect status={status}
                startDate={startDate}
                endDate={endDate}
                editing={editing}
                onDatesChange={onDatesChange}
                onToggleEditing={onToggleEditing}/>
        </div>
        <div>
            <div>
                <h3>Revenue: </h3>
                <p>{summary && `$${summary.revenue}`}</p>
            </div>
            <div>
                <h3>Taxes Due: </h3>
                <p>{summary && `$${summary.taxesDue}`}</p>
            </div>
        </div>
    </div>
)



export default connect(
    (state, props) => {

        const {
            summaryFilter
        } = props

        const query = summaryFilter ? getSummaryQuery(state, summaryFilter, {}) : {}

        const {
            status = 'idle',
            data: summary = null
        } = query

        return {
            ...props,
            status,
            summary
        }
    }
)(SummaryPage)