import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

function CustomButton({
  content, url, buttonStyle, callback,
}) {
  return (
    <Link className={buttonStyle} to={url} onClick={() => { callback(true); }}>
      {content}
    </Link>
  );
}

CustomButton.propTypes = {
  content: PropTypes.string,
  url: PropTypes.string,
  buttonStyle: PropTypes.string,
  callback: PropTypes.func,
};

CustomButton.defaultProps = {
  content: 'Press me',
  url: 'https://es.reactjs.org/docs/create-a-new-react-app.html',
  buttonStyle: 'default-button',
  callback: null,
};

export default CustomButton;
