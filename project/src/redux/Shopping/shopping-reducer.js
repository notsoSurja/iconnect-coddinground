import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "MAX Solid Full Sleeves Formal Shirt",
      description:
        "Complemented with a solid surface, this denim shirt has full sleeves, flap pockets, a curved hem and a spread collar",
      price: 799.0,
      image:
        "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011085614-Black-BLACK-1000011085614-18032022_01-2100.jpg",
    },
    {
      id: 2,
      title: "MAX Striped Slim Fit Casual Shirt",
      description:
        "With the right amount of comfort and suave, this striped casual shirt which has a spread collar, half sleeves, and button placket is the perfect addition to your casual wardrobe",
      price: 1049.0,
      image:
        "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011075832-Blue-BLUE-1000011075832-07042022_01-2100.jpg",
    },
    {
      id: 3,
      title: "MAX Striped Slim Fit Casual Shirt",
      description:
        "With the right amount of comfort and suave, this striped casual shirt which has a spread collar, long sleeves, and a button placket is the perfect addition to your casual wardrobe.",
      price: 119.0,
      image:
        "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009769173-Black-Black-1000009769173-7072021_01-2100.jpg",
    },
    {
      id: 3,
      title: "MAX Solid Slim Fit Polo T-shirt",
      description:
        "A polo t-shirt with short sleeves and vented hems, that features a solid detail on the surface.Team this t-shirt with shorts or casual trousers for a laid-back look.",
      price: 449.0,
      image:
        "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011085639-Blue-LIGHTBLUE-1000011085639-18032022_01-2100.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
