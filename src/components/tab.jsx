import React, { Component } from 'react';
import '../css/tab.css';
export default class Tabs extends Component {
    render() {
        return <div>
            <nav aria-label="User profile">
                <a>Overview</a>
                <a>Repositories (26)</a>
                <a>Projects</a>
                <a>Stars</a>
                <a>Followers</a>
                <a>Following</a>
            </nav>
        </div>
    }
};