'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 0.8em;\n  line-height: 11px;\n  color: ', ';\n  cursor: pointer;\n'], ['\n  font-size: 0.8em;\n  line-height: 11px;\n  color: ', ';\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0.6em;\n  margin: 0 0.8em;\n'], ['\n  font-size: 0.6em;\n  margin: 0 0.8em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.8em;\n  line-height: 11px;\n  color: ', ';\n'], ['\n  font-size: 0.8em;\n  line-height: 11px;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('../color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadCrumItem = _styledComponents2.default.span(_templateObject, _color2.default.grey_main);

var Arrow = _styledComponents2.default.span(_templateObject2);

var BreadCrumItemLast = _styledComponents2.default.span(_templateObject3, _color2.default.orange_main);

var handleOnClick = function handleOnClick(item, onClick) {
  if (item.href) {
    window.location.href = item.href;
    if (onClick) {
      onClick(item);
    }
  } else {
    if (onClick) {
      onClick(item);
    }
  }
};

var getBreadCrums = function getBreadCrums(data, style, onClick) {
  var DATA = [];
  for (var count = 0; count < data.length; count++) {
    var item = data[count];
    if (count === data.length - 1) {
      DATA.push(_react2.default.createElement(
        BreadCrumItemLast,
        { key: count, style: style, id: item.id, onClick: handleOnClick.bind(undefined, item, onClick) },
        item.name
      ));
    } else {
      DATA.push(_react2.default.createElement(
        BreadCrumItem,
        { key: 'item' + count, style: style, id: item.id, onClick: handleOnClick.bind(undefined, item, onClick) },
        item.name
      ));
      DATA.push(_react2.default.createElement(
        Arrow,
        { key: 'arrow' + count, className: 'icon-Right' },
        ' > '
      ));
    }
  }
  return DATA;
};

var BreadCrum = function BreadCrum(props) {
  var data = props.data,
      style = props.style,
      onClick = props.onClick;

  return _react2.default.createElement(
    'p',
    null,
    getBreadCrums(data, style, onClick)
  );
};

BreadCrum.propTypes = {
  /** data array of object {id: , name: ''} */
  data: _propTypes2.default.array,
  /** style override */
  style: _propTypes2.default.object,
  /** onClick breadcrum item */
  onClick: _propTypes2.default.func
};

BreadCrum.defaultProps = {
  data: [],
  style: {}
};

exports.default = BreadCrum;