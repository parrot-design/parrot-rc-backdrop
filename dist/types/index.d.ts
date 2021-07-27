import { ReactElement } from "react";
export { default } from './Backdrop';
export interface IBackdropProps {
    component?: any;
    children?: ReactElement | any;
    center?: boolean;
    visible: boolean;
    prefixCls?: string;
    componentName?: string;
    transparent?: boolean;
    onClick?: any;
}
