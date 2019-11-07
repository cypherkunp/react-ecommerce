export const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemAlreadyAdded = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (itemAlreadyAdded) {
        const quantity = itemAlreadyAdded.quantity + 1;
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) return { ...cartItem, quantity };
            else return cartItem;
        });
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        const quantity = existingCartItem.quantity - 1;
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToRemove.id) return { ...cartItem, quantity };
            else return cartItem;
        });
    }
};
