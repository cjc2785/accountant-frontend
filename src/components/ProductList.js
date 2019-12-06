"use strict"

import React, { useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'


const options = [
    { value: 'shoes', label: 'Shoes' },
    { value: 'pants', label: 'Pants' },
    { value: 'shirts', label: 'Shirts' }
]

const selectContainerStyle = {
    maxWidth: '400px'
}

const ProductList = ({ category = '', products = [] }) => {

    const [
        state,
        setState
    ] = useState({
        startDate: moment().subtract(2, "year"),
        endDate: moment(),
        focused: null
    })


    const handleDateChange = ({ startDate, endDate }) => {

        setState(state => ({
            ...state,
            startDate,
            endDate
        }))
    }

    const handleFocusChange = focused => {
        
        setState(state => ({ 
            ...state,
            focused 
        }))
    }


    return (
        <div className='container'>
            <div>
                <div style={selectContainerStyle}>
                    <Select defaultValue={options[0]} 
                        options={options} />
                </div>
                <div className='pt-4 pb-4'>
                    <DateRangePicker startDate={state.startDate}
                        endDate={state.endDate}
                        startDateId="startDate"
                        endDateId="endDate"
                        focusedInput={state.focused}
                        isOutsideRange={() => null}
                        onDatesChange={handleDateChange}
                        onFocusChange={handleFocusChange}
                    />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <ProductRow key={product.productId}
                            product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

ProductList.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array
}

export default ProductList