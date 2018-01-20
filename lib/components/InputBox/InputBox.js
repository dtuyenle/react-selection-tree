'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 12px;\n  display: flex;\n  max-height: 280px;\n  border: 1px solid #CCC;\n  overflow: auto;\n  overflow-x: hidden;\n  margin-left: 5px;\n\n  span {\n    margin: 0;\n    font-weight: 400;\n  }\n'], ['\n  padding: 12px;\n  display: flex;\n  max-height: 280px;\n  border: 1px solid #CCC;\n  overflow: auto;\n  overflow-x: hidden;\n  margin-left: 5px;\n\n  span {\n    margin: 0;\n    font-weight: 400;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0.8em;\n  margin: 1em 0;\n\n  label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 8px;\n    height: 8px;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n'], ['\n  font-size: 0.8em;\n  margin: 1em 0;\n\n  label:before {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 8px;\n    height: 8px;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 1em;\n'], ['\n  font-size: 1em;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: auto;\n  height: 15px;\n'], ['\n  width: auto;\n  height: 15px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  &:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  img {\n    float: left;\n    background: #EEE;\n    color: #666;\n    border: 1px #CCC solid;\n    border-right: none;\n    padding: 0.68em;\n    width: 15px;\n    height: 15px;\n  }\n\n  input {\n    padding: 0.5em;\n    border-radius: 0px;\n    border: 1px #CCC solid;\n    flex-grow: 1;\n  }\n'], ['\n  display: flex;\n  &:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  img {\n    float: left;\n    background: #EEE;\n    color: #666;\n    border: 1px #CCC solid;\n    border-right: none;\n    padding: 0.68em;\n    width: 15px;\n    height: 15px;\n  }\n\n  input {\n    padding: 0.5em;\n    border-radius: 0px;\n    border: 1px #CCC solid;\n    flex-grow: 1;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin-top: 10px;\n  margin-left: 10px;\n  color: #6090C3;\n  cursor: pointer;\n  width: 60px;\n'], ['\n  margin-top: 10px;\n  margin-left: 10px;\n  color: #6090C3;\n  cursor: pointer;\n  width: 60px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: #6090C3;\n  margin: 10px 8px 0 8px;\n'], ['\n  color: #6090C3;\n  margin: 10px 8px 0 8px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('./../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Radio = require('./../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _BreadCrum = require('./../BreadCrum');

var _BreadCrum2 = _interopRequireDefault(_BreadCrum);

var _ToolTip = require('./../ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

var _reactVirtualized = require('react-virtualized');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var searchIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARhSURBVGhD1ZpbyGZTGMc/jHNyisjZjNOFQyPcTCZFIYQL05waJHeomZrBpChuRk2GQo6RUrhwmCYulZwPGcwNzTCOQ85R5PT7YdXTau3x7r3X/mb716/eb7/f+6y19l7rOb3vVA8dCBfCtXAHPAD3wRpYBufC3jBKHQw3wDvw5wT8Dq/A1bAvbHO5gPvhFyhNeBJ+hFthL5h2bQdXgZMoTU5+hU3wOrwJm+E3KP2vfAGXwLRpD3gGSpN5F26BU2FHyLUznAG3wUYo2bgbSp+tqv3AO5wP7h0/E9rIpzoP3ofc3jrYDQbRnvAaxAF/hkvBSXXVTqCHy7fdU7ADVJUTfRriQJ/AyVBLZ8N3EMe4HarqGogDfAyHQG2dAHExf8D5UEW62OidfoJTYChdAHGbfQS7Q28ZJ5JRuQyG1s0Qx7wOesmnEYPdG9DnYE8qPdankMb9CnaFzloJyZi0dbF9dAXEsedDZxngkqH3vDCNMihugTS+7riTDoBkRIzYUdvDif+8HEx3QRr/e5gBrWUqHhdyGkSZF5lvDamLIc7hJGgto20yYAKY3w3zrfwp1dbhEBdiStNaFkXJwAdeCHJb+agf/fuv4eQ4MaYshdZ6EJKBt7wQpFv2+tfQad+20LeQ5nGjF9oqBsK3vRB0PKT3TMuHVExZOgVGa+xk4EMvBEWP9qQXBpJP23wrjXU5tJb7MRlwn+4CSabXMeLPgSF0NKQx5DxoLbsd0Ui+hZ6D9N56GKIQWghxDrOgtWzZ2O1IRixPo66EOMgTUDsPewiSfWv+znoVkiEbCXGi1t+enfS+3Au16m2fsC4+2bY/1ln2neJE8y7HRRAPozwP+0NfrYBo1wqys2yexaLKwJjf8ZsgDijeSTPnrgXRPhDjhwlr7227CuIkvVO5lkM8TwkDpvvcnOkgmHTb3QPRTie3m8sOYEyndcXnQK7TwTZonECO29C7uxia7nDuRGw/VcsePBvRuNG2lIk6ubmwGl4EPc2XsAEegSWwtUrvLIjxyddmEVVlBzAu5gfoFKAa5JMwy45j2KirLhtpayEO5LnwsPepp3Uo+U2K2IjQvlu32tPRt5f6vp+BNXabGKItnUT0Tk3Y0Uyv3bKHQW958Ewo8/ghOoU7wfhyBFhPJPm5o8C042HIu4rihJ/NrpWw13UkVJHnQ4OlgRJuvW/+pfR+5AUwSdRh2Cot/U+k6mIMeNeDnqk02CRYtC2C+PTyPK8JveJMqCYP4wKwNtGblQaNmLeZlzX1yYxTpc+VsA/tlq0uz4JtIhsFfvlpeWplZ6vV7TjJHZwNpUk34TcDbstR6iUoTboJW6zHwOh0KPyXM8kxDBwLo5NeyQNdmnQTn8NxMDp5pjzQpUk34WJsWY1O1uptF/M4jFK6WL1TadIlDMKjlS42fgG0NVz0qKWL1TuVJh+xsh29dLEe6NIC5GXo9VXddEoX6+9XSovwxw3/K9nQeAysaTwT/spoiI7nttbU1F8ecld/HmfjEQAAAABJRU5ErkJggg==';
var chevrondown = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=';

var CheckboxContainer = _styledComponents2.default.div(_templateObject);

var CheckboxCustom = _styledComponents2.default.div(_templateObject2);

var CheckboxLabel = _styledComponents2.default.label(_templateObject3);

var CheckboxLabelLevelDown = _styledComponents2.default.img(_templateObject4);

var Search = _styledComponents2.default.div(_templateObject5);

var ClearAll = _styledComponents2.default.div(_templateObject6);

var ShowAll = _styledComponents2.default.div(_templateObject7);

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
        keys.forEach(function (key) {
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
        onChange: this.handleCheckBoxClick.bind(this, checkboxNode)
      });

      var label = _react2.default.createElement(
        CheckboxLabel,
        { htmlFor: id, title: hoverText },
        _react2.default.createElement(_ToolTip2.default, {
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
          {
            'data-hint': 'Go to next level',
            id: id + '_inner',
            className: 'hint--top',
            onClick: this.handleInnerLevelClick.bind(this, checkboxNode)
          },
          _react2.default.createElement(CheckboxLabelLevelDown, { alt: 'next-level', src: chevrondown })
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
        CheckboxLabel,
        { htmlFor: 'custom', title: customName },
        customName
      );
      return _react2.default.createElement(
        'div',
        { key: customValue },
        _react2.default.createElement(
          CheckboxCustom,
          null,
          _react2.default.createElement(
            _CheckBox2.default,
            null,
            input,
            label
          )
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
      keysObj.forEach(function (item) {
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
      return _react2.default.createElement(_BreadCrum2.default, {
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
      hierarchy.forEach(function (item) {
        hover.push(item.name);
      });
      return hover.reverse().join(' > ');
    }
  }, {
    key: 'getSearchInput',
    value: function getSearchInput() {
      var filter = this.props.filter;

      return _react2.default.createElement(
        Search,
        null,
        _react2.default.createElement('img', { alt: 'search', src: searchIcon }),
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
          null,
          BREADCRUMS_RENDER
        ),
        filter && _react2.default.createElement(
          CheckboxContainer,
          { key: name.split(' ').join(''), style: infinite ? { overflow: 'inherit', maxHeight: 'none' } : {} },
          CHECKBOX_RENDER.length === 0 ? 'No Results Found !' : _react2.default.createElement(
            'div',
            { key: Math.random() },
            CHECKBOX_RENDER
          ),
          CHECKBOX_RENDER.length < 52 && this.props.showAll && _react2.default.createElement(
            ShowAll,
            { onClick: this.props.showAll.bind(this) },
            'Show More'
          )
        ),
        filter && clearall && _react2.default.createElement(
          ClearAll,
          {
            id: 'binary_filter_clearall_' + name.split(' ').join('_').toLowerCase(),
            onClick: this.uncheckAll.bind(this) },
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