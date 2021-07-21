/**
 * For lesson 24: We will be doing prop drilling where we drill into a particular
 * component when we insert into another JS file
 * */ 
import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext.js'

/**
 * 2021-07-21: Section 5
 * Refactoring from Class to Component for Hook
 */

// 20210716: Converting to component
// Instead of props, we can destructuring a little
// 20210716: If main: (props)
// 20210716: If destructuring: ({user})
// 20210716: Can eliminate the this.props
const User = ({match}) =>{
    const githubContext = useContext(GithubContext)
    
    // user, loading,repos, getUserRepos,  and getUser no longer from props
    const {loading,user,repos, getUser, getUserRepos } = githubContext

    // 20210716: We will be replacing this with useEffect
    // componentDidMount() {
    //     this.props.getUser(this.props.match.params.login )
    //     // Added props for UserRepos
    //     this.props.getUserRepos(this.props.match.params.login)
    // }
    // 20210716:UseEffect gets the updated value if there is any change
    // 20210716:  [] if for all. You can specify it
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])

    // render() {
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
        } = user;

        // const {loading, repos} = this.props;
        
        if (loading === true) return <Spinner />;

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
                        <li>
                            <strong>URL:</strong> {html_url}
                        </li>
                        <li>
                            <strong>Repos:</strong> {public_repos}
                        </li>
                    </ul>
                </div>
                {/* Making a checkbox */}
                

                <div className='card text-center'>
                    <div className='badge badge-success'>Followers: {followers}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-light'>Public Gists: {public_gists}</div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
            
    // }
}

// 20210721 - Removing the props that is being used in the Context
// User.propTypes = {
//     // loading: PropTypes.bool,
//     // user: PropTypes.object.isRequired,
//     // getUser: PropTypes.func.isRequired,
//     getUserRepos: PropTypes.func.isRequired,
//     repos: PropTypes.array.isRequired,
// }

export default User
