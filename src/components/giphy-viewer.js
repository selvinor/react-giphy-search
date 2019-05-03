import React from 'react';
import { connect } from 'react-redux';
import GifList from './giphy-list';
import GifSearch from './giphy-search';
import { searchGifs } from '../actions';
import Spinner from 'react-spinkit';

export class GifViewer extends React.Component {
  constructor( props ){
    super( props );
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  renderResults() {
    if (this.props.loading) {
        return <Spinner spinnername="circle" fadeIn='none' />;
    }

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }
// console.log('this.props.gifs: ', this.props.gifs);
//     const gifs = this.props.gifs.map((gif, index) =>
//         <li key={index}>{gif}</li>
//     );


    // return (
    //     <ul className="giphy-search-results">
    //         {gifs}
    //     </ul>
    //);
}
  handleTermChange(term) {
    //when term changes, issue action to update state and trigger render
    console.log('giphy.viewer | handleTermChange | term: ', term);
//    this.props.dispatch(searchGifs(term));
    this.props.searchGifs(term);
  }
 
  render() {

    const gifs = this.props.gifs;
    return (
      <div>
          <GifSearch onTermChange={this.handleTermChange} />
          <GifList gifs={gifs} />
      </div>
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