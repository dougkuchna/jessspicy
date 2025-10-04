import React from 'react'
import type { Product } from '../types'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </div>
      <div className="cart-concern position-absolute">
        <div className="cart-button d-flex">
          <button className="btn btn-medium btn-black" onClick={() => add(product)}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#" onClick={(e) => e.preventDefault()}>{product.name}</a>
        </h3>
        <span className="item-price text-primary">${product.price}</span>
      </div>
    </div>
  )
}
