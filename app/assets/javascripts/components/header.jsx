import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, Image } from 'react-bootstrap';
import Headroom from 'react-headroom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { active: window.location.pathname == '/' ? 1 : window.location.pathname == '/projects' ? 2 : 3 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    window.location = e.target.href;
  }

  render() {
    return (
      <span>
        <Headroom>
        <Row>
          <Col sm={3} smOffset={1} md={3} mdOffset={1}>
            <a href="/"><Image width="100rem" src="/assets/cartoonMe.png" circle /></a>
          </Col>
          <Col className="pull-right" sm={5} smOffset={2} md={4} mdOffset={3} lg={4} lgOffset={4} style={{ marginTop: "3rem" }}>
            <Nav bsStyle="pills" activeKey={this.state.active} onClick={this.handleClick}>
              <NavItem eventKey={1} href="/">About</NavItem>
              <NavItem eventKey={2} href="/projects">Projects</NavItem>
              <NavItem eventKey={3} href="/snippets">Snippets</NavItem>
            </Nav>
          </Col>
        </Row>
        </Headroom>

        {this.props.children}

      </span>
    );
  }
}
