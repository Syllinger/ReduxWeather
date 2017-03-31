import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};

    //this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day foreccast in your favourite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}