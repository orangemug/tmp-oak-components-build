import e from"react";import a from"styled-components";import{OakBox as o}from"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import{OakHeading as r}from"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../../atoms/OakIcon/OakIcon.js";import{OakImage as i,oakPlaceholder as p}from"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import{OakTypography as l}from"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{parseBorderRadius as n}from"../../../../styles/helpers/parseBorderRadius.js";import{parseColor as m}from"../../../../styles/helpers/parseColor.js";import{parseDropShadow as d}from"../../../../styles/helpers/parseDropShadow.js";import{parseTransitions as c}from"../../../../styles/helpers/parseTransitions.js";import{getMediaQuery as g}from"../../../../styles/utils/responsiveStyle.js";import{parseSpacing as k}from"../../../../styles/helpers/parseSpacing.js";const b=a(t)`
  transition: ${c("standard-ease")};

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${d("drop-shadow-centered-lemon")},
      ${d("drop-shadow-centered-grey")};
  }

  &:hover,
  &:focus-visible {
    img {
      -webkit-filter: brightness(80%);
      transition: ${c("standard-ease")};
    }
  }
`,O=a(o)`
  box-shadow: ${m("grey50")} 8px -6px;

  margin-top: 10px;
  margin-right: 15px;

  img {
    -webkit-filter: brightness(100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: 8px;
    width: 100%;
    height: 100%;
    box-shadow: ${m("grey40")} 7px -4px;
    border-radius: ${n("border-radius-s")};
  }

  @media ${g("mobile")} {
    box-shadow: ${m("grey50")} 4px -3px;

    &::after {
      top: -3px;
      left: 4px;
      box-shadow: ${m("grey40")} 4px -3px;
    }
  }

  #play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -16px;
    margin-top: -16px;
  }
`,h=a(i)`
  background-color: ${m("bg-decorative2-very-subdued")};
  background-size: ${k("all-spacing-11")};
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  img {
    object-fit: fill;
    border-radius: ${n("border-radius-s")};
  }
`,$=a=>{const{title:t,numberOfClips:i,imageUrl:n,imageAltText:m,href:d,isAudioClip:c,...g}=a;return e.createElement(b,{as:"a",href:d,$display:"flex",$flexDirection:["row","row","column"],$gap:["all-spacing-2","all-spacing-2","space-between-none"],$width:"fit-content",$alignItems:["center","center","flex-start"],...g},e.createElement(o,null,e.createElement(O,{$borderRadius:"border-radius-s",$width:["all-spacing-15","all-spacing-15","all-spacing-18"],$height:["all-spacing-11","all-spacing-11","all-spacing-15"],$position:"relative",$mb:["space-between-none","space-between-none","space-between-xs"]},c?e.createElement(s,{$width:["all-spacing-15","all-spacing-15","all-spacing-18"],$height:["all-spacing-11","all-spacing-11","all-spacing-15"],iconName:"audio-clip-large",alt:m,$position:"absolute",$borderRadius:"border-radius-s",$overflow:"hidden",$objectFit:"cover"}):e.createElement(h,{src:n||p,alt:m,$borderRadius:"border-radius-s",$overflow:"hidden"}),e.createElement(s,{id:"play-icon",iconName:"play",$width:"all-spacing-7",$height:"all-spacing-7"}))),e.createElement(o,{$mb:["space-between-none","space-between-none","space-between-s"]},e.createElement(r,{tag:"h3",$font:"heading-7",$color:"text-primary"},t),e.createElement(l,{$font:"body-3",$color:"text-subdued"},i," ",1===i?"clip":"clips")))};export{$ as OakMediaClipStackListItem};
//# sourceMappingURL=OakMediaClipStackListItem.js.map
