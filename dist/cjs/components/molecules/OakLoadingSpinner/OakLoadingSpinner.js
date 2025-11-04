"use strict";var e=require("react"),r=require("styled-components"),t=require("../../atoms/OakScreenReader/OakScreenReader.js"),a=require("../../../styles/helpers/parseSpacing.js"),i=require("../../../styles/utils/responsiveStyle.js"),o=require("../../../styles/utils/colorStyle.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(e),l=n(r);const d=r.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,c=r.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,u=l.default.span`
  ${e=>e.$width?i.responsiveStyle("--width",(e=>e.$width),a.parseSpacing):r.css`
          --width: 1.25rem;
        `}
  ${({$delay:e})=>{if(e)return r.css`
        opacity: 0;
        animation: ${c} 0s;
        animation-delay: ${e/1e3}s;
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
    ${e=>e.loaderColor?r.css`
            border-color: ${e.loaderColor} ${e.loaderColor}
              ${e.loaderColor} transparent;
          `:r.css`
            border-color: currentcolor currentcolor currentcolor transparent;
          `}
    animation: ${d} 1.2s linear infinite;
  }
  ${o.colorStyle}
`;exports.OakLoadingSpinner=e=>s.default.createElement(u,{...e},s.default.createElement(t.OakScreenReader,null,"Loading"));
//# sourceMappingURL=OakLoadingSpinner.js.map
