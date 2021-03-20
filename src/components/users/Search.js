import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state ={
        text: '',
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    // Submitting the form
    onSubmit = (e)=>{
        e.preventDefault();
        // Receiving the SUBMIT using the props
        if(this.state.text === ''){
            this.props.setAlert(' Please Enter Text', 'light');
        }else{
            this.props.searchUser(this.state.text);
            this.setState({text: '',})}
        }
    // Changes in the form
    onChange = (e)=>{
        // We are tageting the value in the input box. Aka the text
        // This is for single
        this.setState({
            text: e.target.value
        })    

        // This is for multiple -> for a full length forms
        // this.setState({
        //     [e.target.name]: e.target.value
        // })    
    }

    render() {
        const {showClear, clearUsers} = this.props
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        name='text'
                        placeholder='Search Users...'
                        value={this.state.text}
                        onChange={this.onChange}/>
                    <input 
                        type='submit' 
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>
                {showClear && 
                (<button 
                    className='btn btn-block'
                    onClick={clearUsers}> Clear</button>)
                }
            </div>
        )
    }
}

export default Search
