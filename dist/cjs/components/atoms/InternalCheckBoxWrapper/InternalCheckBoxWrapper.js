"use strict";var e=require("react"),t=require("styled-components"),n=require("../OakBox/OakBox.js"),a=require("../OakIcon/OakIcon.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e);const c=i(t).default(n.OakBox)`
  pointer-events: none;
  opacity: 0;

  input:checked + & {
    opacity: 1;
  }
`;exports.InternalCheckBoxWrapper=e=>{const{size:t="all-spacing-6",iconPadding:i="inner-padding-none",internalCheckbox:r,checkedIcon:l=o.default.createElement(a.OakIcon,{iconName:"tick",$width:"100%",$height:"100%",$colorFilter:"white"})}=e;return o.default.createElement(n.OakBox,{$position:"relative",$width:t,$height:t},r,o.default.createElement(c,{$position:"absolute",$top:"all-spacing-0",$left:"all-spacing-0",$pa:i,$width:t,$height:t},l))};
//# sourceMappingURL=InternalCheckBoxWrapper.js.map
