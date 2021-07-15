// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
/* You use curly braces if you need a certain item.
 Else, you want the default aka everything, use the normal 
 default */
import {Link} from 'react-router-dom'

// Lesson 12: THe original class code
// class NavBar extends Component {
  
//   // IF no props is defined, it will use this default
//   static defaultProps={
//     title: 'Github Props',
//     icon: 'fab fa-github'
//   };

//   // PropTypes define what is the prop type format should be. String, Int 
//   // make sure the formatting is correct aka camelCase
//   static propTypes={
//     title: PropTypes.string.isRequired,
//     // icon: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         {/* this.props receives from other files or components */}
//         <h2>
//           <i className={this.props.icon} alt="github" ></i> {this.props.title}
//         </h2>
//       </nav>
//     )
//   }
// }

const NavBar = ({icon,title}) => {
  return (
    <nav className="navbar bg-primary">
      {/* this.props receives from other files or components */}
      {/* Always remember is using props, no longer need this.props */}
      <h2>
        <i className={icon} alt="github" /> {title}
      </h2>
      <ul>
        <li> <Link to='/'> Main </Link> </li>
        <li> <Link to='/about'> About </Link> </li>
        {/* This method allows you to go to the other pages, but it refreshes. 
        Hence, any searches and/or changes made in the previous page will be erased. 
        Therefore, we're gonna use Link that solves this issue */}
        {/* <li>
          <a href="/"> main</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li> */}
      </ul>
    </nav>
  )
}
// IF no props is defined, it will use this default
NavBar.defaultProps={
  title: 'Github Props',
  icon: 'fab fa-github'
};

// PropTypes define what is the prop type format should be. String, Int 
// make sure the formatting is correct aka camelCase
NavBar.propTypes={
  title: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired
};

export default NavBar
