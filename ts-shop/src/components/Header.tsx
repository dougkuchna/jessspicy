import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { state } = useCart()
  const count = state.items.reduce((sum, i) => sum + i.quantity, 0)
  return (
    <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="logo">Jess Spicy Stuff: Your Home For Unique Spicy Creations</span>
          </Link>
          <div className="offcanvas-body">
            <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item"><NavLink className="nav-link me-4" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link me-4" to="/shop">Products</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link me-4" to="/about">About</NavLink></li>
              <li className="nav-item">
                <div className="user-items ps-5">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <NavLink className="nav-link me-4" to="/cart">Cart ({count})</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
