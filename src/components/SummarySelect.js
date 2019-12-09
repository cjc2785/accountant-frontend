"use strict"

import React from 'react'
import moment from 'moment'
import DatePicker from './DatePicker'

const selectContainerStyle = {
    maxWidth: '400px'
}

export default ({ editing, status, onToggleEditing, ...props }) => (
    <div className='pb-3' style={selectContainerStyle}>
        <div className='mb-3'>
            <button type="button"
                disabled={status === 'loading'}
                className="btn btn-primary"
                onClick={onToggleEditing}>
                {editing ? 'Done' : 'Edit'}
            </button>
            {status === 'loading' && <div className="ml-3 spinner-border"/>}
            {status === 'error' && <span className="ml-3 badge badge-danger">Error fetching summaries</span>}
        </div>
        <div className='border p-3' style={selectContainerStyle}>
            <DatePicker {...props} disabled={!editing} />
        </div>
    </div>
)