import React, { Component } from 'react';
import Repo from "./repo";
export default class RepoList extends Component {

    state = {
        repoList: []
    };

    componentDidMount() {
        fetch('https://api.github.com/users/supreetsingh247/repos')
            .then(res => res.json())
            .then(result => {
                const repoList = result.map(res => {
                    if (res.name === 'first-contributions') {
                        debugger
                    }
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
        return (<div className='repo-container'>
            {
                this.state.repoList.map(repo => <Repo id={repo.id} {...repo} />)
            }
        </div>);
    }
}