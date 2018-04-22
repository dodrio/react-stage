import React from 'react';
import PropTypes from 'prop-types';

export class StageToggle extends React.Component {
  render() {
    const { condition, children } = this.props;

    if (condition) {
      return children;
    } else {
      return null;
    }
  }
}

StageToggle.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

const defaultStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const Stage = props => {
  let { children, className, ...otherProps } = props;
  className = className ? `stage ${className}` : 'stage';

  return (
    <section className={className} style={defaultStyle} {...otherProps}>
      {children}
    </section>
  );
};

Stage.propTypes = {
  children: PropTypes.node,
};
