"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header.js'
import Home from './home.js'
import SalesPage from './SalesPage'
import Summary from './Summary'
import Payment from './Payment'
import Login from './Login'

export default () => (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sales'
                component={SalesPage} />
            <Route path='/summaries'
                render={() => (<Summary/>)} />
            <Route path='/payments' component={Payment}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </div>
)
