'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputBox = require('./../InputBox');

var _InputBox2 = _interopRequireDefault(_InputBox);

var _util = require('./util');

var _lodash = require('lodash');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var ReactSelectionTree = function (_Component) {
  _inherits(ReactSelectionTree, _Component);

  function ReactSelectionTree(props) {
    _classCallCheck(this, ReactSelectionTree);

    var _this = _possibleConstructorReturn(this, (ReactSelectionTree.__proto__ || Object.getPrototypeOf(ReactSelectionTree)).call(this, props));

    _this.state = {
      data: false,
      originalData: false,
      flatData: false
    };
    return _this;
  }

  _createClass(ReactSelectionTree, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: 'load',
    value: function load() {
      var data = this.props.data;
      var flatData = (0, _util.flattenNode)(data, false);
      this.setState({
        data: data,
        flatData: flatData,
        originalData: (0, _lodash.merge)({}, this.state.data)
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var flatData = this.state.flatData;
      Object.keys(flatData).forEach(function (key) {
        if (flatData[key] && typeof flatData[key].checked !== 'undefined') {
          flatData[key].checked = false;
        }
      });
      var rootData = this.state.data;
      while (rootData.parent && rootData.parent !== null) {
        rootData = rootData.parent;
      }
      rootData.search_result = undefined;
      this.setState({
        data: Object.assign({}, rootData),
        flatData: Object.assign({}, this.state.flatData)
      });
    }
  }, {
    key: 'update',
    value: function update(data, callback) {
      this.setState({
        data: Object.assign({}, data),
        flatData: Object.assign({}, this.state.flatData)
      }, function () {
        if (callback) {
          callback(data);
        }
      });
    }
  }, {
    key: 'updateOriginalFromData',
    value: function updateOriginalFromData() {
      (0, _util.copyTreeState)(this.state.originalData, this.state.data);
      this.setState({
        originalData: Object.assign({}, this.state.originalData)
      });
    }
  }, {
    key: 'updateDataFromOriginal',
    value: function updateDataFromOriginal() {
      (0, _util.copyTreeState)(this.state.data, this.state.originalData);
      var rootNode = Object.assign({}, this.state.data);
      this.setState({
        data: rootNode,
        flatData: (0, _util.flattenNode)(rootNode)
      });
    }
  }, {
    key: 'checkEmpty',
    value: function checkEmpty() {
      return this.state.data && this.state.data !== null && this.state.data.children && this.state.data.children !== null && Object.keys(this.state.data.children).length === 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Container,
        null,
        this.checkEmpty() && _react2.default.createElement(
          'p',
          null,
          'There are no available data.'
        ),
        !this.checkEmpty() && this.state.data && _react2.default.createElement(_InputBox2.default, {
          name: this.props.name,
          filter: this.state.data,
          checkFilter: function checkFilter(name, filter, checked) {
            filter.checked = checked;
            if (checked) {
              (0, _util.flattenChildren)(filter, true);
            }
            if (!checked) {
              (0, _util.flattenParent)(filter, false);
              (0, _util.flattenChildren)(filter, false);
            }
            _this2.update(filter.parent && filter.parent !== null ? filter.parent : filter, _this2.props.check);
          },
          updateFilter: function updateFilter(data) {
            _this2.update(data);
            _this2.props.breadcrumClick(data);
          },
          searchFilter: function searchFilter(value) {
            var filter = _this2.state.data;
            var result = [];
            Object.keys(_this2.state.flatData).forEach(function (key) {
              if (result.length < 15 && _this2.state.flatData[key].name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                result.push(_this2.state.flatData[key]);
              }
            });
            while (filter.parent && filter.parent !== null) {
              filter = _this2.state.data.parent;
            }
            filter.search_result = result;
            _this2.update(filter, _this2.props.search);
          },
          resetSearch: function resetSearch() {
            var filter = _this2.state.data;
            while (filter.parent && filter.parent !== null) {
              filter = _this2.state.data.parent;
            }
            filter.search_result = [];
            _this2.update(filter, _this2.props.reset);
          },
          uncheckAll: function uncheckAll() {
            var filter = _this2.state.data;
            var flatData = _this2.state.flatData;
            Object.keys(flatData).forEach(function (key) {
              flatData[key].checked = false;
            });
            while (filter.parent && filter.parent !== null) {
              filter = _this2.state.data.parent;
            }
            _this2.update(filter, _this2.props.uncheckAll);
          },
          clearall: this.props.showClearAll,
          search: this.props.showSearch,
          multipleSelect: this.props.multipleSelect
        })
      );
    }
  }]);

  return ReactSelectionTree;
}(_react.Component);

ReactSelectionTree.propTypes = {
  name: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired,
  excludeSelect: _propTypes2.default.array,

  breadcrumClick: _propTypes2.default.func.isRequired,
  check: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.func.isRequired,
  reset: _propTypes2.default.func.isRequired,
  uncheckAll: _propTypes2.default.func.isRequired,
  showSearch: _propTypes2.default.bool,
  showClearAll: _propTypes2.default.bool,
  infinite: _propTypes2.default.bool,
  multipleSelect: _propTypes2.default.bool
};
ReactSelectionTree.defaultProps = {
  name: '',
  search: true
};
exports.default = ReactSelectionTree;