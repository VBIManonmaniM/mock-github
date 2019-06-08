import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import '../css/filter-panel.css';
class FilterPanel extends Component {

    repoTypeChange = e => {
        let { repoList } = this.props;
        const value = e.target.value;
        repoList.forEach(element => {
            if (value === 'all' || element[value]) {
                element.repoTypeFilter = true;
            } else {
                element.repoTypeFilter = false;
            }
        });
    }

    languageChange = (e) => {
        let { repoList } = this.props;
        const value = e.target.value;
        repoList.forEach((element, index) => {
            if (value === 'all' || (element.language && element.language.toLowerCase().includes(value))) {
                element.languageFilter = true;
            } else {
                element.languageFilter = false;
            }
        });
    }

    onChange = (e) => {
        let { repoList } = this.props;
        const value = e.target.value;
        repoList.forEach(element => {
            if (element.name.toLowerCase().includes(value.toLowerCase())) {
                element.nameFilter = true;
            } else {
                element.nameFilter = false;
            }
        });
    }

    render() {
        return (<div className='filter-panel flex-row-container'>
            <div className="search-repo">
                <input type="text" className="form-control width-full default-font" placeholder="Find a repository…" onChange={this.onChange} />
            </div>
            <div className="repo-type">
                <select className='form-control' onChange={this.repoTypeChange}>
                    <option value='all'>All</option>
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                    <option value='sources'>Sources</option>
                    <option value='fork'>Forks</option>
                    <option value='archived'>Archived</option>
                    <option value='mirror'>Mirrors</option>
                </select>
            </div>
            <div className="repo-language">
                <select className='form-control' onChange={this.languageChange}>
                    <option value='all'>All</option>
                    <option value='javascript'>Javascript</option>
                    <option value='typescript'>Typescript</option>
                    <option value='css'>CSS</option>
                    <option value='html'>HTML</option>
                    <option value='python'>Python</option>
                    <option value='java'>Java</option>
                </select>
            </div>
            <div className="new-repo">
                <a href="/new" className="text-center btn btn-primary ml-3">
                    <svg fill='rgb(255, 255, 255)' color='rgb(255, 255, 255)' className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                    <span>New</span>
                </a>
            </div>
        </div>)
    }
}

export default inject('repoList')(observer(FilterPanel));

