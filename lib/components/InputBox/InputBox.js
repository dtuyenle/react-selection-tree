'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('./../Style/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Radio = require('./../Style/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _BinaryBreadCrum = require('./../BinaryBreadCrum');

var _BinaryBreadCrum2 = _interopRequireDefault(_BinaryBreadCrum);

var _BinaryToolTip = require('./../BinaryToolTip');

var _BinaryToolTip2 = _interopRequireDefault(_BinaryToolTip);

var _reactVirtualized = require('react-virtualized');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputBox = function (_Component) {
  _inherits(InputBox, _Component);

  function InputBox(props) {
    _classCallCheck(this, InputBox);

    var _this = _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call(this, props));

    _this.state = {
      breadcrums: [],
      search_value: ''
    };

    _this.list = [];
    _this.styles = require('./InputBox.scss');
    return _this;
  }

  _createClass(InputBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.filter.search_result === 'undefined') {
        this.setState({ search_value: '' });
      }
    }
  }, {
    key: 'getCheckBoxes',
    value: function getCheckBoxes() {
      var _this2 = this;

      var _props = this.props,
          filter = _props.filter,
          name = _props.name,
          infinite = _props.infinite;

      var DATA = [];
      var DATASTAYFIRST = [];
      var keys = this.getOrderCheckBoxesByNameKey();
      if (this.state.search_value.trim().length < 3) {
        keys.map(function (key) {
          if (!filter.children[key].stayfirst) {
            DATA.push(_this2.getCheckBox(filter.children[key], name));
          } else {
            DATASTAYFIRST.push(_this2.getCheckBox(filter.children[key], name));
          }
        });
      } else {
        if (filter.search_result && filter.search_result.length > 0) {
          filter.search_result.forEach(function (item) {
            if (!item.stayfirst) {
              DATA.push(_this2.getCheckBox(item, name));
            } else {
              DATASTAYFIRST.push(_this2.getCheckBox(item, name));
            }
          });
        }
      }

      this.list = DATASTAYFIRST.concat(DATA);
      this.listElem = _react2.default.createElement(_reactVirtualized.List, {
        ref: 'list',
        width: 410,
        height: 300,
        rowCount: this.list.length,
        rowHeight: 30,
        rowRenderer: function rowRenderer(_ref) {
          var key = _ref.key,
              index = _ref.index,
              style = _ref.style;

          return _react2.default.createElement(
            'div',
            { key: key, style: style },
            _this2.list[index]
          );
        }
      });

      return infinite ? this.listElem : DATASTAYFIRST.concat(DATA);
    }
  }, {
    key: 'getCheckBox',
    value: function getCheckBox(checkboxNode, filterName) {
      var _React$createElement;

      var _props2 = this.props,
          multipleSelect = _props2.multipleSelect,
          direction = _props2.direction,
          excludeSelect = _props2.excludeSelect,
          toolTipPlacement = _props2.toolTipPlacement;

      var id = checkboxNode.id + '_' + filterName.toLowerCase().split(' ').join('_');
      var name = filterName;
      var hoverText = this.getHoverText(checkboxNode);
      var defaultChecked = typeof checkboxNode.checked !== 'undefined' ? checkboxNode.checked : false;
      var style = direction === 'horizontal' ? { display: 'inline' } : { display: 'block' };

      var input = _react2.default.createElement('input', {
        defaultChecked: defaultChecked,
        ref: checkboxNode.id,
        key: checkboxNode.id,
        type: multipleSelect ? 'checkbox' : 'radio',
        id: id,
        name: multipleSelect ? name + '_' + id : id,
        className: this.styles.binary_checkbox,
        onChange: this.handleCheckBoxClick.bind(this, checkboxNode)
      });

      var label = _react2.default.createElement(
        'label',
        { htmlFor: id, title: hoverText, className: this.styles.binary_checkbox_label },
        _react2.default.createElement(_BinaryToolTip2.default, {
          key: 'binary_checkbox_tooltip',
          node: _react2.default.createElement(
            'span',
            null,
            checkboxNode.name
          ),
          data: hoverText.split('>').length > 1 && _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              hoverText
            )
          ),
          placement: toolTipPlacement ? toolTipPlacement : 'left'
        }),
        checkboxNode.children && checkboxNode.children !== null && Object.keys(checkboxNode.children).length !== 0 && _react2.default.createElement(
          'span',
          (_React$createElement = {
            className: 'hint--top',
            'data-hint': 'Go to next level',
            id: id + '_inner'
          }, _defineProperty(_React$createElement, 'className', this.styles.binary_checkbox_label_level_down), _defineProperty(_React$createElement, 'onClick', this.handleInnerLevelClick.bind(this, checkboxNode)), _React$createElement),
          _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
        )
      );
      if (excludeSelect.indexOf(checkboxNode.id) !== -1) {
        return _react2.default.createElement('span', null);
      }
      return multipleSelect ? _react2.default.createElement(
        _CheckBox2.default,
        { style: style },
        input,
        label
      ) : _react2.default.createElement(
        _Radio2.default,
        { style: style },
        input,
        label
      );
    }
  }, {
    key: 'getCustomInput',
    value: function getCustomInput() {
      var _this3 = this;

      var _props3 = this.props,
          customName = _props3.customName,
          customValue = _props3.customValue;

      var input = _react2.default.createElement('input', {
        defaultChecked: customValue,
        ref: 'custom',
        key: 'custom_' + customValue,
        type: 'checkbox',
        id: 'custom',
        name: 'custom',
        onChange: function onChange() {
          _this3.props.updateCustom();
        }
      });
      var label = _react2.default.createElement(
        'label',
        { htmlFor: 'custom', title: customName, className: this.styles.binary_checkbox_label },
        customName
      );
      return _react2.default.createElement(
        'div',
        { key: customValue, className: this.styles.binary_checkbox_custom },
        _react2.default.createElement(
          _CheckBox2.default,
          null,
          input,
          label
        )
      );
    }
  }, {
    key: 'getOrderCheckBoxesByNameKey',
    value: function getOrderCheckBoxesByNameKey() {
      var filter = this.props.filter;

      var keysinorder = [];
      var keysObj = [];
      if (filter && filter.children && filter.children !== null) {
        Object.keys(filter.children).forEach(function (key) {
          keysObj.push(filter.children[key]);
        });
      }
      keysObj.sort(function (item1, item2) {
        var item1_ = '';
        var item2_ = '';
        if (item1.index && item2.index) {
          item1_ = item1.index;
          item2_ = item2.index;
        } else {
          item1_ = item1.name;
          item2_ = item2.name;
        }
        if (item1_ > item2_) {
          return 1;
        }
        if (item1_ < item2_) {
          return -1;
        }
        return 0;
      });
      keysObj.map(function (item) {
        keysinorder.push(item.id);
      });
      return keysinorder;
    }
  }, {
    key: 'getCheckBoxBreadCrums',
    value: function getCheckBoxBreadCrums() {
      var filter = this.props.filter;

      var hierarchy = [filter];
      var checkbox = filter;

      while (checkbox && checkbox.parentId !== null && checkbox.parent) {
        hierarchy.push(checkbox.parent);
        checkbox = checkbox.parent;
      }
      return _react2.default.createElement(_BinaryBreadCrum2.default, {
        style: { fontSize: '12px' },
        hierarchy: hierarchy.reverse(),
        handleBreadCrumClick: this.handleBreadCrumClick.bind(this) });
    }
  }, {
    key: 'getHoverText',
    value: function getHoverText(filter) {
      var filterData = Object.assign({}, filter);
      var hierarchy = [];
      var hover = [];
      while (filterData.parent) {
        hierarchy.push(filterData.parent);
        filterData = filterData.parent;
      }
      hierarchy.map(function (item) {
        hover.push(item.name);
      });
      return hover.reverse().join(' > ');
    }
  }, {
    key: 'getSearchInput',
    value: function getSearchInput() {
      var filter = this.props.filter;

      return _react2.default.createElement(
        'div',
        { className: this.styles.binary_filter_search },
        _react2.default.createElement('i', { className: 'fa fa-search' }),
        _react2.default.createElement('input', {
          onChange: this.search.bind(this),
          type: 'text',
          placeholder: 'Search',
          ref: 'search',
          id: 'binary_checkbox_search_' + filter.name,
          maxLength: 80,
          value: this.state.search_value,
          addonBefore: _react2.default.createElement('i', { className: 'fa fa-search' })
        })
      );
    }
  }, {
    key: 'search',
    value: function search(event) {
      var _this4 = this;

      if (event.target.value.trim().length === 0) {
        this.props.resetSearch();
      }
      if (event.target.value.length < 3) {
        this.setState({ search_value: event.target.value });
      } else {
        this.setState({ search_value: event.target.value }, function () {
          _this4.props.searchFilter(_this4.state.search_value);
        });
      }
    }
  }, {
    key: 'handleBreadCrumClick',
    value: function handleBreadCrumClick(filters) {
      this.props.updateFilter(filters[filters.length - 1]);
    }
  }, {
    key: 'handleInnerLevelClick',
    value: function handleInnerLevelClick(filter) {
      var _this5 = this;

      this.setState({
        search_value: ''
      }, function () {
        _this5.props.updateFilter(filter);
      });
    }
  }, {
    key: 'uncheckAll',
    value: function uncheckAll() {
      var _this6 = this;

      this.setState({
        search_value: ''
      }, function () {
        _this6.props.uncheckAll();
        if (_this6.refs.list) {
          _this6.refs.list.forceUpdateGrid();
        }
      });
    }
  }, {
    key: 'handleCheckBoxClick',
    value: function handleCheckBoxClick(filter, event) {
      var _props4 = this.props,
          name = _props4.name,
          checkFilter = _props4.checkFilter;

      if (checkFilter) {
        checkFilter(name, filter, event.target.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          filter = _props5.filter,
          updateCustom = _props5.updateCustom,
          name = _props5.name,
          search = _props5.search,
          clearall = _props5.clearall,
          infinite = _props5.infinite;

      var CHECKBOX_RENDER = this.getCheckBoxes();
      var BREADCRUMS_RENDER = this.getCheckBoxBreadCrums();

      return _react2.default.createElement(
        'div',
        null,
        filter && search && this.getSearchInput(),
        filter && updateCustom && this.getCustomInput(),
        filter && _react2.default.createElement(
          'div',
          { className: this.styles.binary_filter_checkbox_breadcrum },
          BREADCRUMS_RENDER
        ),
        filter && _react2.default.createElement(
          'div',
          { key: name.split(' ').join(''), style: infinite ? { overflow: 'inherit', maxHeight: 'none' } : {}, className: this.styles.binary_filter_checkbox_container },
          CHECKBOX_RENDER.length === 0 ? 'No Results Found !' : _react2.default.createElement(
            'div',
            { key: Math.random() },
            CHECKBOX_RENDER
          ),
          CHECKBOX_RENDER.length < 52 && this.props.showAll && _react2.default.createElement(
            'p',
            { className: this.styles.show_all, onClick: this.props.showAll.bind(this) },
            'Show More'
          )
        ),
        filter && clearall && _react2.default.createElement(
          'div',
          {
            id: 'binary_filter_clearall_' + name.split(' ').join('_').toLowerCase(),
            onClick: this.uncheckAll.bind(this),
            className: this.styles.clear_all },
          'clear all'
        ),
        typeof filter === 'undefined' && _react2.default.createElement(
          'p',
          null,
          'No Data'
        )
      );
    }
  }]);

  return InputBox;
}(_react.Component);

InputBox.propTypes = {
  name: _propTypes2.default.string.isRequired,
  filter: _propTypes2.default.object.isRequired,
  excludeSelect: _propTypes2.default.array,
  toolTipPlacement: _propTypes2.default.string,

  customName: _propTypes2.default.string,
  customValue: _propTypes2.default.bool,
  updateCustom: _propTypes2.default.func,
  direction: _propTypes2.default.string,

  updateFilter: _propTypes2.default.func.isRequired,
  checkFilter: _propTypes2.default.func.isRequired,
  searchFilter: _propTypes2.default.func.isRequired,
  showAll: _propTypes2.default.func,
  resetSearch: _propTypes2.default.func.isRequired,
  uncheckAll: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.bool,
  clearall: _propTypes2.default.bool,
  infinite: _propTypes2.default.bool,
  multipleSelect: _propTypes2.default.bool
};
InputBox.defaultProps = {
  name: '',
  search: false,
  clearall: true,
  direction: 'vertical',
  timer: null,
  excludeSelect: [],
  infinite: false,
  multipleSelect: true
};
exports.default = InputBox;