import React, { Component } from 'react';
import shopData from './shop.data';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    state = { collections: shopData };
    render() {
        return (
            <div className="shop-page">
                {shopData.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
