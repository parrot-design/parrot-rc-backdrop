import React from 'react';
import Fade from '@parrotjs/react-transition-fade';
import classnames from '@parrotjs/classnames';

const Backdrop = React.forwardRef((props, ref) => {
    const { center = true, children, visible, prefixCls: customizedPrefixCls = 'parrot', componentName = 'backdrop', transparent = false, onClick = () => { } } = props;
    const prefixCls = customizedPrefixCls + '-' + componentName;
    return (React.createElement(Fade, { visible: visible, ref: ref },
        React.createElement("div", { className: classnames(prefixCls, {
                [`${prefixCls}-center`]: center,
                [`${prefixCls}-grey`]: !transparent
            }), onClick: onClick }, children)));
});

export default Backdrop;
