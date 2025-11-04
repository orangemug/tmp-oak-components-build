import t from"react";import o,{css as e}from"styled-components";import{OakFlex as l}from"../OakFlex/OakFlex.js";import{parseColor as r}from"../../../styles/helpers/parseColor.js";import{responsiveStyle as i}from"../../../styles/utils/responsiveStyle.js";import{parseSpacing as a}from"../../../styles/helpers/parseSpacing.js";const s=o(l)`
  width: max-content;
  pointer-events: none;
`,n=a("all-spacing-4"),p=o.svg`
  position: absolute;
  ${({$tooltipPosition:t})=>{switch(t){case"bottom-right":return e`
          top: -${n};
          right: ${a("all-spacing-0")};
          transform: scale(-1, -1);
        `;case"top-right":return e`
          bottom: -${n};
          right: ${a("all-spacing-0")};
          transform: scaleX(-1);
        `;case"top-left":return e`
          bottom: -${n};
          left: ${a("all-spacing-0")};
        `;default:return e`
          top: -${n};
          left: ${a("all-spacing-0")};
          transform: scaleY(-1);
        `}}}
  ${i("fill",(t=>t.$fill),r)}
`,c=({children:o,$background:e="black",$color:l="text-inverted",tooltipPosition:r="bottom-left",...i})=>t.createElement(s,{role:"tooltip","data-rac":!0,$position:"relative",$background:e,$color:l,$maxWidth:["all-spacing-20","all-spacing-22"],...i},o,t.createElement(p,{width:n,height:n,$fill:e,$tooltipPosition:r,"data-testid":"tooltip-arrow"},t.createElement("path",{d:"M0 0H16L8 8L0 16V0Z"})));export{c as InternalTooltip};
//# sourceMappingURL=InternalTooltip.js.map
