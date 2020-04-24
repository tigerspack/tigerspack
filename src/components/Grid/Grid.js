import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
  const {
    align,
    children,
    flow,
    stretch,
    padding,
    size,
    valign,
    wrap,
    ...otherProps
  } = props;

  const stylesObject = {};

  const posNameStab = (prop) => {
    if (prop === 'top' || prop === 'left') {
      return 'flex-start';
    }
    if (prop === 'bottom' || prop === 'right') {
      return 'flex-end';
    }
    return prop;
  };

  const isColumn = flow === 'column';

  if (align) {
    stylesObject[isColumn ? 'alignContent' : 'justifyContent'] = posNameStab(align);
    stylesObject[isColumn ? 'alignItems' : 'justifyItems'] = posNameStab(align);
  }

  if (valign) {
    stylesObject[isColumn ? 'justifyContent' : 'alignContent'] = posNameStab(valign);
    stylesObject[isColumn ? 'justifyItems' : 'alignItems'] = posNameStab(valign);
  }

  if (stretch) {
    switch (stretch) {
      case 'width': {
        stylesObject.width = '100%';
        break;
      }
      case 'height': {
        stylesObject.height = '100%';
        break;
      }
      default: {
        stylesObject.width = '100%';
        stylesObject.height = '100%';
        break;
      }
    }
  }

  if (size < 13) {
    stylesObject.minWidth = `${(100 / 12) * size}%`;
    stylesObject.maxWidth = `${(100 / 12) * size}%`;
  }

  const gridStyle = {
    display: 'flex',
    flexFlow: flow,
    padding: `${padding}px`,
    boxSizing: 'border-box',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...stylesObject,
  };

  return (
    <div css={gridStyle} {...otherProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  valign: PropTypes.oneOf(['top', 'bottom', 'center']),
  children: PropTypes.any.isRequired,
  flow: PropTypes.oneOf(['row', 'column']),
  padding: PropTypes.number,
  stretch: PropTypes.oneOf(['width', 'height', 'full']),
  size: PropTypes.number,
  wrap: PropTypes.bool,
};

Grid.defaultProps = {
  padding: 0,
};

export default Grid;
