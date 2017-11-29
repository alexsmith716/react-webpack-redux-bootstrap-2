import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <a className="navbar-brand" href="/">Mii!!!</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">rrrrrrr</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">rrrrrrrr</a>
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    );
  }
}


export default Header;
