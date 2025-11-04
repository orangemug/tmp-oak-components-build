import o,{css as s}from"styled-components";import{oakFlexCss as t}from"../OakFlex/OakFlex.js";import{oakBoxCss as e}from"../OakBox/OakBox.js";const l=o.ul`
  ${o=>o.$reset&&s`
      list-style: none;
      padding: 0;
    `}
  margin: 0;
  display: block;
  ${e}
  ${o=>o.$display&&t}
`;export{l as OakUL};
//# sourceMappingURL=OakUL.js.map
