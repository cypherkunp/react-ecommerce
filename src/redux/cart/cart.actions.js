import cartActionTypes from './cart.types';

export const toggleCartHidden = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    };
};

export const addItem = item => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    };
};
