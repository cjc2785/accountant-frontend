"use strict"

import React from 'react'
import PropTypes from 'prop-types'

const Payment = () => (
    <div className='container-fluid'>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Tax Payment Amount</label>
                <input type="email" className="form-control" placeholder="Enter Amount" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)

Payment.propTypes = {

}

export default Payment