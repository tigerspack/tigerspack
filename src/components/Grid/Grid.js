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

  const posObj = {};
  const sizeObj = {};

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
    posObj[isColumn ? 'alignContent' : 'justifyContent'] = posNameStab(align);
    posObj[isColumn ? 'alignItems' : 'justifyItems'] = posNameStab(align);
  }

  if (valign) {
    posObj[isColumn ? 'justifyContent' : 'alignContent'] = posNameStab(valign);
    posObj[isColumn ? 'justifyContent' : 'alignItems'] = posNameStab(valign);
  }

  if (stretch) {
    switch (stretch) {
      case 'width': {
        sizeObj.width = '100%';
        break;
      }
      case 'height': {
        sizeObj.height = '100%';
        break;
      }
      case 'full': {
        sizeObj.width = '100%';
        sizeObj.height = '100%';
        break;
      }
      default: break;
    }
  }

  if (size < 13) {
    sizeObj[isColumn ? 'minHeight' : 'minWidth'] = `${(100 / 12) * size}%`;
  }

  const gridStyle = {
    display: 'flex',
    flexFlow: flow,
    padding: `${padding}px`,
    boxSizing: 'border-box',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...posObj,
    ...sizeObj,
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
