"use strict"

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from './header.js'
import { Home } from './home.js'
import ProductList from './ProductList'

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



const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sales'
                render={() => (<ProductList category='Sales'
                    products={shoes}/>)} />
            <Route path='/sales'
                render={() => (<ProductList category='Summaries'
                    products={shoes}/>)} />
        </Switch>
    </div>
)

export default App
