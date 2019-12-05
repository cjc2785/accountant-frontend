"use strict"

import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
    maxWidth: '400px'
}

const Payment = () => (
    <div>
        <form  className='container-fluid' style={formStyle}>
            <div className="form-group">
                <label htmlFor="inputPayment">Tax Payment Amount</label>
                <input type="email" id="inputPayment" className="form-control" placeholder="Enter Amount" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)

Payment.propTypes = {

}

export default Payment