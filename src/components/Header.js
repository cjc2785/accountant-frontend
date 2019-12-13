
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const listItemStyle = {
    marginRight: '16px'
}

export default () => (
    <nav className="navbar bg-dark">
        <div className="d-flex">
            <div className="navbar-brand">
                <Link className='app-link' to="/">
                    <img width="140px" height="100px" src={logo} />
                </Link>
            </div>
            <div className="ml-3 d-flex justify-content-start align-items-center">
                <div style={listItemStyle}>
                    <Link className='app-link' to="/sales" replace>Sales</Link>
                </div>
                <div style={listItemStyle}>
                    <Link className='app-link' to="/summaries" replace>Summaries</Link>
                </div>
                <div style={listItemStyle}>
                    <Link className='app-link' to="/payments" replace>Tax Payments</Link>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center">
            <div style={listItemStyle}>
                <Link className='app-link' to="/login" replace>Log in</Link>
            </div>
        </div>
    </nav>
)

