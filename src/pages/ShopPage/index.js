import React from 'react';

import CollectionPreview from '../../components/CollectionPreview';
import { Collections } from './Collections';

function ShopPage() {
    return (
        <div className="shop-page">
            {Collections.map(({ id, ...otherCollectionProps }) => {
                return (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                );
            })}
        </div>
    );
}

export default ShopPage;