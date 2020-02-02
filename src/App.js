import React from 'react';
import CardList from './CardList'; 
import { robots } from './robot'; 
import SearchBox from './SearchBox';

// state : desc of object, able to change >> props 


class App extends React.Component {
    constructor() {
        super() // to use this 
        this.state = { // that can be changed and affect apps 
            robots: [],
            searchfield: '' //2 states
        }
    }

    componentDidMount() {
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robots: users})})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
 
    }
    render() {
        const { robots, searcfield} = this.state;
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) // this.searchfield = undefined 라서 toLowerCase error 
        return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
            // parent App had to modify leaves 
        );
    }

}

export default App;