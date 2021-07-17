/**
 * 20210716: Where all the reduced codes will be done here
 */

import React, {useReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import GithubReducer from './GithubState';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GER_USER,
    GER_REPOS
} from '../types.js'

const GithubState = props => {
    // Global values
    const initialState = {
        users:{},
        user:{},
        repos:[],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState, init)

    return <githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: repos.repos,
            loading:state.loading
        }}
    >
        {props.children}

    </githubContext.Provider>
}