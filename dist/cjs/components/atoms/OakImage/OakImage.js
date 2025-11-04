"use strict";var e=require("react"),t=require("next/image"),M=require("styled-components"),o=require("./useShowPlaceholder.js"),i=require("../../../styles/utils/colorFilterStyle.js"),r=require("../OakBox/OakBox.js"),u=require("../../../styles/helpers/parseColor.js"),a=require("../../../styles/helpers/parseSpacing.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g=l(e),I=l(t),L=l(M);const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=",c=M.css`
  ${e=>e.onClick&&M.css`
      :hover {
        cursor: pointer;
      }
    `}
`,j=M.css`
  ${e=>e.$showOakPlaceholder&&M.css`
      background-image: url(${s});
      background-color: ${u.parseColor("bg-decorative2-very-subdued")};
      background-size: ${a.parseSpacing("all-spacing-11")};
      background-position: center;
      background-repeat: no-repeat;
    `}
`,A=L.default(I.default)`
  ${i.colorFilterStyle}
  ${c}
  ${j}
  ${e=>M.css`
    object-fit: ${e.$objectFit?e.$objectFit:"contain"};
  `}
`,S=L.default(I.default)`
  ${i.colorFilterStyle}
  ${c}
  ${j}
  width: 100%;
  height: auto;
`;exports.OakImage=({...e})=>{const{as:t,src:M,alt:i,width:u,height:a,sizes:l,$width:L="100%",$position:s="relative",$colorFilter:c,placeholder:j="oak",unoptimized:D,imageProps:d,$objectFit:E,onLoad:y,onError:x,...N}=e,n="oak"===j?void 0:j,{showPlaceholder:C,handleComplete:h,setImg:T}=o.useShowPlaceholder();return u&&a?g.default.createElement(r.OakBox,{$maxWidth:"all-spacing-0",$position:s,...N},g.default.createElement(S,{ref:T,as:t??I.default,src:M,alt:i,width:u,height:a,sizes:l,unoptimized:D,$colorFilter:c,placeholder:n,$showOakPlaceholder:"oak"===j&&C,onLoad:h(y),onError:h(x),...d})):g.default.createElement(r.OakBox,{$position:s,$width:L,...N},g.default.createElement(A,{ref:T,as:t??I.default,src:M,alt:i,sizes:l,fill:!0,$colorFilter:c,placeholder:n,$showOakPlaceholder:"oak"===j&&C,unoptimized:D,onLoad:h(y),onError:h(x),$objectFit:E,...d}))},exports.oakPlaceholder=s,exports.placeholderStyles=j;
//# sourceMappingURL=OakImage.js.map
