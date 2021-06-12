import React from 'react';
import './styles.scss';

import { withRouter } from 'react-router-dom';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
//withRouter possibilita retornar as props:
//location, match e history