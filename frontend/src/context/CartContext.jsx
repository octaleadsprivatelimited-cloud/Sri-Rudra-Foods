import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, weight = null) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item._id === product._id && item.selectedWeight === weight
      )

      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { ...product, quantity: 1, selectedWeight: weight }]
    })
  }

  const removeFromCart = (productId, weight = null) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item._id === productId && item.selectedWeight === weight)
      )
    )
  }

  const updateQuantity = (productId, weight, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, weight)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId && item.selectedWeight === weight
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.selectedWeight
        ? item.prices?.find((p) => p.weight === item.selectedWeight)?.price || item.price
        : item.price
      return total + price * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

