
import React, { Component } from 'react';

//const Component = React.Component;

// const SearchBar = () => {
//     return <input />
// };


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: null };
  }


  render() {
    //return <input onChange={this.onInputChange}/>
    return (
      <div className="search-bar">
        <input
          className="search-bar item"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
    //}
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;