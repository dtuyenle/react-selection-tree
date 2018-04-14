'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin: 10px;\n  position: relative;\n  text-align: left;\n\n  [type="checkbox"]:checked,\n  [type="checkbox"]:not(:checked) {\n      position: absolute;\n      left: -9999px;\n  }\n  [type="checkbox"]:checked + label,\n  [type="checkbox"]:not(:checked) + label\n  {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: #666;\n  }\n  [type="checkbox"]:checked + label:before,\n  [type="checkbox"]:not(:checked) + label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 18px;\n    height: 18px;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n  [type="checkbox"]:checked + label:after,\n  [type="checkbox"]:not(:checked) + label:after {\n    content: \'\';\n    width: 12px;\n    height: 12px;\n    background: ', ';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n  [type="checkbox"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  [type="checkbox"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n'], ['\n  margin: 10px;\n  position: relative;\n  text-align: left;\n\n  [type="checkbox"]:checked,\n  [type="checkbox"]:not(:checked) {\n      position: absolute;\n      left: -9999px;\n  }\n  [type="checkbox"]:checked + label,\n  [type="checkbox"]:not(:checked) + label\n  {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: #666;\n  }\n  [type="checkbox"]:checked + label:before,\n  [type="checkbox"]:not(:checked) + label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 18px;\n    height: 18px;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n  [type="checkbox"]:checked + label:after,\n  [type="checkbox"]:not(:checked) + label:after {\n    content: \'\';\n    width: 12px;\n    height: 12px;\n    background: ', ';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n  [type="checkbox"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  [type="checkbox"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 5px;\n  position: relative;\n\n  [type="radio"]:checked,\n  [type="radio"]:not(:checked) {\n      position: absolute;\n      left: -9999px;\n  }\n  [type="radio"]:checked + label,\n  [type="radio"]:not(:checked) + label\n  {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: #666;\n  }\n  [type="radio"]:checked + label:before,\n  [type="radio"]:not(:checked) + label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #ddd;\n    border-radius: 100%;\n    background: #fff;\n  }\n  [type="radio"]:checked + label:after,\n  [type="radio"]:not(:checked) + label:after {\n    content: \'\';\n    width: 12px;\n    height: 12px;\n    background: ', ';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    border-radius: 100%;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n  [type="radio"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  [type="radio"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n'], ['\n  margin: 5px;\n  position: relative;\n\n  [type="radio"]:checked,\n  [type="radio"]:not(:checked) {\n      position: absolute;\n      left: -9999px;\n  }\n  [type="radio"]:checked + label,\n  [type="radio"]:not(:checked) + label\n  {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: #666;\n  }\n  [type="radio"]:checked + label:before,\n  [type="radio"]:not(:checked) + label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #ddd;\n    border-radius: 100%;\n    background: #fff;\n  }\n  [type="radio"]:checked + label:after,\n  [type="radio"]:not(:checked) + label:after {\n    content: \'\';\n    width: 12px;\n    height: 12px;\n    background: ', ';\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    border-radius: 100%;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n  [type="radio"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  [type="radio"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('../color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckBoxContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.color;
});

var RadioContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.color;
});

var CheckBox = function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
  }

  _createClass(CheckBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          allowMultipleSelect = _props.allowMultipleSelect;

      var checkbox = allowMultipleSelect ? _react2.default.createElement(
        CheckBoxContainer,
        { color: color, style: this.props.style },
        this.props.children
      ) : _react2.default.createElement(
        RadioContainer,
        { style: this.props.style },
        this.props.children
      );
      return checkbox;
    }
  }]);

  return CheckBox;
}(_react.Component);

CheckBox.propTypes = {
  color: _propTypes2.default.string,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  allowMultipleSelect: _propTypes2.default.bool
};
CheckBox.defaultProps = {
  style: {},
  color: _color2.default.orange_main,
  allowMultipleSelect: true
};
exports.default = CheckBox;