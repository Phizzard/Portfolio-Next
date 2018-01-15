'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactstrap = require('reactstrap');

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ptietjen/Documents/repos/github/phil/next/Portfolio/application/components/Template.js';

exports.default = function (props) {
    return _react2.default.createElement('div', {
        className: 'jsx-1461027497',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-1461027497',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'Philip Tietjen'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1461027497',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossOrigin: 'anonymous', className: 'jsx-1461027497',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Exo+2', rel: 'stylesheet', className: 'jsx-1461027497',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement(_reactstrap.Container, { fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), props.children, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '1461027497',
        css: 'body{font-family:"Open-Sans",sans-serif;color:#3f3f3f;}.container-fluid{padding:0;}.row{padding:0!important;margin:0!important;}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{margin:0!important;padding:0;}h1,h2,h3,h4{font-family:"exo 2",sans-serif;text-transform:uppercase;}.page-block{padding:50px;}.card-columns{-webkit-column-count:6;column-count:6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0IyQixBQUdxRCxBQUt6QyxBQUVxQixBQUlDLEFBSWEsQUFJbkIsQUFHRSxVQWpCakIsR0FlRixNQVJjLENBSk8sU0FLckIsRUFHNkIsSUFmVCxHQXNCbEIsQ0FkRixVQVBFLE9BZUYiLCJmaWxlIjoiY29tcG9uZW50cy9UZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHRpZXRqZW4vRG9jdW1lbnRzL3JlcG9zL2dpdGh1Yi9waGlsL25leHQvUG9ydGZvbGlvL2FwcGxpY2F0aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PihcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5QaGlsaXAgVGlldGplbjwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUHNIOFI3MkpRM1NPZGhWaTN1eGZ0bWFXNlZjNTFNS2IwcTVQMnJSVXBQdnJzenVFNFcxcG92SFlnVHBCZnNoYlwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RXhvKzJcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4tU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2YzZjNmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRvIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJleG8gMlwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1ibG9jayB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xuICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/Template.js */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiSGVhZCIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkZvb3RlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWSxBQUVuQjs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsMkRBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztzQkFBQTt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixnRkFBK0UsV0FBM0csQUFBcUgsMkVBQTBFLGFBQS9MLEFBQTJNLHdCQUEzTTs7c0JBQUE7d0JBSEosQUFHSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLGlEQUFnRCxLQUEzRCxBQUErRCx5QkFBL0Q7O3NCQUFBO3dCQUxSLEFBQ0ksQUFJSSxBQUVKO0FBRkk7eUJBRUosQUFBQyx1Q0FBVSxPQUFYO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0M7QUFERDtBQUFBLGNBREosQUFFVyxBQUNQLDBCQUFBLEFBQUM7O3NCQUFEO3dCQVZSLEFBT0ksQUFHSTtBQUFBO0FBQUE7aUJBVlI7YUFEVyxBQUNYO0FBQUE7QUFESiIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHRpZXRqZW4vRG9jdW1lbnRzL3JlcG9zL2dpdGh1Yi9waGlsL25leHQvUG9ydGZvbGlvL2FwcGxpY2F0aW9uIn0=