/**
 * For lesson 24: We will be doing prop drilling where we drill into a particular
 * component when we insert into another JS file
 * */ 
import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login )
        // Added props for UserRepos
        this.props.getUserRepos(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }

    render() {
        const {
            name, 
            avatar_url,
            location,
            html_url,
            public_repos,
            public_gists,
            hireable,
            bio,
            blog,
            login,
            followers,
        } = this.props.user;
        const {loading, repos} = this.props;
        
        if (loading === true) return <Spinner />;
        
        console.log(repos);

        return <Fragment>
            <Link to={'/'} className='btn btn-light'>
                Back to Main Page
            </Link>
            {/* Is this person hireable */}
            {/* Using ternery operator */}
            Hireable:{''}
            {hireable 
                ?(<i className='fas fa-check text-success'/>)
                :(<i className='fas fa-check text-success'/>)
            }
                
            <div className='card grid-2'>
                <div className='card-header'>
                    Card testing
                </div>
                <div className="all-center">

                </div>
                {/* Image box */}
                <img 
                    src={avatar_url}
                    alt = 'Avatar Pic'
                    className='square'
                    style={{width:'150px'}}
                />
                <h1>{name}</h1>
                
                <p>Location:{location}</p>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>    
                        <p>{bio}</p>
                        Hireable: {''}
                        {hireable ? <i className="fas fa-check text-success"/>:
                            <i className="fas fa-times text-warning"/>}
                        
                
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1"> Go to GitHub</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username:</strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Blog:</strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
                {/* Making a checkbox */}
                
                URL: {html_url}
                Repos: {public_repos}

                <div className='card text-center'>
                    <div className='badge badge-success'>Followers: {followers}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-light'>Public Gists: {public_gists}</div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
            
    }
}

export default User
