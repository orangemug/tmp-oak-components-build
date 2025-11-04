import{getCldImageUrl as n}from"next-cloudinary";function r(r,o){return r.toString().replace(function(r){const o=new URL(n({src:"canary.jpg"},r));return o.origin+"/image/upload/"}(o),"")}export{r as getCloudinaryIdFromUrl};
//# sourceMappingURL=cloudinary.js.map
