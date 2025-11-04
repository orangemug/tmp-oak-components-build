"use strict";var e=require("react"),t=require("styled-components"),a=require("../OakFlex/OakFlex.js"),r=require("../../../styles/helpers/parseColor.js"),l=require("../../../styles/utils/responsiveStyle.js"),s=require("../../../styles/helpers/parseSpacing.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e),n=o(t);const p=n.default(a.OakFlex)`
  width: max-content;
  pointer-events: none;
`,c=s.parseSpacing("all-spacing-4"),u=n.default.svg`
  position: absolute;
  ${({$tooltipPosition:e})=>{switch(e){case"bottom-right":return t.css`
          top: -${c};
          right: ${s.parseSpacing("all-spacing-0")};
          transform: scale(-1, -1);
        `;case"top-right":return t.css`
          bottom: -${c};
          right: ${s.parseSpacing("all-spacing-0")};
          transform: scaleX(-1);
        `;case"top-left":return t.css`
          bottom: -${c};
          left: ${s.parseSpacing("all-spacing-0")};
        `;default:return t.css`
          top: -${c};
          left: ${s.parseSpacing("all-spacing-0")};
          transform: scaleY(-1);
        `}}}
  ${l.responsiveStyle("fill",(e=>e.$fill),r.parseColor)}
`;exports.InternalTooltip=({children:e,$background:t="black",$color:a="text-inverted",tooltipPosition:r="bottom-left",...l})=>i.default.createElement(p,{role:"tooltip","data-rac":!0,$position:"relative",$background:t,$color:a,$maxWidth:["all-spacing-20","all-spacing-22"],...l},e,i.default.createElement(u,{width:c,height:c,$fill:t,$tooltipPosition:r,"data-testid":"tooltip-arrow"},i.default.createElement("path",{d:"M0 0H16L8 8L0 16V0Z"})));
//# sourceMappingURL=InternalTooltip.js.map
