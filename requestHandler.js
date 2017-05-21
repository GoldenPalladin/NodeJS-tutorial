function start(){
  console.log("Start event handler is called.");
  function sleep(miliseconds){
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliseconds);
  }
  return "Hello start";
}
function upload(){
  console.log("Upload event handler is called.");
  return "Hello upload";
}
exports.start=start;
exports.upload=upload;
