import React, { Component } from 'react';




class UsersContainer extends Component {

    state = {
        users: {
            results: []
        }
    }

    newUser() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                return this.setState({ users: data })
            });
        
    };

    componentDidMount() {
        this.newUser()
    }


    render() {
        return (
            <div>
                <div>
                    <h1>My Users List</h1>
                    {this.state.users.results.map((user, index) => (
                        <div key={index}>{user.name.first}</div>

                    )
                    )}
                </div>
            </div>
        )
    }
}


export default UsersContainer