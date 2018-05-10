import React from 'react';

const sidebarHeader = ( props ) => (
    <div className="sidebar-header">
        <h3>{props.name}</h3>
        <h4>{props.company}</h4>

    </div>
);

export default sidebarHeader;
