import React, { Component } from 'react';
import Repo from "./repo";
export default class RepoList extends Component {
    render() {
        return (<div className='repo-container'>
            <Repo />
            <Repo />
            <Repo />
            <Repo />
            <Repo />
        </div>);
    }
}