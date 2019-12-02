"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'

const ProductList = ({
    category = '',
    products = []
}) => (
        <div className='container'>
            <div>
                <div className='dropdown'>
                    <button class="btn btn-secondary dropdown-toggle" type="button">
                        Shoes
                    </button>
                </div>
                <div className='d-flex pt-4 pb-4'>
                    <div>
                        <p>Start Date</p>
                        <input value='2019-01-01' />
                    </div>
                    <div className='pl-5'>
                        <p>End Date</p>
                        <input value='2019-02-01' />
                    </div>
                </div>
            </div>
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
                    {products.map(product => (
                        <ProductRow key={product.productId}
                            product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    )

ProductList.propTypes = {
    category: PropTypes.string,
    products: PropTypes.array
}

export default ProductList