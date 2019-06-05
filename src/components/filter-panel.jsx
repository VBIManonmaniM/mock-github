import React, { Component } from 'react';
import '../css/filter-panel.css';
export default class FilterPanel extends Component {
    render() {
        return (<div className='filter-panel flex-row-container'>
            <div class="search-repo">
                <input type="text" className="form-control width-full" placeholder="Find a repository…" />
            </div>
            <div class="repo-type">
                <select className='form-control'>
                    <option value='all'>All</option>
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                    <option value='sources'>Sources</option>
                    <option value='forks'>Forks</option>
                    <option value='archived'>Archived</option>
                    <option value='mirrors'>Mirrors</option>
                </select>
            </div>
            <div class="repo-language">
                <select className='form-control'>
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
                <a href="/new" class="text-center btn btn-primary ml-3">
                    <svg fill='rgb(255, 255, 255)' color='rgb(255, 255, 255)' class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                    <span>New</span>
                </a>
            </div>
        </div>)
    }
}
