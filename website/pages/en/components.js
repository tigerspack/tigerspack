/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// console.log('this', this);
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Container } = require('../../core/CompLibrary.js');
const { StyleSheetServer } = require('aphrodite');
const { Button } = require('tigerspack');

const { html, css } = StyleSheetServer.renderStatic(() => (
  <div className="docMainWrapper wrapper">
    <Container className="mainContainer documentContainer postContainer">
      <div className="post">
        <header className="postHeader">
          <h1>Need help?</h1>
        </header>
        <p>This project is maintained by a dedicated group of people.</p>
        <Button theme={'danger'}>
          Github page
        </Button>
      </div>
    </Container>
  </div>
));
console.log('html, css', html, css);

function Components() {
  return html;
}

module.exports = Components;
