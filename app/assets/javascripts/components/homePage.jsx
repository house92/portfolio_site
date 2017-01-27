import React, { Component } from 'react';
import { Image, Nav, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
      <Header>
        <Image src="/assets/background-2.png" alt="Sam House - web developer" className="main-img" />
          <h1 className="hidden">Sam House - web developer</h1>

          <div className="about">
            <div className="container">
              <h2>
                Meet me.<br /><sub>(Sort of.)</sub>
              </h2>
              <Image src="/assets/cartoonMe.png" circle />

              <p>
                I'm a UK-based web and app developer who loves<br />
                 helping others - that's you, by the way - to<br />
                 bring their designs to life.
              </p>

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
