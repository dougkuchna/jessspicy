import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { state, setQty, remove, clear } = useCart()
  const items = state.items
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  if (items.length === 0) {
    return (
      <section className="padding-large">
        <div className="container">
          <div className="row" style={{ minHeight: 300 }}>
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ fontSize: '1.25rem' }}>
                <p>Your cart is currently empty</p>
                <span><p>click <a href="/">here</a> to continue shopping</p></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="padding-large">
      <div className="container">
        <div className="row">
          <h2 className="display-7 text-dark text-uppercase pb-3">Cart</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ product, quantity }) => (
                  <tr key={product.id}>
                    <td className="d-flex align-items-center gap-3">
                      <img src={product.image} alt={product.name} style={{ width: 60, height: 60, objectFit: 'cover' }} />
                      <span>{product.name}</span>
                    </td>
                    <td>${product.price}</td>
                    <td style={{ maxWidth: 120 }}>
                      <input
                        type="number"
                        min={0}
                        value={quantity}
                        onChange={(e) => setQty(product.id, Number(e.target.value))}
                        className="form-control"
                      />
                    </td>
                    <td>${(product.price * quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-outline-dark" onClick={() => remove(product.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button className="btn btn-outline-dark" onClick={clear}>Clear Cart</button>
            <div className="total-price">
              <span className="cart-totals">Total: </span>
              <span className="money">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
