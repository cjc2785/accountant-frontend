import React from 'react'
import Select from 'react-select'
import DatePicker from './DatePicker'

const options = [
    { value: 'shoes', label: 'shoes' },
    { value: 'pants', label: 'pants' },
    { value: 'shirts', label: 'shirts' }
]

const values = {
    shoes: options[0],
    pants: options[1],
    shirts: options[2]
}

const selectContainerStyle = {
    maxWidth: '400px'
}

export default ({ category, editing, status, onCategoryChange, onToggleEditing, ...props }) => (
    <div className='pb-5' style={selectContainerStyle}>
        <div className='mb-3'>
            <button type="button"
                disabled={status === 'loading'}
                className="btn btn-primary"
                onClick={onToggleEditing}>
                {editing ? 'Done' : 'Edit'}
            </button>
            {status === 'loading' && <div className="ml-3 spinner-border"/>}
            {status === 'error' && <span className="ml-3 badge badge-danger">Error fetching reports</span>}
        </div>
        <div className='border p-3' style={selectContainerStyle}>
            <div className='pb-3'>
                <Select
                    isDisabled={!editing}
                    value={values[category]}
                    onChange={({ value }) => onCategoryChange(value)}
                    options={options} />
            </div>
            <div className=''>
                <DatePicker {...props} disabled={!editing} />
            </div>
        </div>
    </div>
)