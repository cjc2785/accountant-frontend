"use strict"

import React from 'react'

const formStyle = {
    maxWidth: '400px'
}

export default () => (
    <div>
        <form  className='container-fluid' style={formStyle}>
            <div className="form-group">
                <label htmlFor="inputEmail">Email: </label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password: </label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)