import React from 'react';
import MenuItem from '../MenuItem';
import { SectionItems } from './SectionItems';
import './styles.scss';

function Directory() {
    return (
        <div className="directory-menu">
            {
                /*
                // MESMO EFEITO
                SectionItems.map(({ id, title, imageUrl, size, linkUrl }) => {
                    return (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    );
                })
                */
                SectionItems.map(({ id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    );
                })
            }
        </div>
    );
}

export default Directory;