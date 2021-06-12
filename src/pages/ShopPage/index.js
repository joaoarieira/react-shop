import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview';
import { Collections } from './Collections';

function ShopPage() {
    const [collections, setCollections] = useState(Collections);
    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                );
            })}
        </div>
    );
}

export default ShopPage;