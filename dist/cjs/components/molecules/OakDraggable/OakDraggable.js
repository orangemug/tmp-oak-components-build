"use strict";var e=require("react"),r=require("styled-components");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var a=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var s=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var t=require("../../../styles/helpers/parseColor.js"),d=require("../../../styles/helpers/parseBorder.js"),i=require("../../../styles/helpers/parseDropShadow.js"),l=require("../../../styles/helpers/parseSpacing.js"),n=require("../../../styles/helpers/parseBorderWidth.js"),p=require("../../../styles/helpers/parseColorFilter.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=u(e),g=u(r);const k=g.default(s.OakIcon)``,m=g.default(a.OakBox)`
  cursor: grab;
  outline: none;
  user-select: none;

  ${k} {
    filter: ${e=>p.parseColorFilter(e.$iconColor)};
  }

  @media (hover: hover) {
    &:hover:not([data-dragging="true"]):not([data-disabled="true"]):not(
        [data-readonly="true"]
      ) {
      background-color: ${t.parseColor("bg-decorative1-subdued")};
      color: ${t.parseColor("text-primary")};
      box-shadow: ${i.parseDropShadow("drop-shadow-standard")};
      border-bottom: ${d.parseBorder("border-solid-xl")}
        ${t.parseColor("border-primary")};
      padding-bottom: ${l.parseSpacing("inner-padding-m")};
      text-decoration: underline;

      ${k} {
        filter: ${p.parseColorFilter("icon-inverted")};
      }
    }
  }

  &:focus-visible:not([data-dragging="true"]):not([data-disabled="true"]) {
    box-shadow: ${i.parseDropShadow("drop-shadow-centered-lemon")},
      ${i.parseDropShadow("drop-shadow-centered-grey")};
  }

  &[data-dragging="true"] {
    cursor: move;
    background-color: ${t.parseColor("bg-decorative1-main")};
    color: ${t.parseColor("text-primary")};
    outline: ${d.parseBorder("border-solid-xl")} ${t.parseColor("border-primary")};
    outline-offset: -${n.parseBorderWidth("border-solid-xl")};
    box-shadow: ${i.parseDropShadow("drop-shadow-lemon")},
      ${i.parseDropShadow("drop-shadow-grey")};
    text-decoration: underline;

    ${k} {
      filter: ${p.parseColorFilter("icon-inverted")};
    }
  }

  &[data-disabled="true"] {
    cursor: default;
    background-color: ${t.parseColor("bg-neutral")};
    color: ${t.parseColor("text-disabled")};

    ${k} {
      filter: ${p.parseColorFilter("icon-disabled")};
    }
  }

  &[data-readonly="true"] {
    cursor: default;
  }
`,O=g.default(o.OakFlex)`
  margin-block: -${l.parseSpacing("space-between-ssx")};
`,b=e.forwardRef((({children:e,iconName:r="move-arrows",iconColor:a="icon-inverted",iconAlt:s="",color:t="text-primary",background:d="bg-primary",isDragging:i,isDisabled:l,isReadOnly:n,...p},u)=>c.default.createElement(m,{ref:u,$pv:"inner-padding-l",$pl:"inner-padding-s",$pr:"inner-padding-m",$background:d,$color:t,$borderRadius:"border-radius-m2",$minHeight:"all-spacing-10","data-dragging":i,"data-disabled":l,"data-readonly":n,$iconColor:a,...p},c.default.createElement(O,{$gap:"space-between-s",$alignItems:"center"},c.default.createElement(k,{iconName:r,$width:"all-spacing-7",$height:"all-spacing-7",alt:s}),c.default.createElement(o.OakFlex,{$font:"body-1-bold"},e)))));exports.OakDraggable=b;
//# sourceMappingURL=OakDraggable.js.map
