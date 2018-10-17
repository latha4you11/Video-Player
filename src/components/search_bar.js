import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term} //This makes it a controlled component.
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

     onInputChange(term) {
        //The event object(term) has information specific to the event that occured.
        //contains svery specific properties.
        this.setState({term});
        this.props.onSearchTermChange(term);
     }
}

export default SearchBar;
