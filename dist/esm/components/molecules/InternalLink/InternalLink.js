import o,{forwardRef as e}from"react";import r from"styled-components";import{OakLoadingSpinner as a}from"../OakLoadingSpinner/OakLoadingSpinner.js";import{parseColor as t}from"../../../styles/helpers/parseColor.js";import{parseDropShadow as s}from"../../../styles/helpers/parseDropShadow.js";import{parseBorderRadius as i}from"../../../styles/helpers/parseBorderRadius.js";import{parseSpacing as l}from"../../../styles/helpers/parseSpacing.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as n}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as m}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import{OakSpan as d}from"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseColorFilter as p}from"../../../styles/helpers/parseColorFilter.js";const c=r(m)`
  width: ${l("all-spacing-6")};
  height: ${l("all-spacing-6")};
`,O=r.a`
  display: inline-flex;
  align-items: center;
  gap: ${l("space-between-sssx")};
  outline: none;
  border-radius: ${i("border-radius-m")};
  padding: ${l("inner-padding-ssx")};
  margin: -${l("inner-padding-ssx")};
  appearance: none;
  font: inherit;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  color: ${o=>t(o.$color)};

  ${c} {
    filter: ${o=>p(o.$color)};
  }

  &:focus-visible {
    box-shadow: ${s("drop-shadow-centered-lemon")},
      ${s("drop-shadow-centered-grey")};
  }

  &:visited {
    color: ${o=>t(o.$visitedColor)};

    ${c} {
      filter: ${o=>p(o.$visitedColor)};
    }
  }

  @media (hover: hover) {
    &:hover,
    &:visited:hover {
      color: ${o=>t(o.$hoverColor)};
      ${c} {
        filter: ${o=>p(o.$hoverColor)};
      }
    }
  }

  &:active {
    color: ${o=>t(o.$activeColor)};

    ${c} {
      filter: ${o=>p(o.$activeColor)};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${o=>t(o.$disabledColor)};

    ${c} {
      filter: ${o=>p(o.$disabledColor)};
    }
  }
`,k=e(((e,r)=>{const{element:t="a",iconName:s,isTrailingIcon:i,children:l,isLoading:m,color:p,disabledColor:k,visitedColor:$,hoverColor:h,activeColor:g,...j}=e,f=(()=>{switch(!0){case m:return o.createElement(n,{$width:"all-spacing-6",$height:"all-spacing-6",$alignItems:"center",$justifyContent:"center"},o.createElement(a,{$width:"all-spacing-4",$color:"icon-inverted"}));case!!s:return o.createElement(c,{iconName:s});default:return null}})(),u=(()=>{switch(!0){case"disabled"in j:return j.disabled;case m:return!0;default:return}})();return o.createElement(O,{as:t,ref:r,disabled:u,$color:p,$disabledColor:k,$visitedColor:$,$hoverColor:h,$activeColor:g,...j},!i&&f,o.createElement(d,null,l),i&&f)}));export{k as InternalLink};
//# sourceMappingURL=InternalLink.js.map
