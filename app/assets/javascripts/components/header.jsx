import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, Image, Glyphicon } from 'react-bootstrap';
import Headroom from 'react-headroom';
import Sidebar from 'react-sidebar';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: window.location.pathname == '/' ? 1 : window.location.pathname == '/projects' ? 2 : 3,
      sidebarOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    document.getElementById('wrap').parentElement.style.overflowX = 'hidden';
  }

  handleClick(e) {
    window.location = e.target.href;
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  toggleDrawer() {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  render() {
    const sidebarContent = (
      <div className="sidebar">
        <Nav bsStyle="pills" activeKey={this.state.active} onClick={this.handleClick} stacked>
          <NavItem eventKey={1} href="/">About</NavItem>
          <NavItem eventKey={2} href="/projects">Projects</NavItem>
          <NavItem eventKey={3} href="/snippets">Snippets</NavItem>
        </Nav>
      </div>
    );

    var navbar;
    if (window.innerWidth < 440) {
      navbar = (
        <Row>
          <Col xs={2} xsOffset={1}>
            <Glyphicon glyph="menu-hamburger" onClick={this.toggleDrawer} />
          </Col>
          <Col xs={4} xsOffset={4}>
            <a href="/"><Image width="80rem" src="/assets/cartoonMe.png" circle /></a>
          </Col>
        </Row>
      );
    } else {
      navbar = (
        <Row>
          <Col sm={4} smOffset={1} md={3} mdOffset={1}>
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
      );
    }

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}
               >
         <div id="wrap">
         <Headroom>

         {navbar}

         </Headroom>

         {this.props.children}

         </div>

         <div className="footer">
           <div className="container">
             <Row>
               <Col className="built-with text-left" sm={4} lg={3}>
                 <Row>
                   <span><strong>{`BUILT WITH`}</strong></span>
                 </Row>
                 <Row>
                   <Image src="/assets/React-JS.png" />
                 </Row>
               </Col>
               <Col className="links" xs={11} xsOffset={1} sm={5} smOffset={3} md={4} mdOffset={4} lg={3} lgOffset={6}>
                 <Nav bsStyle="pills">
                   <NavItem eventKey={1} href="http://www.github.com/house92">Github</NavItem>
                   <NavItem eventKey={2} href="https://www.linkedin.com/in/sam-house-021b91129">LinkedIn</NavItem>
                   <NavItem eventKey={3} href="https://twitter.com/shouse_92">Twitter</NavItem>
                 </Nav>
               </Col>
             </Row>
           </div>
         </div>
     </Sidebar>
    );
  }
}
