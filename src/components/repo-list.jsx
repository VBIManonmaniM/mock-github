import React, { Component } from 'react';
import { inject , observer} from "mobx-react";

import Repo from "./repo";

class RepoList extends Component {

    render() {
        debugger
        let { repoList = [] } = this.props;
        repoList = repoList.filter(repo => repo.languageFilter && repo.nameFilter && repo.repoTypeFilter);
        return (<div className='repo-container'>
            {
                repoList.map(repo => <Repo id={repo.id} {...repo} />)
            }
        </div>);
    }
}

export default inject('repoList')(observer(RepoList));