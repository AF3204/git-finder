import React, {Fragment, useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar.js'
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About.js';
import User from './components/users/User.js';
// import axios from 'axios';

import GithubState from './context/github/githubState'
/**
 * 2021-07-21: Section 5
 * Refactoring from Class to Component for useState
 */

// We are now using a class method
const App = () =>{

  // 2021-07-21: Initialising the useState.
  // 20210721: Remove setUsers
  // let [users, setUsers] = useState([])
  // let [user, setUser] = useState([])
  // let [repos, setRepos] = useState([])
  // let [loading, setLoading] = useState(false)
  let [alert, setAlert] = useState(null)

  /**
   * Lesson 1: Render returns the output
   * 1. For render() return, must only have one parent element
   * 2. However, the classname will be shown along with the content
   * 3. Fragments is the used to just display the content without the classname
   * 4. Now on ComponentDidMount and Lesson 14
   * */ 
  // user is an object
  // users is an array
  // state={
  //   users:[],
  //   user:{},
  //   repos:[],
  //   loading: false,
  //   alert: null
  // }

  //  1. Show the default.
  // async componentDidMount(){
  //   // console.log(123);
  //   // .then is the response of the Promise -> the original method
  //   // axios
  //   //   .get('https://api.github.com/users')
  //   //   .then(res =>console.log(res.data))
  //   // Before the response is received
  //   this.setState({users:[],loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   // After the response is received
  //   this.setState({users:res.data, loading: false})
  // }
   
  const foo = ()=> 'bar';

  // 2. If you search, this will display the new ones
  //  Serching the users.
  //  This is the endpoint
  // 20210717: Will be using useReducer
  // const searchUser = async text =>{
    
  //   // 2021-07-21: Change to setLoading
  //   // this.setState({users:[],loading: true});
  //   setLoading(true);
  //   // if(text.length > 1){
  //   //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
  //   //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
  //   //     // Once the axios comes back with a response, it will update the new users 
  //   //     // this.setState({users:res.data.items, loading: false})
        
  //   //     setUser(res.data.items)
  //   //     setLoading(false);
  //   // }else{
  //   //   setUser([])
  //   //   setLoading(false);
  //   // }
  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
  //   // Once the axios comes back with a response, it will update the new users 
  //   // this.setState({users:res.data.items, loading: false})
    
  //   setUsers(res.data.items)
  //   setLoading(false);
  // }

  // Get single Github user
  // 20210721: Moving this to state
  // const getUser = async (username)=>{
    
  //   setLoading(true);
    
  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    

  //   // Once the axios comes back with a response, it will update the new users 
  //   setUser(res.data)


  //   setLoading(false)
  // };

  // Lesson 24: Get user Repos
  // Get single Github user
  // const getUserRepos = async (username)=>{
  //   setLoading(true)
    
  //   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    

  //   // Once the axios comes back with a response, it will update the new users 
  //   // 20210716: Change to new
  //   // this.setState({repos:res.data, loading: false})
  //   setRepos(res.data)
  //   setLoading(false)
  // };

  // Clear States
  // Since it is single, no need curly bracket
  // 20210721 - Remove the clearUsers and showClear
  // const clearUsers = () => {
    
  //   // this.setState(({users:[], loading: false}))
  //   setUser([])
  //   setLoading(false)
  // }

  // Set Alert
  const showAlert= (msg,type)=>{
    // this.setState({alert:{msg,type}})
    setAlert({msg,type});
    
    // When setting timeout, null or zero everything else
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  // Lesson 9 and above
  // Commented on the 13th Mar 2021
  // render() {

  //   const name = 'Faizal';
  //   const loading = true;
  //   const showName = false;


  //   // Lesson 4: 'this.' is used to when a method is in the same function
  //   return (
  //     // Lesson 3: Fragment aka React.Fragment will only display the content
  //     <Fragment>
  //       <h1>Lesson 1 {name.toUpperCase()}</h1>
  //       <div className='App'>
  //         {/* Lesson 5: Using ternary operator */}
  //         {loading ? <h4>Loading ...  </h4>:
  //           <p>Hello {this.foo()}</p>  
  //         }
  //         {/* Lesson 6: Using true/false then  */}
  //         {/* If both are true */}
  //         <p>Test {showName && name}</p>
  //       </div>
  //     </Fragment>
  //   );
  //   // return (
  //   //   // Lesson 2: Must only have one parent element
  //   //   <div className="App">
  //   //     <h1>Lesson 1</h1>
  //   //   </div>
  //   // );
  // }

  // 10. Components, Props & PropTypes
  
  // render(){
    // const {users, loading, user,repos} = this.state;
  

  return(
    // Lesson 21: Route and Router
    <GithubState>
      <Router>
      <div className="App">
        {/* Send the title for the component */}
        <NavBar title="Github Finder" icon='fab fa-github'/>
        {/* <UserItem /> */}
        <div className="container">
          {/* Alert statement above */}
          {/* this.state.alert -> since you've setState, 
              no need to use the this.state -> removed */}
          <Alert alert={alert}/>
          <Switch>
            {/* The first page aka the main page */}
            <Route exact path='/' render={props=>(
              <Fragment>
                {/* 20210721 - Remove the clearUsers and showClear */}
                <Search 
                  // clearUsers={clearUsers}
                  // showClear={users.length > 0 ? true:false}
                  setAlert={showAlert}
                />
                <Users/>
              </Fragment>
            )} />
            {/* Creating the second Route aka the second page */}
            <Route exact path='/about' component={
              About
            } />
            {/* Using props here, because we have things to pass in. 
                About is a component, so we can use the component element */}
            {/* Spread operators will iterate through the array */}
            {/* Login will be passed to know the users */}
            {/* <Route exact path='/user/:login' render={props=>(
              // 20210721: getUser and user is from Context
              <User {...props}
                // getUser={getUser}
                // user={user}
                // getUserRepos={getUserRepos}
                // repos={repos}
              />
              )} /> */}
              {/* Since we removed everything: Just use component only */}
              <Route exact path='/user/:login' component={User} />

          </Switch>
          {/* You must always put in the eclared functions/props for it to work */}
          {/* Lesson 21: Moving Search and Users to the fragment */}
          {/* <Search 
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true:false}
            setAlert={this.setAlert}
          /> */}
          {/* <Users loading={loading} users={users}/> */}
        </div>
      </div>
    </Router>
    </GithubState>
  )
  // }

}
 
export default App;
