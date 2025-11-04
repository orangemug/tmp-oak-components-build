"use strict";var r=require("next-cloudinary");exports.getCloudinaryIdFromUrl=function(e,n){return e.toString().replace(function(e){const n=new URL(r.getCldImageUrl({src:"canary.jpg"},e));return n.origin+"/image/upload/"}(n),"")};
//# sourceMappingURL=cloudinary.js.map
