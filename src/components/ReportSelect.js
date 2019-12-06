"use strict"

import React, { useState } from 'react'
import Select from 'react-select'
import moment from 'moment'
import DatePicker from './DatePicker'

const options = [
    { value: 'shoes', label: 'Shoes' },
    { value: 'pants', label: 'Pants' },
    { value: 'shirts', label: 'Shirts' }
]

const selectContainerStyle = {
    maxWidth: '400px'
}

export default ({ category, ...props }) => {

    const [
        state,
        setState
    ] = useState({
        editing: false
    })

    const handleToggleEditing = () => setState(
        ({ editing }) => ({
            editing: !editing
        })
    )

    return (
        <div className='pb-5' style={selectContainerStyle}>
            <div className='pb-3'>
                <button type="button"
                    className="btn btn-primary"
                    onClick={handleToggleEditing}>
                        {state.editing ? 'Done' : 'Edit'}
                </button>
            </div>
            <div className='border p-3' style={selectContainerStyle}>
                <div className='pb-3'>
                    <Select defaultValue={options[0]}
                        isDisabled={!state.editing}
                        options={options} />
                </div>
                <div className=''>
                    <DatePicker {...props} disabled={!state.editing} />
                </div>
            </div>
        </div>
    )
}