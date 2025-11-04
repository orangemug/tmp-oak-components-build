import{css as e}from"styled-components";import{responsiveStyle as $}from"./responsiveStyle.js";import{parseSpacing as l}from"../helpers/parseSpacing.js";const n=e`
  ${$("display",(e=>e.$display??"flex"))}
  ${$("flex-direction",(e=>e.$flexDirection))}
  ${$("flex-wrap",(e=>e.$flexWrap))}
  ${$("align-items",(e=>e.$alignItems))}
  ${$("align-content",(e=>e.$alignContent))}
  ${$("justify-content",(e=>e.$justifyContent))}
  ${$("align-self",(e=>e.$alignSelf))}
  ${$("order",(e=>e.$order))}
  ${$("flex-grow",(e=>e.$flexGrow))}
  ${$("flex-shrink",(e=>e.$flexShrink))}
  ${$("flex-basis",(e=>e.$flexBasis),l)}
  ${$("gap",(e=>e.$gap),l)}
  ${$("column-gap",(e=>e.$columnGap),l)}
  ${$("row-gap",(e=>e.$rowGap),l)}
`;export{n as flexStyle};
//# sourceMappingURL=flexStyle.js.map
