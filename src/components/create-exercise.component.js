import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            exerciseName: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }

        //bind the functions to the class
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    //this function will be called before anything is displayed on the page
    componentDidMount() {
        //test data for the dropdown menu
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        })
    }

    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username">
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;  
                                    })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Exercise Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            onChange={this.handleInputChange}
                            name="exerciseName"
                            value={this.state.exerciseName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            onChange={this.handleInputChange}
                            name="description"
                            value={this.state.description}>
                            
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}