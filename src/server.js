const connect = require('connect');
const serveStatic = require('serve-static');;

connect().use(serveStatic(__dirname)).listen(3325, function(){
    console.log("..........Algo.......");
    console.log("...............Paso..");
    console.log("Server run Coyote at port 3325");
    console.log("Got to http://localhost:3325");
    console.log("..........Green Bag.......");
    console.log("..........Bag.......");
})