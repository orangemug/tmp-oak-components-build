import s from"styled-components";import{oakBoxCss as t}from"../OakBox/OakBox.js";import{displayStyle as l}from"../../../styles/utils/displayStyle.js";import{listStyle as o}from"../../../styles/utils/listStyle.js";import{typographyStyle as e}from"../../../styles/utils/typographyStyle.js";import{flexStyle as i}from"../../../styles/utils/flexStyle.js";const p=s.li`
  ${t}
  ${e}
  ${o}
  ${l}
  // FIXME - Flex props will only work when display is set to flex, can we conditionally apply this + props above ? 
  ${i}
`;p.defaultProps={$display:"revert"};export{p as OakLI};
//# sourceMappingURL=OakLI.js.map
