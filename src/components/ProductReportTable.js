import React from 'react'
import ProductRow from './ProductRow'

export default ({ products }) => (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
            {products.sort((a,b) => a.productId - b.productId)
                .map(product => (
                <ProductRow key={product.productId}
                    product={product} />
            ))}
        </tbody>
    </table>
)