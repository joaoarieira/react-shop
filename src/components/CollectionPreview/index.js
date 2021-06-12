import React from 'react';
import './styles.scss';

function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview" >
                {items.slice(0, 4).map(({ id, name }) => {
                    return (
                        <div key={id}>{name}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default CollectionPreview;