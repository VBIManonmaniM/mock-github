import React, { Component } from 'react';
import Repo from "./repo";
export default class RepoList extends Component {

    render() {
        const { repoList = [] } = this.props;
        return (<div className='repo-container'>
            {
                repoList.map(repo => <Repo id={repo.id} {...repo} />)
            }
        </div>);
    }
}