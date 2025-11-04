import a,{useState as e}from"react";import o,{css as r}from"styled-components";import{OakFlex as t}from"../../atoms/OakFlex/OakFlex.js";import{parseSpacing as s}from"../../../styles/helpers/parseSpacing.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as i}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import{OakLabel as l}from"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseColor as m}from"../../../styles/helpers/parseColor.js";const p=a=>"object"==typeof a&&null!==a&&"string"==typeof a.id&&"string"==typeof a.label,d=o(l)`
  cursor: pointer;
  display: flex;
  gap: ${s("space-between-s")};
`,n=o.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`,k=o(i)`
  box-shadow: ${`inset 0 0 0 0.15rem ${m("lemon")}`};
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  top: -6px;
  left: -6px;
`,c=r``,O=o((o=>{const{tileItem:r,isChecked:s,id:l,onChange:m}=o,[p,c]=e(!1);return a.createElement(i,{$borderColor:"border-neutral",$ba:"border-solid-m",$borderRadius:"border-radius-s",$pa:"inner-padding-s",$position:"relative",$background:p||s?"black":"transparent",$color:p||s?"white":"black"},p&&a.createElement(k,{$background:"transparent",$position:"absolute",$ba:"border-solid-l",$borderColor:"grey60",$borderRadius:"border-radius-s","data-testid":"radio-tile-focus"}),a.createElement(d,{htmlFor:l},a.createElement(n,{value:r.id,id:l,checked:s,onChange:()=>m(r),tabIndex:0,onFocus:()=>c(!0),onBlur:()=>c(!1),onClick:a=>{(a.clientX||a.clientY)&&c(!1)}}),a.createElement(t,{$height:"all-spacing-6",$width:"all-spacing-6",$borderColor:"border-neutral",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:"bg-primary",$ba:"border-solid-m",$borderRadius:"border-radius-circle"},s&&a.createElement(i,{$height:"all-spacing-4",$width:"all-spacing-4",$background:"black",$position:"absolute",$borderRadius:"border-radius-circle","data-testid":"radio-tile-checked"})),r.label))}))`
  ${c}
`;export{O as OakRadioTile,p as isTileItem};
//# sourceMappingURL=OakRadioTile.js.map
