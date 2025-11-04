import e from"styled-components";import{OakLabel as n}from"../OakLabel/OakLabel.js";import{responsiveStyle as t}from"../../../styles/utils/responsiveStyle.js";import{parseSpacing as o}from"../../../styles/helpers/parseSpacing.js";const s=e(n)`
  display: flex;
  align-items: center;
  ${t("gap",(e=>e.labelGap),o)}
  ${t("align-items",(e=>e.labelAlignItems))}
`,r=e(s)`
  ${e=>`\n    ${e.pointerEvents?`pointer-events: ${e.pointerEvents};`:""}\n    ${e.disabled?"pointer-events: none;":"cursor: pointer;"}\n  `}
  @media (hover: hover) {
    &:hover {
      text-decoration: ${e=>e.disabled?"none":"underline"};
    }
  }
`;export{s as InternalCheckBoxLabel,r as InternalCheckBoxLabelHoverDecor};
//# sourceMappingURL=InternalCheckBoxLabel.js.map
