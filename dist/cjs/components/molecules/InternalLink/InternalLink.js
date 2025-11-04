"use strict";var e=require("react"),r=require("styled-components"),a=require("../OakLoadingSpinner/OakLoadingSpinner.js"),o=require("../../../styles/helpers/parseColor.js"),s=require("../../../styles/helpers/parseDropShadow.js"),i=require("../../../styles/helpers/parseBorderRadius.js"),t=require("../../../styles/helpers/parseSpacing.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../atoms/OakBox/OakBox.js"),require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var l=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var n=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js");var d=require("../../atoms/OakSpan/OakSpan.js");require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var c=require("../../../styles/helpers/parseColorFilter.js");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=p(e),k=p(r);const O=k.default(n.OakIcon)`
  width: ${t.parseSpacing("all-spacing-6")};
  height: ${t.parseSpacing("all-spacing-6")};
`,m=k.default.a`
  display: inline-flex;
  align-items: center;
  gap: ${t.parseSpacing("space-between-sssx")};
  outline: none;
  border-radius: ${i.parseBorderRadius("border-radius-m")};
  padding: ${t.parseSpacing("inner-padding-ssx")};
  margin: -${t.parseSpacing("inner-padding-ssx")};
  appearance: none;
  font: inherit;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  color: ${e=>o.parseColor(e.$color)};

  ${O} {
    filter: ${e=>c.parseColorFilter(e.$color)};
  }

  &:focus-visible {
    box-shadow: ${s.parseDropShadow("drop-shadow-centered-lemon")},
      ${s.parseDropShadow("drop-shadow-centered-grey")};
  }

  &:visited {
    color: ${e=>o.parseColor(e.$visitedColor)};

    ${O} {
      filter: ${e=>c.parseColorFilter(e.$visitedColor)};
    }
  }

  @media (hover: hover) {
    &:hover,
    &:visited:hover {
      color: ${e=>o.parseColor(e.$hoverColor)};
      ${O} {
        filter: ${e=>c.parseColorFilter(e.$hoverColor)};
      }
    }
  }

  &:active {
    color: ${e=>o.parseColor(e.$activeColor)};

    ${O} {
      filter: ${e=>c.parseColorFilter(e.$activeColor)};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${e=>o.parseColor(e.$disabledColor)};

    ${O} {
      filter: ${e=>c.parseColorFilter(e.$disabledColor)};
    }
  }
`,$=e.forwardRef(((e,r)=>{const{element:o="a",iconName:s,isTrailingIcon:i,children:t,isLoading:n,color:c,disabledColor:p,visitedColor:k,hoverColor:$,activeColor:g,...h}=e,j=(()=>{switch(!0){case n:return u.default.createElement(l.OakFlex,{$width:"all-spacing-6",$height:"all-spacing-6",$alignItems:"center",$justifyContent:"center"},u.default.createElement(a.OakLoadingSpinner,{$width:"all-spacing-4",$color:"icon-inverted"}));case!!s:return u.default.createElement(O,{iconName:s});default:return null}})(),q=(()=>{switch(!0){case"disabled"in h:return h.disabled;case n:return!0;default:return}})();return u.default.createElement(m,{as:o,ref:r,disabled:q,$color:c,$disabledColor:p,$visitedColor:k,$hoverColor:$,$activeColor:g,...h},!i&&j,u.default.createElement(d.OakSpan,null,t),i&&j)}));exports.InternalLink=$;
//# sourceMappingURL=InternalLink.js.map
