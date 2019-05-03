import React from 'react';
import { connect } from 'react-redux';
import { searchGifs } from '../actions';

export class GifSearch extends React.Component {


search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }

    this.props.dispatch(searchGifs(this.input.value));
}
 
    render() {
        return (
        <div className="giphy-search">
        <form onSubmit={(e) => this.search(e)}>
            <input type="search" ref={input => this.input = input} />
            <button>Search</button>
        </form>
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