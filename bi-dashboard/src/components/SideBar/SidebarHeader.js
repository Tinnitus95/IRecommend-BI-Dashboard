import React from 'react';

const sidebarHeader = ( props ) => (
    <div className="sidebar-header">
        <h3>{props.company}</h3>
        <h4>{props.name}</h4>
    </div>
);

export default sidebarHeader;
