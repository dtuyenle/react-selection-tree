'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 10px 0px;\n  text-align: left;\n\n  i {\n    color: #4E4E4E;\n    line-height: 9px;\n    position: absolute;\n    margin-top: 7px;\n    margin-left: 5px;\n    font-size: 6px;\n  }\n'], ['\n  width: 100%;\n  margin: 10px 0px;\n  text-align: left;\n\n  i {\n    color: #4E4E4E;\n    line-height: 9px;\n    position: absolute;\n    margin-top: 7px;\n    margin-left: 5px;\n    font-size: 6px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #000;\n  color: #6090C3;\n  cursor: pointer;\n  font-size: 11px;\n  margin-right: 12px;\n'], ['\n  color: #000;\n  color: #6090C3;\n  cursor: pointer;\n  font-size: 11px;\n  margin-right: 12px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: #6090C3;\n  cursor: pointer;\n  font-size: 11px;\n  margin-right: 15px;\n'], ['\n  color: #6090C3;\n  cursor: pointer;\n  font-size: 11px;\n  margin-right: 15px;\n']);

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

var uniqueId = function uniqueId() {
  return Math.random();
};

var BreadcrumContainer = _styledComponents2.default.p(_templateObject);

var BreadcrumItemLast = _styledComponents2.default.span(_templateObject2);

var BreadcrumItem = _styledComponents2.default.span(_templateObject3);

var BreadCrum = function (_Component) {
  _inherits(BreadCrum, _Component);

  function BreadCrum() {
    _classCallCheck(this, BreadCrum);

    return _possibleConstructorReturn(this, (BreadCrum.__proto__ || Object.getPrototypeOf(BreadCrum)).apply(this, arguments));
  }

  _createClass(BreadCrum, [{
    key: 'getBreadCrums',
    value: function getBreadCrums() {
      var _this2 = this;

      var _props = this.props,
          hierarchy = _props.hierarchy,
          handleBreadCrumClick = _props.handleBreadCrumClick;

      var breadcrums = [];
      var count = 1;
      hierarchy.forEach(function (item) {
        if (item) {
          var currHierarchy = hierarchy.slice(0, count);
          var lastitem = false;
          var icon = _react2.default.createElement(
            'i',
            null,
            '>'
          );
          var style = _this2.props.style ? _this2.props.style : {};
          if (count === hierarchy.length) {
            icon = _react2.default.createElement('i', null);
            lastitem = true;
          }
          if (!handleBreadCrumClick) {
            style.cursor = 'auto';
          }
          if (item.href && item.href !== null) {
            var id = item.name.toLowerCase().split(' ').join('_');
            var breadcrumitem = _react2.default.createElement(
              BreadcrumItem,
              {
                id: id,
                onClick: _this2.handleBreadCrumClick.bind(_this2, currHierarchy)
              },
              item.name,
              ' ',
              icon
            );
            var breadcrumitemlast = _react2.default.createElement(
              BreadcrumItemLast,
              {
                id: id,
                onClick: _this2.handleBreadCrumClick.bind(_this2, currHierarchy)
              },
              item.name,
              ' ',
              icon
            );

            breadcrums.push(_react2.default.createElement(
              'a',
              { key: uniqueId(), to: item.href, onClick: item.reload && _this2.handleReload.bind(_this2) },
              lastitem ? breadcrumitemlast : breadcrumitem
            ));
          } else {
            // style.color = '#000';
            breadcrums.push(_react2.default.createElement(
              BreadcrumItem,
              {
                key: uniqueId(),
                style: style,
                id: item.name ? item.name.toLowerCase().split(' ').join('_') : '',
                onClick: _this2.handleBreadCrumClick.bind(_this2, currHierarchy)
              },
              item.name,
              ' ',
              icon
            ));
          }
        }
        count++;
      });
      return breadcrums;
    }
  }, {
    key: 'handleReload',
    value: function handleReload() {
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }, {
    key: 'handleBreadCrumClick',
    value: function handleBreadCrumClick(hierarchy) {
      var handleBreadCrumClick = this.props.handleBreadCrumClick;

      if (handleBreadCrumClick) {
        handleBreadCrumClick(hierarchy);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var breadcrums = this.getBreadCrums();
      return _react2.default.createElement(
        BreadcrumContainer,
        null,
        breadcrums.length > 1 && this.getBreadCrums()
      );
    }
  }]);

  return BreadCrum;
}(_react.Component);

BreadCrum.propTypes = {
  style: _propTypes2.default.object,
  hierarchy: _propTypes2.default.array.isRequired,
  handleBreadCrumClick: _propTypes2.default.func
};
exports.default = BreadCrum;