import a,{forwardRef as o}from"react";import r from"styled-components";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as e}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseColor as i}from"../../../styles/helpers/parseColor.js";import{parseBorder as d}from"../../../styles/helpers/parseBorder.js";import{parseDropShadow as m}from"../../../styles/helpers/parseDropShadow.js";import{parseSpacing as n}from"../../../styles/helpers/parseSpacing.js";import{parseBorderWidth as l}from"../../../styles/helpers/parseBorderWidth.js";import{parseColorFilter as p}from"../../../styles/helpers/parseColorFilter.js";const c=r(s)``,g=r(e)`
  cursor: grab;
  outline: none;
  user-select: none;

  ${c} {
    filter: ${a=>p(a.$iconColor)};
  }

  @media (hover: hover) {
    &:hover:not([data-dragging="true"]):not([data-disabled="true"]):not(
        [data-readonly="true"]
      ) {
      background-color: ${i("bg-decorative1-subdued")};
      color: ${i("text-primary")};
      box-shadow: ${m("drop-shadow-standard")};
      border-bottom: ${d("border-solid-xl")}
        ${i("border-primary")};
      padding-bottom: ${n("inner-padding-m")};
      text-decoration: underline;

      ${c} {
        filter: ${p("icon-inverted")};
      }
    }
  }

  &:focus-visible:not([data-dragging="true"]):not([data-disabled="true"]) {
    box-shadow: ${m("drop-shadow-centered-lemon")},
      ${m("drop-shadow-centered-grey")};
  }

  &[data-dragging="true"] {
    cursor: move;
    background-color: ${i("bg-decorative1-main")};
    color: ${i("text-primary")};
    outline: ${d("border-solid-xl")} ${i("border-primary")};
    outline-offset: -${l("border-solid-xl")};
    box-shadow: ${m("drop-shadow-lemon")},
      ${m("drop-shadow-grey")};
    text-decoration: underline;

    ${c} {
      filter: ${p("icon-inverted")};
    }
  }

  &[data-disabled="true"] {
    cursor: default;
    background-color: ${i("bg-neutral")};
    color: ${i("text-disabled")};

    ${c} {
      filter: ${p("icon-disabled")};
    }
  }

  &[data-readonly="true"] {
    cursor: default;
  }
`,k=r(t)`
  margin-block: -${n("space-between-ssx")};
`,O=o((({children:o,iconName:r="move-arrows",iconColor:e="icon-inverted",iconAlt:s="",color:i="text-primary",background:d="bg-primary",isDragging:m,isDisabled:n,isReadOnly:l,...p},O)=>a.createElement(g,{ref:O,$pv:"inner-padding-l",$pl:"inner-padding-s",$pr:"inner-padding-m",$background:d,$color:i,$borderRadius:"border-radius-m2",$minHeight:"all-spacing-10","data-dragging":m,"data-disabled":n,"data-readonly":l,$iconColor:e,...p},a.createElement(k,{$gap:"space-between-s",$alignItems:"center"},a.createElement(c,{iconName:r,$width:"all-spacing-7",$height:"all-spacing-7",alt:s}),a.createElement(t,{$font:"body-1-bold"},o)))));export{O as OakDraggable};
//# sourceMappingURL=OakDraggable.js.map
