import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Submenu from './components/Submenu.js';
import Videoplyr from './components/Videoplyr.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeDiseaseName = this.changeDiseaseName.bind(this);
    this.changeInterviewList = this.changeInterviewList.bind(this);
    this.changeCurrentInterview = this.changeCurrentInterview.bind(this);

    this.state = {
      disease_name: "",
      interview_list: [],
      currentInterview: [],
      subs: ["당뇨병", "유방암", "위암", "우울증", "호스피스 완화의료", "치매"],
    }
  }

  changeDiseaseName(disease_name) {
    this.setState({ disease_name });
  }
  changeInterviewList(interview_list) {
    this.setState({ interview_list });
  }
  changeCurrentInterview(currentInterview) {
    this.setState({ currentInterview });
  }

  render() {
    const subs = this.state.subs;
    const disease_name = this.state.disease_name;
    const interview_list = this.state.interview_list;
    const currentInterview = this.state.currentInterview;
    /*const videourl = this.state.videourl;*/
    var media = "http://api.roamgom.net/media/"
    const videopath = currentInterview.videopath;
    const path = media.concat(videopath);

    return (
      <div>
        <Menu
          error="Unable to mount image"
          subs={subs}
          onChangeDiseaseName={this.changeDiseaseName}
          onChangeCurrentInterview={this.changeCurrentInterview}
          onChangeInterviewList={this.changeInterviewList} />
        <Submenu
          interview_list={interview_list}
          disease_name={disease_name}
          onChangeCurrentInterview={this.changeCurrentInterview}
          onChangeInterviewList={this.changeInterviewList} />
        <Videoplyr
          currentInterview={currentInterview}
          disease_name={disease_name}
          videoUrl={path} />
      </div>
    );
  }
}
export default App;
