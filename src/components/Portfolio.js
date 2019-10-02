import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
              <a href={`${item.gitLink}`} rel="noopener noreferer" target="_blank">
                  <div className="columns portfolio-item">
                    <div className="item-wrap ">
                        <img src={`${item.imgurl}`} alt = "" className="item-img"/>
                        <div className="overlay">
                          <div className="portfolio-item-meta ">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <br/>
                            <p>{item.github}</p>
                          </div>
                        </div>
                    </div>
                  </div>
              </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
