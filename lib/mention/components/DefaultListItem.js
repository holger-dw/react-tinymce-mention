'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actionsMentionActions = require('../actions/mentionActions');

var DefaultListItem = (function (_React$Component) {
  _inherits(DefaultListItem, _React$Component);

  function DefaultListItem() {
    _classCallCheck(this, DefaultListItem);

    _get(Object.getPrototypeOf(DefaultListItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DefaultListItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props;
      var dispatch = _props.dispatch;
      var index = _props.index;

      dispatch((0, _actionsMentionActions.select)(index));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var index = _props2.index;
      var highlightIndex = _props2.highlightIndex;
      var displayLabel = _props2.displayLabel;

      var classes = (0, _classnames2['default'])({
        'tinymce-mention__item--selected': highlightIndex === index,
        'tinymce-mention__item': true
      });

      return _react2['default'].createElement(
        'li',
        { className: classes, onMouseDown: this.handleClick.bind(this), style: { cursor: 'pointer' } },
        displayLabel
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      highlightIndex: _propTypes2['default'].number.isRequired,
      index: _propTypes2['default'].number.isRequired,
      displayLabel: _propTypes2['default'].string.isRequired
    },
    enumerable: true
  }]);

  return DefaultListItem;
})(_react2['default'].Component);

exports['default'] = DefaultListItem;
exports['default'] = (0, _reactRedux.connect)(function (state) {
  return {
    highlightIndex: state.mention.highlightIndex
  };
})(DefaultListItem);
module.exports = exports['default'];