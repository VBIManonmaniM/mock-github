import React, { Component } from 'react';
import { observable } from "mobx";
import {Provider, observer } from "mobx-react";
import RepoList from "../components/repo-list";
import Profile from "../components/profile";
import FilterPanel from "../components/filter-panel";
import '../css/app.css';

class Container extends Component {
    state = {
        repoList: []
    };

    store = observable.array();
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
                        name: res.name,
                        archived: res.archived,
                        private: res.private,
                        public: !res.private,
                        fork: res.fork,
                        mirror: res.mirror_url !== null,
                        languageFilter: true,
                        nameFilter: true,
                        repoTypeFilter: true
                    }
                });
                this.store.push(...observable(repoList));
                this.forceUpdate();
            })
            .catch(e => {
                this.store = [];
                // this.forceUpdate();
            })
    }

    render() {
        return <div className='flex-row-container'>
            <div className='padding-4'>
                <Profile />
            </div>
            <div className='padding-4 flex-column-container'>
                <Provider repoList={this.store}>
                    <>
                        <div>
                            <FilterPanel />
                        </div>
                        <div>
                            <RepoList />
                        </div>
                    </>
                </Provider>
            </div>
        </div>;
    }
}
export default (observer(Container));