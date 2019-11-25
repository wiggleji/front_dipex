import React, { Component, Fragment } from 'react';
import './Menu.css';
import logo from '../images/logo.gif'

class Menu extends Component {
  constructor(props){
    super(props);
    this.diseaseChange = this.diseaseChange.bind(this);
    this.changeCurrentInterview = this.changeCurrentInterview.bind(this);
    this.changeInterviewList = this.changeInterviewList.bind(this);
  }
  changeCurrentInterview(e) {
    this.props.onChangeCurrentInterview(e.target.dataset);
  }
  changeInterviewList() {
    this.props.onChangeInterviewList([]);
  }
  
  diseaseChange(e){
    this.props.onChangeDiseaseName(e.target.dataset.disease);
    this.changeCurrentInterview(e);
    this.changeInterviewList();
  }

  render() {
    const subs = this.props.subs;
    const subList = subs.map((subs, index) => (<a className="item" key={index} href data-disease={subs} onClick={this.diseaseChange}>{subs}</a>)
    );
    return (
      <Fragment>
        <div id="menubar">
          <div className="ui secondary pointing menu">
            <img height="60px" src={logo} alt={this.props.error} />
            <div className="item"></div>
            {subList}
          </div>
        </div>
        <div id="foot">
          <hr />
          <strong>copyrightⓒ 2019. Team dipex(by.김은진, 김지형, 정유경, 조창연). All rights reserved. <br />Dankook University Capstone Design</strong>
          <br /><br />powered by <a href="https://plyr.io/"><strong>plyr</strong></a><br />
        </div>
      </Fragment>
    );
  }
}

export default Menu;