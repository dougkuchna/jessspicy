import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <>
      <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h1 className="display-2 text-uppercase text-dark pb-5">Product 1</h1>
                <Link to="/shop" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="image-holder">
                <img src="../images/jtestbanner.png" alt="banner" style={{ paddingTop: '20%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="smart-watches" className="product-store padding-large position-relative no-padding-top">
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">Jams</h2>
              <div className="btn-right">
                <Link to="/shop" className="btn btn-medium btn-normal text-uppercase">Go to Shop</Link>
              </div>
            </div>
            <div className="row g-4">
              {products.slice(0, 4).map(p => (
                <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
