import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h1 className="lead">
              Feel free to contact me for any work or suggestions below
              </h1>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>{resumeData.mobile}</h4>
                <h4>{resumeData.email}</h4>
                <a href = {resumeData.linkedinId}><h4>Linked In</h4></a>
                <a href = {resumeData.linkedinId}><h4>GITHUB</h4></a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
