import React from 'react';

export default props => (
  <header id="top" className="c-hero" style={{backgroundImage: `url(${props.background})`}}>
    <div className="c-hero__inner">
      <h1 className="c-hero__heading">{props.heading}</h1>
      <div className="c-hero__tagline">{props.tagline}</div>
    </div>
  </header>
);