import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const design = {name: 'Design', image: "pencil.png", content: (
  <div className="info text-center">
    <p>
      {`I offer creative and relevant design, ensuring the highest level of presentation for your project. The most important thing is that content is simple and direct. You want to come across loud and clear to your end-users.`}
    </p>
  </div>
)};

const development = {name: 'Development', image: "smartphone.png", content: (
  <div className="info text-center">
    <p>
      {`Staying up-to-date in the ever changing scene of web development is a challenge - that's where I come in. I keep on top of the latest tools and tricks to optimise your end-users' experience. At the same time, you don't want them to drown in gimicks! I'll help you to keep out the clutter.`}
    </p>
  </div>
)};

const audience = {name: 'Audience', image: "silhouette.png", content: (
  <div className="info text-center">
    <p>
      {`Audience matters. I'm committed to keeping that in mind at every step throughout the design and development processes. Setting up a platform for your music? Sharp, sleek and edgy is the way to go. Floral gift cards? ...Not so much.`}
    </p>
  </div>
)};

// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { info: design };
    this.handleClick = this.handleClick.bind(this);
    this.rotate = this.rotate.bind(this);
    this.unrotate = this.unrotate.bind(this);
  }

  handleClick(e) {
    switch (e.target.dataset.name) {
      case design.name:
        this.setState({info: design }, () => {
          document.getElementById('insert-title').className = `title ${this.state.info.name.toLowerCase()}`;
        });
        break;
      case development.name:
        this.setState({info: development }, () => {
          document.getElementById('insert-title').className = `title ${this.state.info.name.toLowerCase()}`;
        });
        break;
      case audience.name:
        this.setState({info: audience }, () => {
          document.getElementById('insert-title').className = `title ${this.state.info.name.toLowerCase()}`;
        });
        break;
    }
  }

  rotate(e) {
    if (window.innerWidth >= 992) {
      e.target.className += ` rotated`;
      var title = document.getElementById(`${e.target.dataset.name.toLowerCase()}Title`);
      fadeIn(title);
      title.style.transform = `translateX(40rem)`;
    }
  }

  unrotate(e) {
    if (window.innerWidth >= 992) {
      e.target.className = e.target.className.replace(/ rotated/, ``);
      var title = document.getElementById(`${e.target.dataset.name.toLowerCase()}Title`);
      fadeOut(title);
      title.style.transform = `translateX(-40rem)`;
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      var infoName = document.getElementById('insert-title');
      if (window.innerWidth < 992) {
        infoName.textContent = this.state.info.name;
        infoName.className = `title ${this.state.info.name.toLowerCase()}`;
      } else {
        infoName.textContent = null;
      }
    });
  }

  render() {
    const skills = [design, development, audience];
    var skillsDiv, skillsCols;
    if (window.innerWidth < 440) {
      skillsCols = skills.map((skill, i) => {
        return (
          <Col key={`skill${i + 1}`} xs={12 / skills.length}>
            <div className="icon-container">
              <Image src={`/assets/${skill.image}`} circle className={`rotate${skill.name == this.state.info.name ? ' selected' : ''}`} data-name={skill.name} onClick={this.handleClick} onMouseOver={this.rotate} onMouseOut={this.unrotate} />
            </div>
          </Col>
        );
      });
      skillsDiv = (
        <Row>
          {skillsCols}
        </Row>
      );
    } else {
      skillsCols = skills.map((skill, i) => {
        return (
          <li key={`skill${i + 1}`}>
            <div className="title-container">
              <h3 id={`${skill.name.toLowerCase()}Title`} className={`title`}>{skill.name}</h3>
            </div>
            <div className="icon-container">
              <Image src={`/assets/${skill.image}`} circle className={`rotate${skill.name == this.state.info.name ? ' selected' : ''}`} data-name={skill.name} onClick={this.handleClick} onMouseOver={this.rotate} onMouseOut={this.unrotate} />
            </div>
          </li>
        );
      });
      skillsDiv = (
        <ul className="text-right">
          {skillsCols}
        </ul>
      );
    }

    if (window.innerWidth < 440) {
      return (
        <div className="container">
          <Row>
            <Col xs={12} xsOffset={0} md={4} mdOffset={4} className="text-center">
              <h2>
                What do I offer?
              </h2>
            </Col>
          </Row>

          {skillsDiv}

          <Row>
            <Col className="skill-content" xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={2}>
              <Row>
                <Col xs={2} xsOffset={4}>
                  <div className="title-container">
                    <h3 id={`insert-title`} className={`title ${this.state.info.name.toLowerCase()}`}>{window.innerWidth < 992 ? this.state.info.name : null}</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="content-container">
                    <span>{this.state.info.content}</span>
                  </div>
                </Col>
              </Row>


            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Row>
            <Col xs={12} xsOffset={0} md={4} mdOffset={4} className="text-center">
              <h2>
                What do I offer?
              </h2>
            </Col>
          </Row>

          <Row>
            <Col xs={0} sm={3} smOffset={0} md={4}>
                {skillsDiv}
            </Col>

            <Col className="skill-content" xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={2}>
              <Row>
                <Col xs={2} xsOffset={4}>
                  <div className="title-container">
                    <h3 id={`insert-title`} className={`title ${this.state.info.name.toLowerCase()}`}>{window.innerWidth < 992 ? this.state.info.name : null}</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="content-container">
                    <span>{this.state.info.content}</span>
                  </div>
                </Col>
              </Row>


            </Col>
          </Row>
        </div>
      );
    }
  }
}
