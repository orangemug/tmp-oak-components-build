import{useRef as r,useEffect as t}from"react";import{createPortal as o}from"react-dom";const n=({children:n,show:c})=>{const e=r(null);return t((()=>{e.current=document.body}),[]),c&&e.current?o(n,e.current):null};export{n as InternalClientPortal};
//# sourceMappingURL=InternalClientPortal.js.map
