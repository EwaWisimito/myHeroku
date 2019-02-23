import React, { Component } from 'react';




class UsersContainer extends Component {

    state = {
        beers: []

    }

    removeBeers = (beerId) => {
        const url = `https://beers-bunkier.firebaseapp.com/api/v1/beers/${beerId}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => {
                this.newBeers()
            })
    }

    handleRemove = (beerId) => {
        this.removeBeers(beerId);
      }

    newBeers() {
        fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const beersArray = [];
                Object.entries(data.beers).forEach(elem => {
                    const newBeer = {
                        id: elem[0],
                        ...elem[1]
                    }
                    beersArray.push(newBeer);
                });
                 this.setState({ beers: beersArray })
            });

    }

    componentDidMount() {
        this.newBeers()
    }


    render() {
        return (
            <div>
                
                    <h1>My Beers List</h1>
                    {this.state.beers.map(beer => {
                        return(
                        <div key={`beer-${beer.id}`}>
                            {beer.name}
                            <button onClick={() => this.handleRemove(beer.id)}>Remove</button>
                        </div>

                    )
                    })}
            </div>
        )
    }
}


export default UsersContainer