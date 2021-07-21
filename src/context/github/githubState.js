/**
 * 20210716: Where all the actions are going
 *  to executed here
 *  Initial request will come here first
 */
/**
 * 20210716: Where all the reduced codes will be done here
 */

import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';

import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types.js'

const GithubState = props => {
    // Global values
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading: false
    }

    /**
     * state: useReducer is used to store and update states, just like the useState Hook.
     * dispatch: useReducer returns an array that holds the current state value and
     *  a dispatch function, to which you can pass an action and later invoke.
     * state is immutable
     *  */

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Search Users
    const searchUser = async text =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
            ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
            ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        // Dispatching the type and the payload
        dispatch({
            type: SEARCH_USER,
            payload:res.data.items
        })
    };

    // Get User
    const getUser = async (username)=>{
        
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        // Dispatching with payload
        dispatch({type:GET_USER, payload:res.data})
    };

    // Get Repos
    // 20210721: Initialising the Repos
    const getUserRepos = async (username)=>{
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        // Once the axios comes back with a response, it will update the new users 
        // 20210716: Change to new
        // this.setState({repos:res.data, loading: false})
        // setRepos(res.data)
        // setLoading(false)
        dispatch({type:GET_REPOS, payload:res.data})
    };

    // Clear Users -> Using dispatch
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    // Set Loading -> Using dispatch to send the content
    const setLoading = () =>dispatch({type: SET_LOADING})
        return <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading:state.loading,
                clearUsers,
                searchUser,
                getUser,
                getUserRepos
            }}
        >
            {props.children}

        </GithubContext.Provider>
}

export default GithubState;