import React from 'react';
import './AppHeader.css';

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>Oleksii</h1>
            <h2>{allPosts} to do, {liked} done</h2>
        </div>
    );
};

export default AppHeader;
