import React, { Component } from 'react';
import '../css/repo.css'

export default class repo extends Component {
    render() {
        return <div className='border-bottom flex-column-container'>
            <div>
                <h3>
                    <a href="/VBIManonmaniM/BiFrost">
                        BiFrost</a>
                    <span class="label label-outline">Private</span>
                </h3>
            </div>
            <div class="forked-from">
                <span class="default-font">
                    Forked from <a class="muted-link" href="/visualbis/BiFrost">visualbis/BiFrost</a>
                </span>
            </div>
            <div className='description'>
                <p class="default-font" itemprop="description">
                    DSX Suite
                </p>
            </div>
            <div className='flex-row-container'>
                <span class="default-font programming-language">
                    <span className="repo-language-color"></span>
                    <span className="programmingLanguage">JavaScript</span>
                </span>
                <span>
                    <a class="muted-link mr-3" href="/VBIManonmaniM/BiFrost/network/members">
                        <svg aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        <span className='fork default-font'>13</span>
                    </a>
                </span>
                <span className='default-font'>
                    Updated on Apr 27
                </span>
            </div>
        </div>
    }
}