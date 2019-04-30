import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchGiphys} from '../actions';

export class GiphySearch extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnername="circle" fadeIn='none' />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const giphys = this.props.giphys.map((giphy, index) =>
          <li key={index}>{giphy}</li>
        );


          return (
              <ul className="giphy-search-results">
                  {giphys}
              </ul>
          );
    }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
console.log('dispatching searchGiphys');
        this.props.dispatch(searchGiphys(this.input.value));
    }

    render() {
        return (
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
    giphys: state.giphys,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(GiphySearch);