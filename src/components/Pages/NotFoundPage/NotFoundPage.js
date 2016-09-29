import React, { Component } from 'react';
import { Link } from 'react-router-component';

import './NotFoundPage.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className="not-found-page">
        <div className="nfp__404">
          404
        </div>
        <div className="nfp__text">
          Oh no! You've tried looking for something that <br />
          doesn't exist. A true absurdist at heart.
        </div>
        <div className="nfp__button">
          <Link href="/">
            Return to Normalcy
          </Link>
        </div>
      </section>
    );
  }
}
