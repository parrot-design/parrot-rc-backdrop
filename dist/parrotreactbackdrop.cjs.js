'use strict';

var React = require('react');
var Fade = require('@parrotjs/react-transition-fade');
var classnames = require('@parrotjs/classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Fade__default = /*#__PURE__*/_interopDefaultLegacy(Fade);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

const Backdrop = React__default['default'].forwardRef((props, ref) => {
    const { center = true, children, visible, prefixCls: customizedPrefixCls = 'parrot', componentName = 'backdrop', transparent = false, onClick = () => { } } = props;
    const prefixCls = customizedPrefixCls + '-' + componentName;
    return (React__default['default'].createElement(Fade__default['default'], { visible: visible, ref: ref },
        React__default['default'].createElement("div", { className: classnames__default['default'](prefixCls, {
                [`${prefixCls}-center`]: center,
                [`${prefixCls}-grey`]: !transparent
            }), onClick: onClick }, children)));
});

module.exports = Backdrop;
