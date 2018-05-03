import React, { Component } from 'react';

//Since we want this component to communicate with other component
//We make it a class compnent instead of a functional component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    
    render() {

        //Defines an anonymous function with an event parameter
        //That sets the state of the value of input field each time it has changed
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;