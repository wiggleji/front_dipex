import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './Menu.css';

class Submenu extends Component {
  constructor(props) {
    super(props);
    this.changeInterviewList = this.changeInterviewList.bind(this);
    this.changeCurrentInterview = this.changeCurrentInterview.bind(this);
  }

  changeInterviewList(data) {
    console.log(data);
    this.props.onChangeInterviewList(data);
  }

  changeCurrentInterview(e) {
    console.log(e.target.dataset)
    this.props.onChangeCurrentInterview(e.target.dataset);
  }

  async getInterviewList() {
    const data = await axios.get(`http://api.roamgom.net/api/interview/${this.props.disease_name}/`)
    this.changeInterviewList(data.data.results);
  }
  async getInterviewListByAge() {
    const data = await axios.get(`http://api.roamgom.net/api/interview/${this.props.disease_name}/age/`)
    this.changeInterviewList(data.data.results);
  }

  render() {
    const interview_list = this.props.interview_list;
    const interviewList = interview_list.map((interview_list, index) => (<a className="item" href key={index} data-disease_name={interview_list.disease.disease_name} data-name={interview_list.person.name} data-interviewage={interview_list.interviewee_age} data-age={interview_list.diagnosis_age} data-videopath={interview_list.video_path_encrypt} data-subtitle={interview_list.subtitle} onClick={this.changeCurrentInterview}>{interview_list.title}</a>)
    );

    return (
      <Fragment>
        <div id="sidebar" >
          <div className="ui vertical menu">
            <div className="item">
              <div className="header">인터뷰</div>
              <div className="menu">
                <a className="item" href onClick={this.getInterviewList.bind(this)}>전체목록</a>
                <a className="item" href onClick={this.getInterviewListByAge.bind(this)}>연령별</a>
              </div>
            </div>
            <div className="item">
              <div className="header">인터뷰 목록</div>
              <div className="menu" id="list" key={this.props.disease_name}>
                {interviewList}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Submenu;