import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext.js'

// const Users=({users, loading})=>{ -> Removing the props
const Users=()=>{

    // 20210721: initialising with useContext
    const githubContext = useContext(GithubContext)
    
    // 20210721: Destructuring the githubContext
    const {users, loading} = githubContext

    if(loading){
        return <Spinner/>
    }else{

    // 1(a). Create an array
    // 1(b). We no longer need this state as we are getting from the App.js itself
    // state = {
    //     users:[
    //     {
    //         id: '1',
    //         login:'mojombo',
    //         avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
    //         url:"https://api.github.com/users/mojombo"
    //     },
    //     {
    //         id: 'id',
    //         login:'defunkt',
    //         avatar_url:'https://avatars.githubusercontent.com/u/2?v=4',
    //         url:"https://api.github.com/users/defunkt"
    //     },
    //     {
    //         id: 'id',
    //         login:'pjhyett',
    //         avatar_url:'https://avatars.githubusercontent.com/u/3?v=4',
    //         url:"https://api.github.com/users/pjhyett"
    //     }]
    // };
    // 2. Loop through
    
    // Since it is no longer a class
    // render() {
    //     return (
    //         // Map is a high-array order method 
    //         // We are now passing into UserItem as props
    //         // User holds the details, and the UserItem is the props
    //         <div style={userStyle}>
    //             {/* Since we are now taking from props */}
    //             {/* {this.state.users.map(user=>(
    //               <UserItem key={user.id} user = {user}/>
    //             ))} */}
    //             {this.props.users.map(user=>(
    //               <UserItem key={user.id} user = {user}/>
    //             ))}
    //         </div>
    //     )
    // }
        return (
            // Map is a high-array order method 
            // We are now passing into UserItem as props
            // User holds the details, and the UserItem is the props
            <div style={userStyle}>
                {/* Since we are now taking from props */}
                {/* {this.state.users.map(user=>(
                <UserItem key={user.id} user = {user}/>
                ))} */}
                {users.map(user=>(
                <UserItem key={user.id} user = {user}/>
                ))}
            </div>
        )
    }
}

// Inline styling
const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users
