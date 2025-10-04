import React, { createContext, useContext, useEffect, useReducer } from 'react'
import type { Product, CartItem } from '../types'

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; product: Product; quantity?: number }
  | { type: 'REMOVE'; productId: string }
  | { type: 'SET_QTY'; productId: string; quantity: number }
  | { type: 'CLEAR' }

const CartContext = createContext<{
  state: CartState
  add: (p: Product, q?: number) => void
  remove: (id: string) => void
  setQty: (id: string, q: number) => void
  clear: () => void
}>({ state: { items: [] }, add: () => {}, remove: () => {}, setQty: () => {}, clear: () => {} })

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const { product, quantity = 1 } = action
      const existing = state.items.find(i => i.product.id === product.id)
      if (existing) {
        return {
          items: state.items.map(i =>
            i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      return { items: [...state.items, { product, quantity }] }
    }
    case 'REMOVE':
      return { items: state.items.filter(i => i.product.id !== action.productId) }
    case 'SET_QTY':
      return {
        items: state.items
          .map(i =>
            i.product.id === action.productId ? { ...i, quantity: Math.max(0, action.quantity) } : i
          )
          .filter(i => i.quantity > 0),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

const STORAGE_KEY = 'jss_cart_v1'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartState) : { items: [] }
    } catch {
      return { items: [] }
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const add = (p: Product, q?: number) => dispatch({ type: 'ADD', product: p, quantity: q })
  const remove = (id: string) => dispatch({ type: 'REMOVE', productId: id })
  const setQty = (id: string, q: number) => dispatch({ type: 'SET_QTY', productId: id, quantity: q })
  const clear = () => dispatch({ type: 'CLEAR' })

  return (
    <CartContext.Provider value={{ state, add, remove, setQty, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
