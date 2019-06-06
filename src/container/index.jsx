import React, { Component } from 'react';
import RepoList from "../components/repo-list";
import Profile from "../components/profile";
import FilterPanel from "../components/filter-panel";
import '../css/app.css';

class Container extends Component {
    render() {
        return <div className='flex-row-container'>
            <div className='padding-4'> 
                <Profile />
            </div>
            <div className='padding-4 flex-column-container'>
                <div>
                    <FilterPanel />
                </div>
                <div>
                    <RepoList />
                </div>
            </div>
        </div>;
    }
}

export default Container;