var server=require("./server");
var router=require("./router");
var requestHandlers = require('./requestHandler');

var handle = {
  '/' : requestHandlers.start,
  '/start' : requestHandlers.start,
  '/upload' : requestHandlers.upload
}


server.start(router.route, handle);
