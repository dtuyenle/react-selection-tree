'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline;\n  [data-tooltip]{\n    position: relative;\n    display: inline-block;\n  }\n  [data-tooltip]::before {\n    content: "";\n    position: absolute;\n    top: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 4px 6px 0 6px;\n    border-style: solid;\n    border-color: rgba(0,0,0,0.7) transparent transparent transparent;\n    z-index: 999999;\n    opacity: 0;\n  }\n\n  [data-tooltip-position=\'left\']::before{\n    left: 0%;\n    top: 50%;\n    margin-left: -12px;\n    transform: translatey(-50%) rotate(-90deg);\n  }\n  [data-tooltip-position=\'top\']::before{\n    left:50%;\n  }\n  [data-tooltip-position=\'bottom\']::before{\n    top:100%;\n    margin-top:8px;\n    transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n  }\n  [data-tooltip-position=\'right\']::before{\n    left: 100%;\n    top: 50%;\n    margin-left: 1px;\n    transform: translatey(-50%) rotate(90deg)\n  }\n\n  [data-tooltip]::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    left:50%;\n    top:-6px;\n    transform: translateX(-50%)   translateY(-100%);\n    background: rgba(0,0,0,0.7);\n    text-align: center;\n    color: #fff;\n    padding:4px 2px;\n    font-size: 12px;\n    min-width: 80px;\n    border-radius: 5px;\n    pointer-events: none;\n    padding: 4px 4px;\n    z-index:99;\n    opacity:0;\n  }\n\n  [data-tooltip-position=\'left\']::after{\n    left:0%;\n    top:50%;\n    margin-left:-8px;\n    transform: translateX(-100%) translateY(-50%);\n  }\n  [data-tooltip-position=\'top\']::after{\n    left: 50%;\n  }\n  [data-tooltip-position=\'bottom\']::after{\n    top: 100%;\n    margin-top: 8px;\n    transform: translateX(-50%) translateY(0%);\n  }\n  [data-tooltip-position=\'right\']::after{\n    left: 100%;\n    top: 50%;\n    margin-left: 8px;\n    transform: translateX(0%) translateY(-50%);\n  }\n\n  [data-tooltip]:hover::after,[data-tooltip]:hover::before {\n    opacity: 1;\n    z-index: 999999;\n  }\n'], ['\n  display: inline;\n  [data-tooltip]{\n    position: relative;\n    display: inline-block;\n  }\n  [data-tooltip]::before {\n    content: "";\n    position: absolute;\n    top: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 4px 6px 0 6px;\n    border-style: solid;\n    border-color: rgba(0,0,0,0.7) transparent transparent transparent;\n    z-index: 999999;\n    opacity: 0;\n  }\n\n  [data-tooltip-position=\'left\']::before{\n    left: 0%;\n    top: 50%;\n    margin-left: -12px;\n    transform: translatey(-50%) rotate(-90deg);\n  }\n  [data-tooltip-position=\'top\']::before{\n    left:50%;\n  }\n  [data-tooltip-position=\'bottom\']::before{\n    top:100%;\n    margin-top:8px;\n    transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n  }\n  [data-tooltip-position=\'right\']::before{\n    left: 100%;\n    top: 50%;\n    margin-left: 1px;\n    transform: translatey(-50%) rotate(90deg)\n  }\n\n  [data-tooltip]::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    left:50%;\n    top:-6px;\n    transform: translateX(-50%)   translateY(-100%);\n    background: rgba(0,0,0,0.7);\n    text-align: center;\n    color: #fff;\n    padding:4px 2px;\n    font-size: 12px;\n    min-width: 80px;\n    border-radius: 5px;\n    pointer-events: none;\n    padding: 4px 4px;\n    z-index:99;\n    opacity:0;\n  }\n\n  [data-tooltip-position=\'left\']::after{\n    left:0%;\n    top:50%;\n    margin-left:-8px;\n    transform: translateX(-100%) translateY(-50%);\n  }\n  [data-tooltip-position=\'top\']::after{\n    left: 50%;\n  }\n  [data-tooltip-position=\'bottom\']::after{\n    top: 100%;\n    margin-top: 8px;\n    transform: translateX(-50%) translateY(0%);\n  }\n  [data-tooltip-position=\'right\']::after{\n    left: 100%;\n    top: 50%;\n    margin-left: 8px;\n    transform: translateX(0%) translateY(-50%);\n  }\n\n  [data-tooltip]:hover::after,[data-tooltip]:hover::before {\n    opacity: 1;\n    z-index: 999999;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tooltip = _styledComponents2.default.div(_templateObject);

var ToolTip = function (_Component) {
  _inherits(ToolTip, _Component);

  function ToolTip() {
    _classCallCheck(this, ToolTip);

    return _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).apply(this, arguments));
  }

  _createClass(ToolTip, [{
    key: 'render',
    value: function render() {
      var node = this.props.node;

      return _react2.default.createElement(
        Tooltip,
        null,
        node
      );
    }
  }]);

  return ToolTip;
}(_react.Component);
// data-tooltip={data} data-tooltip-position={placement}


ToolTip.propTypes = {
  node: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.node.isRequired,
  placement: _propTypes2.default.string
};
ToolTip.defaultProps = {
  placement: 'bottom'
};
exports.default = ToolTip;