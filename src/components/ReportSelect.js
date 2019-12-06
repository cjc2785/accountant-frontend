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

export default ({category, ...props}) => {

    return (
        <div>
            <div style={selectContainerStyle}>
                <Select defaultValue={options[0]}
                    options={options} />
            </div>
            <div className='pt-4 pb-4'>
                <DatePicker {...props}/>
            </div>
        </div>
    )
}