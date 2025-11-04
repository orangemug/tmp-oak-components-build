const r=(r,s)=>{const h=[];return s<=7?Array.from({length:s},((r,s)=>s)):(h.push(0),r<=3?h.push(1,2,3,"...",s-1):r>=4&&r<s-3?h.push("...",r-1,r,"...",s-1):h.push("...",s-4,s-3,s-2,s-1),h)};export{r as generatePageNumbers};
//# sourceMappingURL=utils.js.map
