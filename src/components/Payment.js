"use strict"

import React from 'react'

const formStyle = {
    maxWidth: '400px'
}

export default () => (
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