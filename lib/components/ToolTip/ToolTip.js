'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 2px;\n  width: 100%;\n  z-index: 9999999;\n  display: inline;\n\n  span {\n    border-radius: 2px;\n  }\n'], ['\n  border-radius: 2px;\n  width: 100%;\n  z-index: 9999999;\n  display: inline;\n\n  span {\n    border-radius: 2px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  z-index: 2000;\n  height: auto !important;\n  font-size: 1em;\n  padding: 8px 10px !important;\n'], ['\n  z-index: 2000;\n  height: auto !important;\n  font-size: 1em;\n  padding: 8px 10px !important;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popover = require('react-bootstrap/lib/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _lodash = require('lodash');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tooltip = _styledComponents2.default.div(_templateObject);

var TooltipOverlay = _styledComponents2.default.div(_templateObject2);

var ToolTip = function (_Component) {
  _inherits(ToolTip, _Component);

  function ToolTip(props) {
    _classCallCheck(this, ToolTip);

    var _this = _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).call(this, props));

    _this.state = {
      key: Math.random(),
      initialClick: true,
      handleDocumentClick: null
    };
    _this.state.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    return _this;
  }

  _createClass(ToolTip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          trigger = _props.trigger,
          rootCloseHack = _props.rootCloseHack;

      if (rootCloseHack && trigger === 'click') {
        document.addEventListener('click', this.state.handleDocumentClick, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.state.handleDocumentClick, false);
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {
      var _this2 = this;

      var _props2 = this.props,
          onEnter = _props2.onEnter,
          closeAfterMillisecond = _props2.closeAfterMillisecond;

      if (onEnter) {
        onEnter();
      }
      if (closeAfterMillisecond && this.refs.binary_popover) {
        setTimeout(function () {
          if (_reactDom2.default.findDOMNode(_this2.refs.binary_popover) !== null) {
            _reactDom2.default.findDOMNode(_this2.refs.binary_popover).style.display = 'none';
          }
        }, closeAfterMillisecond);
      }
    }
  }, {
    key: 'onExit',
    value: function onExit() {
      var onExit = this.props.onExit;

      if (onExit) {
        onExit();
      }
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(event) {
      var id = this.props.id;

      var triggernode = _reactDom2.default.findDOMNode(this.refs.binary_tooltip);
      var popup = document.getElementById('binary_tooltip_popup_' + id);
      var dropdown = popup !== null && popup.parentNode !== null && popup.parentNode.nextSibling !== null ? popup.parentNode.nextSibling : popup;

      if (triggernode && popup && dropdown) {
        if (!popup.contains(event.target) && !triggernode.contains(event.target) && !dropdown.contains(event.target)) {
          if (!this.state.initialClick) {
            this.setState({ key: Math.random(), initialClick: true }, function () {
              if (document.getElementById('binary_auto_complete') !== null) {
                document.getElementById('binary_tooltip_close').click();
                // document.getElementsByClassName('positive')[0].click();
              }
            });
          } else {
            this.setState({ initialClick: false });
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          node = _props3.node,
          data = _props3.data,
          rootClose = _props3.rootClose,
          onEnter = _props3.onEnter,
          id = _props3.id,
          trigger = _props3.trigger,
          placement = _props3.placement,
          popOverStyle = _props3.popOverStyle,
          showPopup = _props3.showPopup;

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline' } },
        _react2.default.createElement(
          Tooltip,
          { key: this.state.key, ref: 'binary_tooltip' },
          !data && node,
          trigger && data && showPopup && _react2.default.createElement(
            _OverlayTrigger2.default,
            {
              key: 'overlaytrigger',
              onEnter: this.onEnter.bind(this),
              placement: placement,
              rootClose: rootClose,
              trigger: trigger,
              onExit: this.onExit.bind(this),
              overlay: _react2.default.createElement(
                _Popover2.default,
                { ref: 'binary_popover', style: popOverStyle, id: 'binary_tooltip_popup_' + id },
                _react2.default.createElement(
                  TooltipOverlay,
                  null,
                  data
                )
              )
            },
            node
          ),
          !trigger && data && _react2.default.createElement(
            _OverlayTrigger2.default,
            {
              key: 'overlaytrigger',
              onEnter: onEnter ? onEnter.bind(this) : undefined,
              placement: placement,
              rootClose: rootClose,
              overlay: _react2.default.createElement(
                _Popover2.default,
                { ref: 'binary_popover', style: popOverStyle, id: 'binary_tooltip_popup_' + id },
                _react2.default.createElement(
                  TooltipOverlay,
                  null,
                  data
                )
              )
            },
            node
          )
        ),
        _react2.default.createElement('div', { style: { display: 'none' }, id: 'binary_tooltip_close' })
      );
    }
  }]);

  return ToolTip;
}(_react.Component);

ToolTip.propTypes = {
  id: _propTypes2.default.string,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  placement: _propTypes2.default.string,
  popOverStyle: _propTypes2.default.object,
  onEnter: _propTypes2.default.func,
  node: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.node.isRequired,
  rootClose: _propTypes2.default.bool,
  rootCloseHack: _propTypes2.default.bool,
  closeAfterMillisecond: _propTypes2.default.number,
  showPopup: _propTypes2.default.bool,
  onExit: _propTypes2.default.func
};
ToolTip.defaultProps = {
  id: (0, _lodash.uniqueId)(),
  placement: 'bottom',
  rootClose: false,
  showPopup: true
};
exports.default = ToolTip;