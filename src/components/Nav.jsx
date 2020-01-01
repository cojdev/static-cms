import React from "react";
import { Link } from "gatsby";
import siteData from "../../content/data/siteData.json";

export default props => (
  <nav className="js-nav c-nav">
    <div className="c-nav__inner">
      <div className="c-nav__logo-wrapper">
        <a href="#top" className="js-anchor-link c-nav__logo-link">
          <img
            className="c-nav__logo"
            src={siteData.siteLogo}
            alt="Static CMS"
          />
        </a>
      </div>

      <div className="c-nav__list-wrapper">
        <button className="js-menu-button c-nav__hamburger">
          <div className="c-nav__hamburger-line"></div>
        </button>

        <ul className="js-menu c-nav__list">
          {props.menu.map(item => (
            <li key={item.url} className="c-nav__list-item">
              {item.type === "internal" ? (
                <Link
                  className="c-nav__link"
                  activeClassName="c-nav__link--active"
                  to={item.url}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  className="c-nav__link"
                  href={item.url}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);
