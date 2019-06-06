import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import '../css/tab.css';
class Tabs extends Component {
    render() {
        let { repoList = [] } = this.props;
        return <div>
            <nav aria-label="User profile">
                <a>Overview</a>
                <a>Repositories ({repoList.length})</a>
                <a>Projects</a>
                <a>Stars</a>
                <a>Followers</a>
                <a>Following</a>
            </nav>
        </div>
    }
};

export default inject('repoList')(observer(Tabs));
