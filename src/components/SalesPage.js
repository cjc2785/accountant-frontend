"use strict"

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ReportSelect from './ReportSelect'
import ProductReportTable from './ProductReportTable'

const shoes = [{
    productId: 1,
    brand: 'Nike',
    name: 'Air Jordan',
    quantity: 10,
    sales: 100,
}, {
    productId: 2,
    brand: 'Adidas',
    name: 'Running Shoes',
    quantity: 20,
    sales: 200
}, {
    productId: 3,
    brand: 'Nike',
    name: 'Running Shoes',
    quantity: 5,
    sales: 100
}]

export default () => {

    const [
        state,
        setState
    ] = useState({
        category: 'shoes',
        products: shoes,
        startDate: moment().subtract(1, "year"),
        endDate: moment()
    })

    const handleDatesChange = ({ startDate, endDate }) => {

        setState(state => ({
            ...state,
            startDate,
            endDate
        }))
    }

    return (
        <div className='container'>
            <ReportSelect {...state} onDatesChange={handleDatesChange}/>
            <ProductReportTable products={state.products} />
        </div>
    )
}