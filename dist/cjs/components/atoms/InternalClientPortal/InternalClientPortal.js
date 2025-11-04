"use strict";var e=require("react"),r=require("react-dom");exports.InternalClientPortal=({children:t,show:n})=>{const u=e.useRef(null);return e.useEffect((()=>{u.current=document.body}),[]),n&&u.current?r.createPortal(t,u.current):null};
//# sourceMappingURL=InternalClientPortal.js.map
