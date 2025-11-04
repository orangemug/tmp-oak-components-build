import r from"react";import e,{keyframes as t,css as o}from"styled-components";import{OakScreenReader as i}from"../../atoms/OakScreenReader/OakScreenReader.js";import{parseSpacing as a}from"../../../styles/helpers/parseSpacing.js";import{responsiveStyle as n}from"../../../styles/utils/responsiveStyle.js";import{colorStyle as l}from"../../../styles/utils/colorStyle.js";const s=t`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,d=t`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,c=e.span`
  ${r=>r.$width?n("--width",(r=>r.$width),a):o`
          --width: 1.25rem;
        `}
  ${({$delay:r})=>{if(r)return o`
        opacity: 0;
        animation: ${d} 0s;
        animation-delay: ${r/1e3}s;
        animation-fill-mode: forwards;
      `}}
  --inner-width: calc(var(--width) / 10 * 8);
  --thickness: calc(var(--width) / 12);

  display: inline-flex;
  width: var(--width);
  height: var(--width);

  ::after {
    content: " ";
    display: block;
    width: var(--inner-width);
    height: var(--inner-width);
    margin: var(--thickness);
    border-radius: 50%;
    border: var(--thickness) solid currentcolor;
    ${r=>r.loaderColor?o`
            border-color: ${r.loaderColor} ${r.loaderColor}
              ${r.loaderColor} transparent;
          `:o`
            border-color: currentcolor currentcolor currentcolor transparent;
          `}
    animation: ${s} 1.2s linear infinite;
  }
  ${l}
`,m=e=>r.createElement(c,{...e},r.createElement(i,null,"Loading"));export{m as OakLoadingSpinner};
//# sourceMappingURL=OakLoadingSpinner.js.map
