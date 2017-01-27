import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.repo = this.repo.bind(this);
  }

  repo() {
    if (this.props.project.repo) {
      return <a href={this.props.project.repo}>View repository</a>;
    }
  }

  render() {
    var project = this.props.project;
    return (
      <div className="project">
        <Row>
          <Col xs={12} md={6}>
            <a href={project.url}><Image src={`/assets/${project.image}`} /></a>
          </Col>
          <Col xs={12} md={6} className="blurb text-center">
            <h2>{project.name}</h2>
            {this.repo()}
            <p>
              {project.description}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
