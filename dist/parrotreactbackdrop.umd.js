!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("@parrotjs/react-transition-fade"),require("@parrotjs/classnames")):"function"==typeof define&&define.amd?define(["react","@parrotjs/react-transition-fade","@parrotjs/classnames"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ParrotRcBackdrop=t(e.React,e.ParrotRcTransitionFade,e.ParrotClassname)}(this,(function(e,t,r){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),o=a(t),i=a(r);return n.default.forwardRef(((e,t)=>{const{center:r=!0,children:a,visible:s,prefixCls:c="parrot",componentName:f="backdrop",transparent:l=!1,onClick:d=(()=>{})}=e,u=c+"-"+f;return n.default.createElement(o.default,{visible:s,ref:t},n.default.createElement("div",{className:i.default(u,{[`${u}-center`]:r,[`${u}-grey`]:!l}),onClick:d},a))}))}));