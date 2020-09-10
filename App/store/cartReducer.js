const initialState = {
  total: 0,
  items: [],
  favorites: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let itemTobeBeAdded = state.items.find((i) => i.id === action.data.id);

      if (itemTobeBeAdded) {
        const newItem = {
          ...itemTobeBeAdded,
          count: itemTobeBeAdded.count + 1,
        };

        return {
          ...state,
          items: [...state.items].map((item) =>
            item.id === newItem.id ? newItem : item
          ),
        };
      }
      return {
        ...state,
        total: state.total + 1,
        items: [...state.items, { ...action.data, count: 1 }],
      };
    case "REMOVE_FROM_CART":
      if (state.total === 0) return state;

      let itemToBeDeleted = state.items.find((i) => i.id === action.data.id);

      if (itemToBeDeleted && itemToBeDeleted.count > 1) {
        const newItem = {
          ...itemToBeDeleted,
          count: itemToBeDeleted.count - 1,
        };

        return {
          ...state,
          items: [...state.items].map((item) =>
            item.id === newItem.id ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          total: state.total - 1,
          items: [...state.items].filter((item) => item.id !== action.data.id),
        };
      }

    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.data] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites].filter(
          (fav) => fav.id !== action.data.id
        ),
      };
    default:
      return state;
  }
};

export const addToCart = (newItem) => ({
  type: "ADD_TO_CART",
  data: newItem,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  data: item,
});

export const addToFavorites = (newItem) => ({
  type: "ADD_TO_FAVORITES",
  data: newItem,
});

export const removeFromFavorites = (item) => ({
  type: "REMOVE_FROM_FAVORITES",
  data: item,
});

export default cartReducer;
