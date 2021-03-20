// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

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
