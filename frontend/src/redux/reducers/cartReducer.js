import {
  ADD_TO_CART,
  GET_TO_CART,
  REMOVE_TO_CART,
  SAVE_SHIPPING_INFO,
} from '../constants/cartConstants';

export const cartReducer = (
  state = {cartItems: [], shippingInfo: {}},
  action,
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action?.payload;

      const isItemExist =
        state.cartItems.length >= 1 &&
        state?.cartItems?.find((it, ind) => it?.product === item?.product);

      if (isItemExist) {
        return {
          ...state,
          cartItems:
            state.cartItems &&
            state?.cartItems?.map((it, ind) =>
              it?.product === isItemExist?.product ? item : it,
            ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state?.cartItems, item],
        };
      }

    case GET_TO_CART:
      return {
        cartItems: action?.payload,
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state?.cartItems?.filter(
          (item, i) => item?.product !== action?.payload,
        ),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
