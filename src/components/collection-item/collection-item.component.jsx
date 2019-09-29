import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="item-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="item-footer">
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
