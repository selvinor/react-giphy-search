import React from 'react';
import { connect } from 'react-redux';

export class GiphySearch extends React.Component {


  onInputChange(term) {
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
const mapStateToProps = state => ({
  gifs: state.gifs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(GiphySearch);