import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cart, CartItem, FoodItem } from '../lib/types';

interface CartContextType {
  cart: Cart;
  addToCart: (foodItem: FoodItem, quantity: number, options?: any) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });

  const addToCart = (foodItem: FoodItem, quantity: number, options?: any) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(
        item => item.foodItem.id === foodItem.id
      );

      if (existingItemIndex !== -1) {
        // Update existing item
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };

        return {
          ...prevCart,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      } else {
        // Add new item
        const newItem: CartItem = {
          id: Date.now().toString(),
          foodItem,
          quantity,
          selectedSides: options?.sides || [],
          selectedDrinks: options?.drinks || [],
          selectedExtras: options?.extras || [],
          specialInstructions: options?.instructions || '',
          totalPrice: foodItem.price * quantity,
        };

        const updatedItems = [...prevCart.items, newItem];
        return {
          ...prevCart,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.id !== itemId);
      return {
        ...prevCart,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
            totalPrice: item.foodItem.price * quantity,
          };
        }
        return item;
      });

      return {
        ...prevCart,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
    });
  };

  const getTotal = () => {
    return cart.items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
