import React, { Component } from 'react';
import '../css/repo.css'

export default class repo extends Component {
    render() {
        const {
            updated_at,
            isPrivate,
            language,
            forks_count,
            description,
            name
        } = this.props;
        return <div className='border-bottom flex-column-container'>
            <div>
                <h3>
                    <a href="/VBIManonmaniM/BiFrost">
                        {name}</a>
                    {
                        isPrivate ? <span className="label label-outline">Private</span> : null
                    }
                </h3>
            </div>
            <div className="forked-from">
                <span className="default-font">
                    Forked from <a className="muted-link" href="/visualbis/BiFrost">visualbis/BiFrost</a>
                </span>
            </div>
            <div className='description'>
                <p className="default-font">
                    {description}
                </p>
            </div>
            <div className='flex-row-container'>
                <span className="default-font programming-language">
                    <span className="repo-language-color"></span>
                    <span className="programmingLanguage">{language}</span>
                </span>
                <span>
                    <a className="muted-link mr-3" href="/VBIManonmaniM/BiFrost/network/members">
                        <svg aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        <span className='fork default-font'>{forks_count}</span>
                    </a>
                </span>
                <span className='default-font'>
                    Updated on {updated_at}
                </span>
            </div>
        </div>
    }
}