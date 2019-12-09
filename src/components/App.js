"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header.js'
import Home from './home.js'
import SalesPageContainer from './SalesPageContainer'
import SummaryPageContainer from './SummaryPageContainer'
import Summary from './Summary'
import Payment from './Payment'
import Login from './Login'

export default () => (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sales'
                component={SalesPageContainer} />
            <Route path='/summaries'
                component={SummaryPageContainer} />
            <Route path='/payments' component={Payment}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </div>
)
