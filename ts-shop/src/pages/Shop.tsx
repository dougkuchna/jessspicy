import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Shop() {
  return (
    <section className="product-store padding-large">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Shop</h2>
          </div>
          <div className="row g-4">
            {products.map(p => (
              <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
