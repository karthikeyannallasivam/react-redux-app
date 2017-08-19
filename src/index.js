import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDtU67Ta7NW6AZJc1W-W0Fl5Jlr2b2I-Ps';

// create a component which should produce some html
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surf boards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const video_search = _.debounce((term) => {this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearchTermChange={video_search} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}
// put the component generated html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));