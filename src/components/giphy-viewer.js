import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import GifList from './giphy-list';
import GifSearch from './giphy-search';
import { searchGifs } from '../actions';
import Spinner from 'react-spinkit';
import '../index.css'; 
export class GifViewer extends React.Component {
  constructor( props ){
    super( props );
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(term) {
    //when term changes, issue action to update state and trigger render
    this.props.searchGifs(term);
  }
 
  render() {

    const gifs = this.props.gifs;
    return (
      <Fragment >
        <h2>GIF VIEWER</h2>
        <GifSearch onTermChange={this.handleTermChange} />
        <GifList gifs={gifs} />
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {

  return {
    searchGifs: (term) => {
      dispatch(searchGifs(term))
    }

  };
};
const mapStateToProps = state => ({
  gifs: state.gifs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(GifViewer);