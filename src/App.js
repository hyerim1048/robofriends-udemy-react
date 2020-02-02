import React from 'react';
import CardList from './CardList'; 
import { robots } from './robot'; 
import SearchBox from './SearchBox';

// state : desc of object, able to change >> props 


class App extends React.Component {
    constructor(props) {
        super() // to use this 
        this.state = { // that can be changed and affect apps 
            robots: robots,
            searchfield: '' //2 states
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
 
    }
    render() {
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