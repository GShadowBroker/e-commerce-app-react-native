import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let sum = items.map((i) => i.price).reduce((a, i) => a + i, 0);
    setTotal(sum);
  }, [items]);

  const cart = {
    total,
    items,
    favorites,
    addToCart: (item) => {
      setItems([...items, item]);
      setTotal(total + 1);
    },
    subtractFromCart: (item) => {
      setItems(items.filter((i) => item.id !== i.id));
      setTotal(total - 1);
    },
    addToFavorites: (item) => {
      setFavorites([...favorites, item]);
    },
    subtractFromFavorites: (item) => {
      setFavorites(favorites.filter((f) => item.id !== f.id));
    },
  };
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
