import t from"styled-components";import{colorStyle as e}from"../../../styles/utils/colorStyle.js";import{marginStyle as i}from"../../../styles/utils/spacingStyle.js";import{typographyStyle as o}from"../../../styles/utils/typographyStyle.js";const l=t.ol`
  counter-reset: item;
  padding: 0;

  li {
    display: block;
    counter-increment: item;
    margin: 0;
    padding: 0 0 0 16px;
    text-indent: -16px;
    list-style-type: none;
    line-height: 32px;

    // Portable text generates linebreaks within list items

    br {
      content: "";
      display: block;
      margin-top: 8px;
    }
  }

  & li::before {
    padding-right: 4px;
    content: counter(item) ".";
  }
  a {
    color: ${t=>t.theme&&t.theme.uiColors&&t.theme.uiColors["text-link-active"]};
  }
  ${i}
  ${e}
  ${o}
`;export{l as OakOL};
//# sourceMappingURL=OakOL.js.map
