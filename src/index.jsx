import React from 'react';
import PropTypes from 'prop-types';

class Stage extends React.Component {
  render() {
    const { content } = this.props;
    return <div>{content}</div>;
  }
}

Stage.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Stage;
