import React from 'react';


export default class GiphySearch extends React.Component {


  onInputChange(term) {
//    this.setState({term});
    this.props.onTermChange(term);
  }
 
    render() {
        return (
            <div className="giphy-search">
              <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}