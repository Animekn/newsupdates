import React, { Component } from 'react';

class Newsitem extends Component {
  render() {
    // wetaking a props here
    let { title, description, imgUrl, newsUrl, PublishAt } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
            <img src={imgUrl} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-title">{PublishAt}</h6>
              <p className="card-text">{description}</p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Newsitem;
