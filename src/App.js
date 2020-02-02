import React from 'react';
import CardList from './CardList'; 
import { robots } from './robot'; 
import SearchBox from './SearchBox';
import { setSearchField, requestRobots } from './actions';
import { connect } from 'react-redux';

// state : desc of object, able to change >> props 

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending, 
        error: state.requestRobots.error
    }
}

// dispatch triggers action
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        }) // this.searchfield = undefined 라서 toLowerCase error 
        return isPending ? 
        <h1>Loading</h1> :
        (
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