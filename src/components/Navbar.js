import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

  // Correct Bootstrap-compatible text colors
  const textColors = {
    light: 'dark',   // black text
    dark: 'light',   // white text
    red: 'light',     // white text for red mode
    blue: 'yellow' //yellow text for blue mode
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'red' ? 'dark' : props.mode} bg-${props.mode}`}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/">{props.title}</a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>

            {/* THEME RADIO BUTTONS */}
            <div className={`text-${textColors[props.mode]} d-flex align-items-center gap-4`}>

              {/* LIGHT */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeRadio"
                  id="lightMode"
                  value="light"
                  checked={props.mode === 'light'}
                  onChange={() => props.setTheme('light')}
                />
                <label className="form-check-label" htmlFor="lightMode">
                  Light
                </label>
              </div>

              {/* DARK */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeRadio"
                  id="darkMode"
                  value="dark"
                  checked={props.mode === 'dark'}
                  onChange={() => props.setTheme('dark')}
                />
                <label className="form-check-label" htmlFor="darkMode">
                  Dark
                </label>
              </div>

              {/* RED */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeRadio"
                  id="redMode"
                  value="red"
                  checked={props.mode === 'red'}
                  onChange={() => props.setTheme('red')}
                />
                <label className="form-check-label" htmlFor="redMode">
                  Red
                </label>
              </div>

              {/*Blue*/}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeRadio"
                  id="blueMode"
                  value="blue"
                  checked={props.mode === 'blue'}
                  onChange={() => props.setTheme('blue')}
                />
                <label className="form-check-label" htmlFor="blueMode">
                  blue
                </label>
              </div>

            </div>

          </div> 
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about text here'
};
