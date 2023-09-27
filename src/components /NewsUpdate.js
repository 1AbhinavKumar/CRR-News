import React, { Component } from 'react'


export class NewsUpdate extends Component {
  render() {
    let { title, newsurl, imageUrl,author,source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem", marginBottom: "20px" }}>
        <div class="card-header text-body-secondary text-info-emphasis p-1 bg-dark-subtle text-emphasis-dark">{source}</div>
          <img src={imageUrl} className="card-img-top" alt="..." height="200px" />
          <div className="card-body">
            <div style={{height: '100px'}}>
              <h5 className="card-title">{title}...</h5>
            </div>
            <a rel="noreferrer" href={newsurl} className="btn btn-primary">Read</a>
          </div>
          <div class="card-footer text-success fst-italic">
            By:{author?author:source}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate