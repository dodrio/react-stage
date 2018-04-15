import React from 'react';
import PropTypes from 'prop-types';

const DISPLAY = 'display';
const RENDER = 'render';

const generateStyle = (type, show) => {
  const defaultStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
  };

  const displayShowStyle = {
    transform: 'translateX(0)',
    opacity: 1,
  };

  const displayHideStyle = {
    transform: 'translateX(-1000%)',
    opacity: 0,
  };

  let additionalStyle = {};
  if (type === DISPLAY && show) {
    additionalStyle = displayShowStyle;
  } else if (type === DISPLAY && !show) {
    additionalStyle = displayHideStyle;
  }

  const style = Object.assign(defaultStyle, additionalStyle);
  return style;
};

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  componentWillMount() {
    const { type, show } = this.props;
    this.setState({ style: generateStyle(type, show) });
  }

  componentWillReceiveProps(nextProps) {
    const { type, show } = nextProps;
    this.setState({ style: generateStyle(type, show) });
  }

  render() {
    const { type, show, children, className = '' } = this.props;

    if (type === RENDER && !show) {
      return null;
    } else {
      return (
        <section className={`stage ${className}`} style={this.state.style}>
          {children}
        </section>
      );
    }
  }
}

Stage.propTypes = {
  type: PropTypes.oneOf([RENDER, DISPLAY]),
  show: PropTypes.bool.isRequired,
};

export default Stage;
