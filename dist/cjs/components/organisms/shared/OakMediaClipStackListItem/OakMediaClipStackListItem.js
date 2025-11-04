"use strict";var e=require("react"),a=require("styled-components"),r=require("../../../atoms/OakBox/OakBox.js");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var s=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js");var t=require("../../../atoms/OakHeading/OakHeading.js"),o=require("../../../atoms/OakIcon/OakIcon.js"),i=require("../../../atoms/OakImage/OakImage.js");require("../../../atoms/OakSpan/OakSpan.js"),require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js");var l=require("../../../atoms/OakTypography/OakTypography.js");require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var n=require("../../../../styles/helpers/parseBorderRadius.js"),p=require("../../../../styles/helpers/parseColor.js"),d=require("../../../../styles/helpers/parseDropShadow.js"),u=require("../../../../styles/helpers/parseTransitions.js"),c=require("../../../../styles/utils/responsiveStyle.js"),g=require("../../../../styles/helpers/parseSpacing.js");function k(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=k(e),O=k(a);const h=O.default(s.OakFlex)`
  transition: ${u.parseTransitions("standard-ease")};

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${d.parseDropShadow("drop-shadow-centered-lemon")},
      ${d.parseDropShadow("drop-shadow-centered-grey")};
  }

  &:hover,
  &:focus-visible {
    img {
      -webkit-filter: brightness(80%);
      transition: ${u.parseTransitions("standard-ease")};
    }
  }
`,b=O.default(r.OakBox)`
  box-shadow: ${p.parseColor("grey50")} 8px -6px;

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
    box-shadow: ${p.parseColor("grey40")} 7px -4px;
    border-radius: ${n.parseBorderRadius("border-radius-s")};
  }

  @media ${c.getMediaQuery("mobile")} {
    box-shadow: ${p.parseColor("grey50")} 4px -3px;

    &::after {
      top: -3px;
      left: 4px;
      box-shadow: ${p.parseColor("grey40")} 4px -3px;
    }
  }

  #play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -16px;
    margin-top: -16px;
  }
`,x=O.default(i.OakImage)`
  background-color: ${p.parseColor("bg-decorative2-very-subdued")};
  background-size: ${g.parseSpacing("all-spacing-11")};
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  img {
    object-fit: fill;
    border-radius: ${n.parseBorderRadius("border-radius-s")};
  }
`;exports.OakMediaClipStackListItem=e=>{const{title:a,numberOfClips:s,imageUrl:n,imageAltText:p,href:d,isAudioClip:u,...c}=e;return m.default.createElement(h,{as:"a",href:d,$display:"flex",$flexDirection:["row","row","column"],$gap:["all-spacing-2","all-spacing-2","space-between-none"],$width:"fit-content",$alignItems:["center","center","flex-start"],...c},m.default.createElement(r.OakBox,null,m.default.createElement(b,{$borderRadius:"border-radius-s",$width:["all-spacing-15","all-spacing-15","all-spacing-18"],$height:["all-spacing-11","all-spacing-11","all-spacing-15"],$position:"relative",$mb:["space-between-none","space-between-none","space-between-xs"]},u?m.default.createElement(o.OakIcon,{$width:["all-spacing-15","all-spacing-15","all-spacing-18"],$height:["all-spacing-11","all-spacing-11","all-spacing-15"],iconName:"audio-clip-large",alt:p,$position:"absolute",$borderRadius:"border-radius-s",$overflow:"hidden",$objectFit:"cover"}):m.default.createElement(x,{src:n||i.oakPlaceholder,alt:p,$borderRadius:"border-radius-s",$overflow:"hidden"}),m.default.createElement(o.OakIcon,{id:"play-icon",iconName:"play",$width:"all-spacing-7",$height:"all-spacing-7"}))),m.default.createElement(r.OakBox,{$mb:["space-between-none","space-between-none","space-between-s"]},m.default.createElement(t.OakHeading,{tag:"h3",$font:"heading-7",$color:"text-primary"},a),m.default.createElement(l.OakTypography,{$font:"body-3",$color:"text-subdued"},s," ",1===s?"clip":"clips")))};
//# sourceMappingURL=OakMediaClipStackListItem.js.map
