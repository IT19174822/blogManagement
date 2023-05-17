const express = require("express");
const admin_route = express();


const admonController=require("../controller/adminController");


admin_route.get('/',admonController.blogOne);
admin_route.get('/blog',admonController.blogTwo);
admin_route.get('/blog-setup',admonController.blogSetup);

module.exports=admin_route;
