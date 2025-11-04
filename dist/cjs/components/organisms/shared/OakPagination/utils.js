"use strict";exports.generatePageNumbers=(e,r)=>{const s=[];return r<=7?Array.from({length:r},((e,r)=>r)):(s.push(0),e<=3?s.push(1,2,3,"...",r-1):e>=4&&e<r-3?s.push("...",e-1,e,"...",r-1):s.push("...",r-4,r-3,r-2,r-1),s)};
//# sourceMappingURL=utils.js.map
