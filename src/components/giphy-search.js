import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { searchGifs } from '../actions';

export class GifSearch extends React.Component {
  renderResults() {
    if (this.props.loading) {
        return <Spinner spinnername="circle" fadeIn='none' />;
    }

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }
console.log('this.props.gifs: ', this.props.gifs);
    const gifs = this.props.gifs.map((gif, index) =>
        <li key={index}>{gif}</li>
    );


    return (
        <ul className="giphy-search-results">
            {gifs}
        </ul>
    );
}

search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
        return;
    }

    this.props.dispatch(searchGifs(this.input.value));
}

  // onInputChange(term) {
  //   this.props.onTermChange(term);
  // }
 
    render() {
        return (
            // <div className="giphy-search">
            //   <input onChange={event => this.onInputChange(event.target.value)} />
            // </div>
            <div className="giphy-search">
            <form onSubmit={(e) => this.search(e)}>
                <input type="search" ref={input => this.input = input} />
                <button>Search</button>
            </form>
            <ul className="giphy-search-results">
                {this.renderResults()}
            </ul>
        </div>

        );
    }
}
const mapStateToProps = state => ({
  gifs: state.gifs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(GifSearch);