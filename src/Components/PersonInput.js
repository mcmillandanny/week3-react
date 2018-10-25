import React from 'react';
import axios from 'axios';


export default class PersonInput extends React.Component {
    state = {
        name: '',
    };

    userInput = event => {
        this.setState({ name: event.target.value});
    }


    postName = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        axios.get(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
            console.log(res);
            
        })

        
    };

 

    render() {
        return (
            <form onSubmit={this.postName}>
                <label>
                    Person Name: 
                    <input type="text" name='name' onChange={this.userInput}/> 
                </label>
                <button type="submit">Add</button>
            </form>
        );
    }
}
