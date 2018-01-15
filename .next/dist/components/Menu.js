'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _accountBox = require('react-icons/lib/md/account-box');

var _accountBox2 = _interopRequireDefault(_accountBox);

var _infoOutline = require('react-icons/lib/md/info-outline');

var _infoOutline2 = _interopRequireDefault(_infoOutline);

var _developerBoard = require('react-icons/lib/md/developer-board');

var _developerBoard2 = _interopRequireDefault(_developerBoard);

var _group = require('react-icons/lib/md/group');

var _group2 = _interopRequireDefault(_group);

var _forum = require('react-icons/lib/md/forum');

var _forum2 = _interopRequireDefault(_forum);

var _colour = require('../utils/colour');

var _Item = require('./Menu/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ptietjen/Documents/repos/github/phil/next/Portfolio/application/components/Menu.js';


var Menu = function (_Component) {
    (0, _inherits3.default)(Menu, _Component);

    function Menu(props) {
        (0, _classCallCheck3.default)(this, Menu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

        _this.state = {
            home: {
                background: '#1abc9c'
            },
            about: {
                background: '#3498db'
            },
            portfolio: {
                background: '#9b59b6'
            },
            contacts: {
                background: '#e67e22'
            },
            feedback: {
                background: '#e74c3c'
            }
        };
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseOut = _this.handleMouseOut.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactstrap.Row, { style: { height: this.props.height, textAlign: 'center', color: '#FFFFFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_Item2.default, {
                key: 'home',
                id: 'home',
                title: 'Home',
                path: '/',
                icon: _react2.default.createElement(_accountBox2.default, { style: { fontSize: '3rem' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }),
                background: this.state.home.background,
                cursor: this.state.home.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_Item2.default, {
                key: 'about',
                id: 'about',
                title: 'About',
                path: '/about',
                icon: _react2.default.createElement(_infoOutline2.default, { style: { fontSize: '3rem' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }),
                background: this.state.about.background,
                cursor: this.state.about.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_Item2.default, {
                key: 'portfolio',
                id: 'portfolio',
                title: 'Portfolio',
                path: '/portfolio',
                icon: _react2.default.createElement(_developerBoard2.default, { style: { fontSize: '3rem' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }),
                background: this.state.portfolio.background,
                cursor: this.state.portfolio.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement(_Item2.default, {
                key: 'feedback',
                id: 'feedback',
                title: 'Feedback',
                path: '/feedback',
                icon: _react2.default.createElement(_forum2.default, { style: { fontSize: '3rem' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }),
                background: this.state.feedback.background,
                cursor: this.state.feedback.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }));
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver(id) {
            if (this.state[id]) {
                this.setState((0, _defineProperty3.default)({}, id, {
                    background: (0, _colour.LightenDarkenColor)(this.state[id].background, -10),
                    cursor: 'pointer'
                }));
            }
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut(id) {
            if (this.state[id]) {
                this.setState((0, _defineProperty3.default)({}, id, {
                    background: (0, _colour.LightenDarkenColor)(this.state[id].background, 10),
                    cursor: 'default'
                }));
            }
        }
    }]);

    return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJvdyIsIkhvbWVJY29uIiwiQWJvdXRJY29uIiwiUG9ydGZvbGlvSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkZlZWRiYWNrSWNvbiIsIkxpZ2h0ZW5EYXJrZW5Db2xvciIsIkl0ZW0iLCJNZW51IiwicHJvcHMiLCJzdGF0ZSIsImhvbWUiLCJiYWNrZ3JvdW5kIiwiYWJvdXQiLCJwb3J0Zm9saW8iLCJjb250YWN0cyIsImZlZWRiYWNrIiwiaGFuZGxlTW91c2VPdmVyIiwiYmluZCIsImhhbmRsZU1vdXNlT3V0IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsImN1cnNvciIsImlkIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUEwQjs7QUFDbkMsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFSSxBO2tDQUNqQjs7a0JBQUEsQUFBWSxPQUFNOzRDQUFBOztzSUFBQSxBQUNSLEFBQ047O2NBQUEsQUFBSzs7NEJBQVEsQUFDSCxBQUNVLEFBRWhCO0FBSE0sQUFDRjs7NEJBRkssQUFJRixBQUNTLEFBRWhCO0FBSE8sQUFDSDs7NEJBTEssQUFPRSxBQUNLLEFBRWhCO0FBSFcsQUFDUDs7NEJBUkssQUFVQyxBQUNNLEFBRWhCO0FBSFUsQUFDTjs7NEJBWFIsQUFBYSxBQWFDLEFBQ00sQUFHcEI7QUFKYyxBQUNOO0FBZEssQUFDVDtjQWdCSixBQUFLLGtCQUFrQixNQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBNUMsQUFDQTtjQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBcEI1QixBQW9CZDtlQUNI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