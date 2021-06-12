import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import { SectionItems } from './SectionItems';
import './styles.scss';

function Directory() {
    const [sections, setSections] = useState(SectionItems);

    return (
        <div className="directory-menu">
            {
                /*
                // MESMO EFEITO
                sections.map(({ id, title, imageUrl, size, linkUrl }) => {
                    return (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    );
                })
                */
                sections.map(({ id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    );
                })
            }
        </div>
    );
}

export default Directory;