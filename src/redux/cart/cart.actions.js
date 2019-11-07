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

export const removeItem = item => {
    return {
        type: cartActionTypes.REMOVE_ITEM,
        payload: item
    };
};

export const clearItemFromCart = item => {
    return {
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    };
};
