import React, { Component } from 'react';




const users = [
    {
        id: 1,
        name: 'Ann'
    },
    {
        id: 2,
        name: 'John'
    },
    {
        id: 3,
        name: 'Mark'
    }
]

class UsersContainer extends Component {


    render() {
        return (
            <div>
                <div>
                    {users.map((user, index) => (
                        <div key={index}>{user.name}</div>

                    )
                    )}
                </div>
            </div>
        )
    }
}


export default UsersContainer