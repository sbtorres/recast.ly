import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: exampleVideoData[0], 
      vidList: [exampleVideoData[0], exampleVideoData[1], exampleVideoData[2], exampleVideoData[3], exampleVideoData[4]]}
  }

  onClick(index) {
    this.setState({
      player: this.state.vidList[index]
    });
  }

  onSearchClick(event) {
    var option = {
      query: document.getElementsByClassName('form-control')[0].value,
      max: 5,
      key: YOUTUBE_API_KEY,
    }

    searchYouTube(option, 
      (data) => {this.setState( {player: data.items[0], vidList: [data.items[0], data.items[1], data.items[2], data.items[3], data.items[4]] } )},
      () => console.log('Error, did not access data as requested'));
  }

  componentDidMount() {
    var initialOption= {
      query: 'cute cat video',
      max: 5,
      key: YOUTUBE_API_KEY,
  };

    searchYouTube(initialOption, 
    (data) => {this.setState( {player: data.items[0], vidList: [data.items[0], data.items[1], data.items[2], data.items[3], data.items[4]] } )},
    () => console.log('Error, did not access data as requested'));
  }

  render() {
    return(
      <div>
        <h1><span className="titleText">  RogerTube  </span></h1>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><em><Search searchRequest ={this.onSearchClick.bind(this)} /></em></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video = {this.state.player}/></em> </h5></div>
          </div>
          <div className="col-md-5">
            <h5><VideoList videos = {this.state.vidList} click = {this.onClick.bind(this)}/></h5>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
