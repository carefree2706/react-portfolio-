import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Router>
        <section id="portfolio">
          <div className="row">
            <div className="twleve columns collapsed">
              <h1>My work</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-brig-thirds cf"
              >
                {resumeData.portfolio &&
                  resumeData.portfolio.map((item) => {
                    return (
                      <div className="columns portfolio-item">
                        <div className="item-wrap">
                          <img
                            src={item.imgurl}
                            alt="portfolio"
                            className="item-img"
                          />
                          <div className="overlay">
                            <Link to={item.imglink}>
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.descriptio}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}
