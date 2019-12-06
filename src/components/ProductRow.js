"use strict"

import React from 'react'

const SizeMenu = () => (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">S</button>
            <button className="btn btn-outline-secondary active" type="button">M</button>
            <button className="btn btn-outline-secondary" type="button">L</button>
        </div>
    </div>
)

export default ({ product }) => (
    <tr key={product.productId}>
        <td> {product.productId} </td>
        <td> {product.brand} </td>
        <td> {product.name} </td>
        <td> 
            {product.quantity}
        </td>
        <td> {product.sales} </td>
    </tr>
)