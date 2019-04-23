import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import searchYouTube from '../lib/searchYouTube.js';

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

  onSearchClick() {
    console.log('hi')
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search searchRequest ={this.onSearchClick.bind(this)} /></em> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video = {this.state.player}/></em> </h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.vidList} click = {this.onClick.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
