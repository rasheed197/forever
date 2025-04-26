import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, name, image, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='' to={`/product/${id}`}></Link>
    )
}

export default ProductItem