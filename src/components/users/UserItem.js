// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


// Lesson 12: We are now changing a class into a component

// class UserItem extends Component {
    
//     // 1(a). Hardcoding the state right now
//     // 1(b). since we're now using Users, no need for this state
//     // state = {
//     //     id: 'id',
//     //     login:'mojombo',
//     //     avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
//     //     url:"https://api.github.com/users/mojombo"
//     // };
//     render() {
//         // 2(a).Initialising this, so that we don't have to use this.state so many times
//         // const {login, avatar_url,html_url} = this.state;

//         // 2(b). Since we have props, we change from state to props
//         const {login, avatar_url,html_url} = this.props.user;
//         return (
//             <div className='card text-center'>
//                 <img 
//                     src={avatar_url}
//                     alt = ''
//                     className='round-img'
//                     style={{width:'60px'}}
//                 />
//                 {/* <h3>{this.state.login}</h3> <- This was the original*/}
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} 
//                         className='btn btn-darjk btn-sm-my-1'> More</a>
//                 </div>
//             </div>
//         )
//     }
// }

// When using class, you need the render. Now with component, no more. and.. you don't need to declare the compenent above
// Also, just pass props for the items
// const UserItem = (props) =>{
//     // Change this.props to props
//     const {login, avatar_url,html_url} = props.user;
//     return (
//         <div className='card text-center'>
//             <img 
//                 src={avatar_url}
//                 alt = ''
//                 className='round-img'
//                 style={{width:'60px'}}
//             />
//             {/* <h3>{this.state.login}</h3> <- This was the original*/}
//             <h3>{login}</h3>
//             <div>
//                 <a href={html_url} 
//                     className='btn btn-darjk btn-sm-my-1'> More</a>
//             </div>
//         </div>
//     )
// }
// Further refactoring
const UserItem = ({user:{login, avatar_url,html_url}}) =>{
    // Change this.props to props
    // const {login, avatar_url,html_url} = props.user;
    return (
        <div className='card text-center'>
            <img 
                src={avatar_url}
                alt = ''
                className='round-img'
                style={{width:'60px'}}
            />
            {/* <h3>{this.state.login}</h3> <- This was the original*/}
            <h3>{login}</h3>
            <div>
                <a href={html_url} 
                    className='btn btn-darjk btn-sm-my-1'> More</a>
            </div>
        </div>
    )
}

// Check out the short code ptor, ptar etc
UserItem.propTypes={
    user: PropTypes.object.isRequired,
}

export default UserItem
