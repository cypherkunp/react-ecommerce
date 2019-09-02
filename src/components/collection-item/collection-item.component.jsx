import React, { Component } from 'react';
import './collection-item.styles.scss';

class CollectionItem extends Component {
    render() {
        const { id, name, price, imageUrl } = this.props;
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
            </div>
        );
    }
}

export default CollectionItem;
