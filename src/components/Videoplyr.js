import React, { Component } from "react";
import './Video.css';
import './Menu.js';

class Videoplyr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.videoUrl
    };
  }
  changeSource(url) {
    return () => {
      this.setState({
        source: url
      });
      document.getElementById("player").load();
      this.Clip(url);
    }
  }
  Clip(url) {
    return (
      <source
        src={url}
        type="video/mp4"
      />
    )
  }
  stopplay(url){
    if(url !== this.state.source){
      document.getElementById("player").pause();
    }
  }
  render() {
    const currentInterview = this.props.currentInterview;
    const videoURL = this.props.videoUrl;

    return (
      <React.Fragment>
        <div id="container" onFocus={this.changeSource(videoURL)} onBlur={this.stopplay(videoURL)}>
          <div id="videop">
            <div className="title">
              <br />
              <strong className="strong">&emsp; [성별]</strong>&ensp;
                <span className="main">{currentInterview.name}</span>
              <br /><br />
              <strong className="strong">&emsp; [인터뷰 당시 연령]</strong>&ensp;
                <span className="main">{currentInterview.interviewage}</span>
              <br /><br />
              <strong className="strong">&emsp; [진단 시 연령]</strong>&ensp; <span className="main">{currentInterview.age}</span>
              <br /><br />
            </div>
            <div className="video">
              <link
                rel="stylesheet"
                href=" https://cdn.plyr.io/3.5.6/plyr.css "
              />
              <script src=" https://cdn.plyr.io/3.5.6/plyr.js ">
              </script>
              <video
                width="540px"
                height="320px"
                poster="/path/to/poster.jpg"
                id="player"
                ref="player"
                playsInline
                controls
                controlsList="nodownload"
               >
                <source
                  src={videoURL}
                  type="video/mp4"
                />
                <track
                  kind="captions"
                  label="English captions"
                  src="/path/to/captions.vtt"
                  srcLang="en"
                  default />
              </video>
            </div>
            <div className="script"><p><strong>[Script about Video Player]</strong><br />{currentInterview.subtitle}</p></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Videoplyr;
