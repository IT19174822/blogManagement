const express = require("express");
const user_route = express();

const bodyParser= require("body-parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));


user_route.set("view engine","ejs");
user_route.set('views','./views');


admin_route.use(express.static('public'));

module.exports = user_route;