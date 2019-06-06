import React, { Component } from 'react';
import RepoList from "../components/repo-list";
import Profile from "../components/profile";
import FilterPanel from "../components/filter-panel";
import '../css/app.css';

class Container extends Component {
    state = {};

    componentDidMount() {
        fetch('https://api.github.com/users/vbimanonmanim/repos')
            .then(res => res.json())
            .then(result => {
                const repoList = result.map(res => {
                    return {
                        id: res.id,
                        updated_at: res.updated_at,
                        isPrivate: res.private,
                        language: res.language,
                        forks_count: res.forks_count,
                        description: res.description,
                        name: res.name
                    }
                });
                this.setState({
                    repoList
                });
            })
            .catch(e => {
                this.setState({
                    repoList: []
                });
            })
    }
    render() {
        return <div className='flex-row-container'>
            <div className='padding-4'> 
                <Profile />
            </div>
            <div className='padding-4 flex-column-container'>
                <div>
                    <FilterPanel/>
                </div>
                <div>
                    <RepoList repoList={this.state.repoList}/>
                </div>
            </div>
        </div>;
    }
}

export default Container;