import React, { Component } from 'react';
import { Well, Row, Col, Accordion, Panel } from 'react-bootstrap';
import Header from './header.jsx';

export default class SnippetsContainer extends Component {
  render() {
    var snippetPanels = this.props.snippets.map((snippet, i) => {
      var expanded = i == 0;
      return (
        <Panel header={snippet.name} eventKey={i + 1} key={`snippet${i + 1}`} defaultExpanded={expanded} >
          {snippet.preface}
          <div className="code">
            <pre>{unescape(snippet.body)}</pre>
          </div>
        </Panel>
      );
    });
    return (
      <Header>
        <Row className="faded-orange">
          <Col className="text-center" xs={12} sm={8} smOffset={2} md={8} mdOffset={2}>
            <Well>
              <Row>
                <h1>Snippets</h1>
              </Row>
              <Row>
                <p>
                  {`Please feel free to use my snippets in any of your projects. You're also welcome to get in touch if you have any suggestions for improving anything! Bash scripts are written for Mac, but I'll try to make them work on Linux where possible.`}
                </p>
              </Row>
              <Row>
                <Accordion className="text-left" defaultActiveKey={1}>
                  {snippetPanels}
                </Accordion>
              </Row>
            </Well>
          </Col>
        </Row>
      </Header>
    );
  }
}
