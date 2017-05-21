function route(handle, pathname){
  console.log("About to route a request to "+pathname);
  if (typeof handle[pathname]=== 'function'){
    return handle[pathname]();
  } else {
    console.log('No request handler is found for '+ pathname);
    return "404 Not found"
  }
}

exports.route = route;
