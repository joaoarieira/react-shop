import React from 'react';
import CollectionItem from '../CollectionItem';
import './styles.scss';

function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview" >
                {items.slice(0, 4).map(({ id, name, imageUrl, price }) => {
                    return (
                        <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
                    );
                })}
            </div>
        </div>
    );
}

export default CollectionPreview;