"use strict";var e=require("react"),a=require("styled-components"),r=require("../../atoms/OakFlex/OakFlex.js"),t=require("../../../styles/helpers/parseSpacing.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var o=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js"),require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js"),require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js");var s=require("../../atoms/OakLabel/OakLabel.js");require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var i=require("../../../styles/helpers/parseColor.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e),n=l(a);const u=n.default(s.OakLabel)`
  cursor: pointer;
  display: flex;
  gap: ${t.parseSpacing("space-between-s")};
`,k=n.default.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`,c=n.default(o.OakBox)`
  box-shadow: ${`inset 0 0 0 0.15rem ${i.parseColor("lemon")}`};
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  top: -6px;
  left: -6px;
`,O=a.css``,p=n.default((a=>{const{tileItem:t,isChecked:s,id:i,onChange:l}=a,[n,O]=e.useState(!1);return d.default.createElement(o.OakBox,{$borderColor:"border-neutral",$ba:"border-solid-m",$borderRadius:"border-radius-s",$pa:"inner-padding-s",$position:"relative",$background:n||s?"black":"transparent",$color:n||s?"white":"black"},n&&d.default.createElement(c,{$background:"transparent",$position:"absolute",$ba:"border-solid-l",$borderColor:"grey60",$borderRadius:"border-radius-s","data-testid":"radio-tile-focus"}),d.default.createElement(u,{htmlFor:i},d.default.createElement(k,{value:t.id,id:i,checked:s,onChange:()=>l(t),tabIndex:0,onFocus:()=>O(!0),onBlur:()=>O(!1),onClick:e=>{(e.clientX||e.clientY)&&O(!1)}}),d.default.createElement(r.OakFlex,{$height:"all-spacing-6",$width:"all-spacing-6",$borderColor:"border-neutral",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:"bg-primary",$ba:"border-solid-m",$borderRadius:"border-radius-circle"},s&&d.default.createElement(o.OakBox,{$height:"all-spacing-4",$width:"all-spacing-4",$background:"black",$position:"absolute",$borderRadius:"border-radius-circle","data-testid":"radio-tile-checked"})),t.label))}))`
  ${O}
`;exports.OakRadioTile=p,exports.isTileItem=e=>"object"==typeof e&&null!==e&&"string"==typeof e.id&&"string"==typeof e.label;
//# sourceMappingURL=OakRadioTile.js.map
