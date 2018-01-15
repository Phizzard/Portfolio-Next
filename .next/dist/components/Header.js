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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Item = require('./Menu/Item');

var _Item2 = _interopRequireDefault(_Item);

var _Title = require('./Header/Title');

var _Title2 = _interopRequireDefault(_Title);

var _linkedinSquare = require('react-icons/lib/fa/linkedin-square');

var _linkedinSquare2 = _interopRequireDefault(_linkedinSquare);

var _fileDownload = require('react-icons/lib/md/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _colour = require('../utils/colour');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ptietjen/Documents/repos/github/phil/next/Portfolio/application/components/Header.js';

var headerHeight = 470;
var headerSegmentHeight = headerHeight / 3;

var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

        _this.state = {
            linkedIn: {
                background: '#3b3b3b',
                cursor: 'default'
            },
            download: {
                background: '#474747',
                cursor: 'default'
            }
        };
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseOut = _this.handleMouseOut.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: '1878424550',
                css: '.header-headshot.jsx-1878424550{background-image:url("/static/intro-headshot.jpg");background-size:cover;background-repeat:no-repeat;background-position:center;min-height:' + headerHeight + 'px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCNEIsQUFHNEUsbURBQzdCLHNCQUNNLDRCQUNELDJCQUNlLDBDQUM5QyIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHRpZXRqZW4vRG9jdW1lbnRzL3JlcG9zL2dpdGh1Yi9waGlsL25leHQvUG9ydGZvbGlvL2FwcGxpY2F0aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIENhcmRHcm91cCwgQ2FyZCwgQ2FyZEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL01lbnUvSXRlbSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9IZWFkZXIvVGl0bGUnO1xuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbGlua2VkaW4tc3F1YXJlJztcbmltcG9ydCBEb3dubG9hZEljb24gZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2ZpbGUtZG93bmxvYWQnO1xuaW1wb3J0IHtMaWdodGVuRGFya2VuQ29sb3J9IGZyb20gJy4uL3V0aWxzL2NvbG91cic7XG5jb25zdCBoZWFkZXJIZWlnaHQgPSA0NzA7XG5jb25zdCBoZWFkZXJTZWdtZW50SGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDMpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW5rZWRJbjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjM2IzYjNiJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0NzQ3NDcnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU92ZXIgPSB0aGlzLmhhbmRsZU1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3V0ID0gdGhpcy5oYW5kbGVNb3VzZU91dC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaGVhZHNob3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbnRyby1oZWFkc2hvdC5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICR7aGVhZGVySGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMDAgaGVhZGVyLWhlYWRzaG90XCIgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwibWFpbi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNGY0ZjRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2hlYWRlclNlZ21lbnRIZWlnaHR9cHhgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQaGlsaXAgVGlldGplblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJkb3dubG9hZC1jdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PERvd25sb2FkSWNvbiBzdHlsZT17e2ZvbnRTaXplOiAnM3JlbScsIGNvbG9yOiAnI2E2YTZhNid9fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17dGhpcy5zdGF0ZS5kb3dubG9hZC5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj17dGhpcy5zdGF0ZS5kb3dubG9hZC5jdXJzb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VPdmVyPXt0aGlzLmhhbmRsZU1vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZU91dD17dGhpcy5oYW5kbGVNb3VzZU91dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJtYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjM2YzZjNmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2hlYWRlclNlZ21lbnRIZWlnaHR9cHhgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJXZWIgRGV2ZWxvcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImxpbmtlZGluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8TGlua2VkSW5JY29uIHN0eWxlPXt7Zm9udFNpemU6ICczcmVtJywgY29sb3I6ICcjYTZhNmE2J319IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlua2VkSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGhpbGlwLXRpZXRqZW4tM2E3NDY4NTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e3RoaXMuc3RhdGUubGlua2VkSW4uYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I9e3RoaXMuc3RhdGUubGlua2VkSW4uY3Vyc29yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlT3Zlcj17dGhpcy5oYW5kbGVNb3VzZU92ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VPdXQ9e3RoaXMuaGFuZGxlTW91c2VPdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaGVpZ2h0PXtoZWFkZXJTZWdtZW50SGVpZ2h0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGhhbmRsZU1vdXNlT3ZlcihpZCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGVbaWRdKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIFtpZF0gOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IExpZ2h0ZW5EYXJrZW5Db2xvcih0aGlzLnN0YXRlW2lkXS5iYWNrZ3JvdW5kLCAtMTApLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBoYW5kbGVNb3VzZU91dChpZCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGVbaWRdKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIFtpZF0gOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IExpZ2h0ZW5EYXJrZW5Db2xvcih0aGlzLnN0YXRlW2lkXS5iYWNrZ3JvdW5kLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
            }), _react2.default.createElement(_reactstrap.Col, { md: '3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('img', {
                className: 'jsx-1878424550' + ' ' + 'w-100 header-headshot',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_reactstrap.Col, { md: '9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_reactstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_Title2.default, {
                key: 'main-title',
                h1: true,
                backgroundColor: '#4f4f4f',
                height: headerSegmentHeight + 'px',
                text: 'Philip Tietjen',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement(_Item2.default, {
                key: 'download-cv',
                icon: _react2.default.createElement(_fileDownload2.default, { style: { fontSize: '3rem', color: '#a6a6a6' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }),
                id: 'download',
                path: '/',
                background: this.state.download.background,
                cursor: this.state.download.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement(_Title2.default, {
                key: 'main-title',
                backgroundColor: '#3f3f3f',
                height: headerSegmentHeight + 'px',
                text: 'Web Developer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement(_Item2.default, {
                key: 'linkedin',
                icon: _react2.default.createElement(_linkedinSquare2.default, { style: { fontSize: '3rem', color: '#a6a6a6' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }),
                id: 'linkedIn',
                path: 'https://www.linkedin.com/in/philip-tietjen-3a746851',
                background: this.state.linkedIn.background,
                cursor: this.state.linkedIn.cursor,
                mouseOver: this.handleMouseOver,
                mouseOut: this.handleMouseOut,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_reactstrap.Col, { xs: '12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_Menu2.default, { height: headerSegmentHeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            })))));
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

    return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiQ2FyZEdyb3VwIiwiQ2FyZCIsIkNhcmRCb2R5IiwiTWVudSIsIkl0ZW0iLCJUaXRsZSIsIkxpbmtlZEluSWNvbiIsIkRvd25sb2FkSWNvbiIsIkxpZ2h0ZW5EYXJrZW5Db2xvciIsImhlYWRlckhlaWdodCIsImhlYWRlclNlZ21lbnRIZWlnaHQiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibGlua2VkSW4iLCJiYWNrZ3JvdW5kIiwiY3Vyc29yIiwiZG93bmxvYWQiLCJoYW5kbGVNb3VzZU92ZXIiLCJiaW5kIiwiaGFuZGxlTW91c2VPdXQiLCJmb250U2l6ZSIsImNvbG9yIiwiaWQiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQUssQUFBSyxBQUFRLEFBQVcsQUFBTTs7QUFDNUMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFRLEFBQXlCOzs7Ozs7QUFDakMsSUFBTSxlQUFOLEFBQXFCO0FBQ3JCLElBQU0sc0JBQXVCLGVBQTdCLEFBQTRDOztJQUV2QixBO29DQUNqQjs7b0JBQUEsQUFBWSxPQUFNOzRDQUFBOzswSUFBQSxBQUNSLEFBQ047O2NBQUEsQUFBSzs7NEJBQ1MsQUFDTSxBQUNaO3dCQUhLLEFBQ0MsQUFFRSxBQUVaO0FBSlUsQUFDTjs7NEJBR00sQUFDTSxBQUNaO3dCQVBSLEFBQWEsQUFLQyxBQUVFLEFBR2hCO0FBTGMsQUFDTjtBQU5LLEFBQ1Q7Y0FTSixBQUFLLGtCQUFrQixNQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBNUMsQUFDQTtjQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBYjVCLEFBYWQ7ZUFDSDs7Ozs7aUNBQ08sQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsYUFBQTt5QkFBQTtxTUFBQSxBQU8wQixlQVAxQixBQVVJO0FBVkosZ0NBVUksQUFBQyxpQ0FBSSxJQUFMLEFBQVE7OEJBQVI7Z0NBQUEsQUFDSTtBQURKOztvREFDSSxBQUFlOzs4QkFBZjtnQ0FYUixBQVVJLEFBQ0ksQUFFSjtBQUZJO0FBQUEsaUNBRUosQUFBQyxpQ0FBSSxJQUFMLEFBQVE7OEJBQVI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7cUJBQUQsQUFDUSxBQUNKO29CQUZKLEFBR0k7aUNBSEosQUFHb0IsQUFDaEI7d0JBQUEsQUFBVyxzQkFKZixBQUtJO3NCQUxKLEFBS1M7OzhCQUxUO2dDQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0ksZ0NBTUosQUFBQztxQkFBRCxBQUNRLEFBQ0o7c0NBQU0sQUFBQyx3Q0FBYSxPQUFPLEVBQUMsVUFBRCxBQUFXLFFBQVEsT0FBeEMsQUFBcUIsQUFBMEI7a0NBQS9DO29DQUZWLEFBRVUsQUFDTjtBQURNO2lCQUFBO29CQUZWLEFBR08sQUFDSDtzQkFKSixBQUlTLEFBQ0w7NEJBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUwzQixBQUtvQyxBQUNoQzt3QkFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBTnZCLEFBTWdDLEFBQzVCOzJCQUFXLEtBUGYsQUFPb0IsQUFDaEI7MEJBQVUsS0FSZCxBQVFtQjs7OEJBUm5CO2dDQVJKLEFBUUksQUFVQTtBQVZBO0FBQ0ksZ0NBU0osQUFBQztxQkFBRCxBQUNRLEFBQ0o7aUNBRkosQUFFb0IsQUFDaEI7d0JBQUEsQUFBVyxzQkFIZixBQUlJO3NCQUpKLEFBSVM7OzhCQUpUO2dDQWxCSixBQWtCSSxBQU1BO0FBTkE7QUFDSSxnQ0FLSixBQUFDO3FCQUFELEFBQ1EsQUFDSjtzQ0FBTSxBQUFDLDBDQUFhLE9BQU8sRUFBQyxVQUFELEFBQVcsUUFBUSxPQUF4QyxBQUFxQixBQUEwQjtrQ0FBL0M7b0NBRlYsQUFFVSxBQUNOO0FBRE07aUJBQUE7b0JBRlYsQUFHTyxBQUNIO3NCQUpKLEFBSVMsQUFDTDs0QkFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBTDNCLEFBS29DLEFBQ2hDO3dCQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FOdkIsQUFNZ0MsQUFDNUI7MkJBQVcsS0FQZixBQU9vQixBQUNoQjswQkFBVSxLQVJkLEFBUW1COzs4QkFSbkI7Z0NBeEJKLEFBd0JJLEFBVUE7QUFWQTtBQUNJLGdDQVNKLEFBQUMsaUNBQUksSUFBTCxBQUFROzhCQUFSO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLGdDQUFLLFFBQU4sQUFBYzs4QkFBZDtnQ0FsRHBCLEFBQ0ksQUFhSSxBQUNJLEFBa0NJLEFBQ0ksQUFNdkI7QUFOdUI7Ozs7O3dDLEFBT1IsSUFBRyxBQUNmO2dCQUFHLEtBQUEsQUFBSyxNQUFSLEFBQUcsQUFBVyxLQUFJLEFBQ2Q7cUJBQUEsQUFBSywyQ0FBTCxBQUNLO2dDQUNlLGdDQUFtQixLQUFBLEFBQUssTUFBTCxBQUFXLElBQTlCLEFBQWtDLFlBQVksQ0FEdkQsQUFDUyxBQUErQyxBQUMzRDs0QkFIUixBQUNXLEFBRUssQUFHbkI7QUFMYyxBQUNIO0FBTWY7Ozs7dUMsQUFDYyxJQUFHLEFBQ2Q7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBRyxBQUFXLEtBQUksQUFDZDtxQkFBQSxBQUFLLDJDQUFMLEFBQ0s7Z0NBQ2UsZ0NBQW1CLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBOUIsQUFBa0MsWUFEM0MsQUFDUyxBQUE4QyxBQUMxRDs0QkFIUixBQUNXLEFBRUssQUFHbkI7QUFMYyxBQUNIO0FBS2Y7Ozs7O0FBOUYrQixBOztrQkFBZixBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHRpZXRqZW4vRG9jdW1lbnRzL3JlcG9zL2dpdGh1Yi9waGlsL25leHQvUG9ydGZvbGlvL2FwcGxpY2F0aW9uIn0=