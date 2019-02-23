import React, { Component } from 'react';



class Form extends Component {

    state = {
        name: '',
        description: '',
        imageUrl: ''
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        fetch('https://beers-bunkier.firebaseapp.com/v1/api/beers', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })

    }


    render(){
        return(
            <div>
                <div>
                    Name:  <input onChange={this.handleChange} type="text" name ="name" />
                </div>
                <div>
                    Description:  <input onChange={this.handleChange}  type= "text" name ="description" />
                </div>
                <div>
                    mgUrl:  <input onChange={this.handleChange}  type= "text" name ="imgUrl" />
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        )
    };
};

export default Form