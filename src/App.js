import React from 'react';
import CardList from './CardList'; 
import { robots } from './robot'; 
import SearchBox from './SearchBox';
import { setSearchField } from './actions';
import { connect } from 'react-redux';
// state : desc of object, able to change >> props 

const mapStateToProps = state => {
    return {
        searchField: state.searchField// reducer 하나 니까 searchRobots 의 searchField 라고 해주직않아도 됨 
    }
}

// dispatch triggers action
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor() {
        super() // to use this 
        this.state = { // that can be changed and affect apps 
            robots: []
        }
    }

    componentDidMount() {
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robots: users})})
    }

    //onSearchChange = (event) => {
    //    this.setState({ searchfield: event.target.value })
 
    //}
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        }) // this.searchfield = undefined 라서 toLowerCase error 
        return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
            // parent App had to modify leaves 
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect : higher order function return another function
// 나 state랑 action 을 듣고 있고 app 으로 보낼거야