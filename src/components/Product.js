import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark Present? {this.hasWatermark}</p>
        <p>Color: {this.color}</p>
        <p>Weight: {this.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

function validateWeight(props, propName, componentName) {
  if (!props.weight) {
    return new Error(
      'Invalid weight: Weight not specified. Validation failed.'
    )
  }
  else if (typeof props.weight !== 'number') {
    return new Error(
      'Invalid weight: Weight must be a number. Validation failed.'
    )
  }
  else if (props.weight < 80 || props.weight > 300) {
    return new Error(
      'Invalid weight: Weight must be between 80 and 300. Validation failed.'
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: validateWeight
};

export default Product;
