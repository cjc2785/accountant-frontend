
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/" className="navbar-brand">
                        <img width="170px" height="140px" src={logo}/>
                    </Link>
                </li>
                <li className="list-inline-item"><Link to="/sales" replace>Sales</Link></li>
                <li className="list-inline-item"><Link to="/summaries" replace>Summaries</Link></li>
                <li className="list-inline-item"><Link to="/payments" replace>Tax Payments</Link></li>
            </ul>
            
            <ul className="list-inline">
            <li className="list-inline-item"><Link to="/login" replace>Log in</Link></li>
            </ul>
          
        </div>
    </nav>
)

