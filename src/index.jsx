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
  const { children, className, style, ...otherProps } = props;
  const concatedClassName = className
    ? `react-stage ${className}`
    : 'react-stage';

  return (
    <section
      className={concatedClassName}
      style={{ ...defaultStyle, ...style }}
      {...otherProps}
    >
      {children}
    </section>
  );
};

Stage.propTypes = {
  children: PropTypes.node,
};
