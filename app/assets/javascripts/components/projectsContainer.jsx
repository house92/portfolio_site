import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from './project.jsx';
import Header from './header.jsx';

export default class ProjectsContainer extends Component {
  render() {
    var projectsDiv = this.props.projects.map((project, i) => {
      return (
        <Row>
          <Col xs={12}>
            <Project project={project} />
          </Col>
        </Row>
      );
    });
    return (
      <Header>
        <div className="projects">
          <Row>
            <Col xs={12} className="text-center">
              <h1>Projects</h1>
            </Col>
          </Row>
          {projectsDiv}
        </div>
      </Header>
    );
  }
}
