"use strict"

import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates'

export default ({startDate, endDate, onDatesChange, disabled = false}) => {

    const [
        state,
        setState
    ] = useState({
        focused: null
    })


    const handleFocusChange = focused => {
        
        setState(state => ({ 
            ...state,
            focused 
        }))
    }

    return (
        <DateRangePicker startDate={startDate}
            endDate={endDate}
            startDateId="startDate"
            endDateId="endDate"
            focusedInput={state.focused}
            disabled={disabled}
            isOutsideRange={() => null}
            onDatesChange={onDatesChange}
            onFocusChange={handleFocusChange}/>
    )
}