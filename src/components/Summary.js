"use strict"

import React from 'react'
import PropTypes from 'prop-types'

const Summary = () => (
    <div className='container-fluid'>
        <div className='d-flex pt-4 pb-4'>
            <div>
                <p>Start Date</p>
                <input value='2019-01-01' />
            </div>
            <div className='pl-5'>
                <p>End Date</p>
                <input value='2019-02-01' />
            </div>
        </div>
        <div>
            <div>
                <h3>Revenue: </h3>
                <p>$1000.21</p>
            </div>
            <div>
                <h3>Taxes Due: </h3>
                <p>Taxes: $102.72</p>
            </div>
        </div>
    </div>
)

Summary.propTypes = {

}

export default Summary