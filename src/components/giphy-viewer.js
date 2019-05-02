import React from 'react';
import {connect} from 'react-redux';
import GiphyList from './giphy-list';
import GiphySearch from './giphy-search';
import {searchGiphys} from '../actions';

export class GiphyViewer extends React.Component {
  
  handleTermChange(term) {
    //when term changes, issue action to update state and trigger render
    console.log('handleTermChange this.props: ', this.props);
        this.props.dispatch(searchGiphys(this.input.value));
  }
 
  render() {
    return (
      <div>
          <GiphySearch onTermChange={this.handleTermChange} />
          <GiphyList gifs={this.props.gifs} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {

  return {
    searchGiphys: () => {
      dispatch(searchGiphys())
    }

  };
};
const mapStateToProps = state => ({
  gifs: state.gifs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphyViewer);