import React, { Component } from 'react';
import { Row, Col, Image, Nav, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Header from './header.jsx';
import Skills from './skills.jsx';

export default class HomePage extends Component {
  render() {
    var languages = [{name: "HTML5", image: "HTML5-logo.png"}, {name: "Javascript", image: "javascript.png"}, {name: "ReactJS", image: "dark-reactJS.svg"}, {name: "jQuery", image: "jQuery.png"}, {name: "Ruby", image: "ruby-logo.png"}, {name: "Ruby on Rails", image: "Ruby_on_Rails-logo.png"}, {name: "PostgreSQL", image: "postgresql-logo.png"}];
    var languagesDiv = languages.map((language, i) => {
      var tooltip = <Tooltip id={`tooltip${i + 1}`}>{language.name}</Tooltip>;
      return (
        <li key={`language${i + 1}`}>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <Image src={`/assets/${language.image}`} alt={language.name} responsive />
          </OverlayTrigger>
        </li>
      );
    });

    return (
      <Header className="home">
        <Image src="/assets/background-2.png" alt="Sam House - web developer" className="main-img" />
          <h1 className="hidden">Sam House - web developer</h1>

          <div className="about">
            <div className="container">
              <Row>
                <h2>
                  Meet me.<br /><sub>(Sort of.)</sub>
                </h2>
              </Row>

              <Row>
                <Image src="/assets/cartoonMe.png" circle />
              </Row>

              <Row>
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <p>
                    I'm a UK-based developer with a passion for creating great code that delivers an enjoyable UX. I love creating engaging front-end interfaces with ReactJS and am excited about continuing to learn more about how to utilise this amazing library, particularly moving forward with ES6! Rails 5 is what most of my server-side work has been done in, but I'm also excited to branch out into Node.
                  </p>
                </Col>
              </Row>

            </div>
          </div>

          <div className="languages text-center">
            <ul>
              {languagesDiv}
            </ul>
          </div>

          <div className="support">
            <Skills />
          </div>

      </Header>
    );
  }
}
