import React from 'react'

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