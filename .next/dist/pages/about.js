'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactstrap = require('reactstrap');

var _Template = require('../components/Template');

var _Template2 = _interopRequireDefault(_Template);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Technologies = require('../components/Technologies');

var _Technologies2 = _interopRequireDefault(_Technologies);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _FactsAboutMe = require('../components/FactsAboutMe');

var _FactsAboutMe2 = _interopRequireDefault(_FactsAboutMe);

var _SectionTitle = require('../components/SectionTitle');

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _reactLoremComponent = require('react-lorem-component');

var _reactLoremComponent2 = _interopRequireDefault(_reactLoremComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ptietjen/Documents/repos/github/phil/next/Portfolio/application/pages/about.js?entry';


var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);

        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Template2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_reactstrap.Col, { style: { backgroundColor: "#3498db", color: '#FFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', { className: 'page-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('h2', { style: {
                    fontSize: '48px',
                    textTransform: 'capitalize',
                    fontWeight: 700
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Resume'), _react2.default.createElement(_reactLoremComponent2.default, { count: '1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })))), _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_reactstrap.Col, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_FactsAboutMe2.default, { items: this.props.facts, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }))), _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_reactstrap.Col, { style: { backgroundColor: "#f7f7f7" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_Technologies2.default, { items: this.props.technologies, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }))), _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_reactstrap.Col, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_Timeline2.default, { items: this.props.timeline, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var req = _ref.req;
                var res, facts, technologies, timeline;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _promise2.default.all([(0, _isomorphicUnfetch2.default)('https://philip-tietjen.firebaseio.com/content/facts.json'), (0, _isomorphicUnfetch2.default)('https://philip-tietjen.firebaseio.com/content/technology.json'), (0, _isomorphicUnfetch2.default)('https://philip-tietjen.firebaseio.com/content/timeline.json')]);

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res[0].json();

                            case 5:
                                facts = _context.sent;
                                _context.next = 8;
                                return res[1].json();

                            case 8:
                                technologies = _context.sent;
                                _context.next = 11;
                                return res[2].json();

                            case 11:
                                timeline = _context.sent;
                                return _context.abrupt('return', {
                                    facts: facts.items,
                                    technologies: technologies.items,
                                    timeline: timeline.items
                                });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return About;
}(_react.Component);

exports.default = About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJSb3ciLCJDb2wiLCJUZW1wbGF0ZSIsIkhlYWRlciIsIlRlY2hub2xvZ2llcyIsIlRpbWVsaW5lIiwiRmFjdHNBYm91dE1lIiwiU2VjdGlvblRpdGxlIiwiTG9yZW0iLCJBYm91dCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsInByb3BzIiwiZmFjdHMiLCJ0ZWNobm9sb2dpZXMiLCJ0aW1lbGluZSIsInJlcSIsImFsbCIsInJlcyIsImpzb24iLCJpdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBRVAsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7O2lDQWlCVCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxpQ0FBSSxPQUFPLEVBQUMsaUJBQUQsQUFBaUIsV0FBVyxPQUF4QyxBQUFZLEFBQW1DOzhCQUEvQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJOzhCQUFPLEFBQ0csQUFDVjttQ0FGTyxBQUVRLEFBQ2Y7Z0NBSEosQUFBVyxBQUdLO0FBSEwsQUFDUDs4QkFESjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUtBLDJCQUFBLEFBQUMsK0NBQU0sT0FBUCxBQUFhOzhCQUFiO2dDQVRoQixBQUNJLEFBQ0ksQUFDSSxBQU1JLEFBSVo7QUFKWTttQ0FJWixBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHdDQUFhLE9BQU8sS0FBQSxBQUFLLE1BQTFCLEFBQWdDOzhCQUFoQztnQ0FmWixBQWFJLEFBQ0ksQUFDSSxBQUdSO0FBSFE7a0NBR1IsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxpQ0FBSSxPQUFPLEVBQUMsaUJBQWIsQUFBWSxBQUFpQjs4QkFBN0I7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsd0NBQWEsT0FBTyxLQUFBLEFBQUssTUFBMUIsQUFBZ0M7OEJBQWhDO2dDQXBCWixBQWtCSSxBQUNJLEFBQ0ksQUFHUjtBQUhRO2tDQUdSLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsb0NBQVMsT0FBTyxLQUFBLEFBQUssTUFBdEIsQUFBNEI7OEJBQTVCO2dDQTFCaEIsQUFDSSxBQXVCSSxBQUNJLEFBQ0ksQUFLbkI7QUFMbUI7Ozs7Ozs7b0IsQUEzQ1csVyxBQUFBOzs7Ozs7O3VDQUNULGtCQUFBLEFBQVEsSUFBSSxDQUMxQixpQ0FEMEIsQUFDMUIsQUFBTSw2REFDTixpQ0FGMEIsQUFFMUIsQUFBTSxrRUFDTixpQyxBQUhjLEFBQVksQUFHMUIsQUFBTTs7aUNBSEo7QTs7dUNBS2dCLElBQUEsQUFBSSxHLEFBQUosQUFBTzs7aUNBQXJCO0E7O3VDQUNxQixJQUFBLEFBQUksR0FBSixBQUFPLEE7O2lDQUE1QjtBOzt1Q0FDaUIsSUFBQSxBQUFJLEdBQUosQUFBTyxBOztpQ0FBeEI7QTs7MkNBR0csTUFESixBQUNVLEFBQ2I7a0RBQWMsYUFGWCxBQUV3QixBQUMzQjs4Q0FBVSxTLEFBSFAsQUFHZ0I7QUFIaEIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVp1QixBOztrQkFBZCxBIiwiZmlsZSI6ImFib3V0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wdGlldGplbi9Eb2N1bWVudHMvcmVwb3MvZ2l0aHViL3BoaWwvbmV4dC9Qb3J0Zm9saW8vYXBwbGljYXRpb24ifQ==