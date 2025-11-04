import M from"react";import o from"next/image";import e,{css as t}from"styled-components";import{useShowPlaceholder as i}from"./useShowPlaceholder.js";import{colorFilterStyle as g}from"../../../styles/utils/colorFilterStyle.js";import{OakBox as r}from"../OakBox/OakBox.js";import{parseColor as I}from"../../../styles/helpers/parseColor.js";import{parseSpacing as L}from"../../../styles/helpers/parseSpacing.js";const j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=",A=t`
  ${M=>M.onClick&&t`
      :hover {
        cursor: pointer;
      }
    `}
`,u=t`
  ${M=>M.$showOakPlaceholder&&t`
      background-image: url(${j});
      background-color: ${I("bg-decorative2-very-subdued")};
      background-size: ${L("all-spacing-11")};
      background-position: center;
      background-repeat: no-repeat;
    `}
`,a=e(o)`
  ${g}
  ${A}
  ${u}
  ${M=>t`
    object-fit: ${M.$objectFit?M.$objectFit:"contain"};
  `}
`,l=e(o)`
  ${g}
  ${A}
  ${u}
  width: 100%;
  height: auto;
`,c=({...e})=>{const{as:t,src:g,alt:I,width:L,height:j,sizes:A,$width:u="100%",$position:c="relative",$colorFilter:s,placeholder:D="oak",unoptimized:E,imageProps:S,$objectFit:N,onLoad:y,onError:x,...C}=e,m="oak"===D?void 0:D,{showPlaceholder:n,handleComplete:d,setImg:T}=i();return L&&j?M.createElement(r,{$maxWidth:"all-spacing-0",$position:c,...C},M.createElement(l,{ref:T,as:t??o,src:g,alt:I,width:L,height:j,sizes:A,unoptimized:E,$colorFilter:s,placeholder:m,$showOakPlaceholder:"oak"===D&&n,onLoad:d(y),onError:d(x),...S})):M.createElement(r,{$position:c,$width:u,...C},M.createElement(a,{ref:T,as:t??o,src:g,alt:I,sizes:A,fill:!0,$colorFilter:s,placeholder:m,$showOakPlaceholder:"oak"===D&&n,unoptimized:E,onLoad:d(y),onError:d(x),$objectFit:N,...S}))};export{c as OakImage,j as oakPlaceholder,u as placeholderStyles};
//# sourceMappingURL=OakImage.js.map
