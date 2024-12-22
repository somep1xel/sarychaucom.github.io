var ipLookUp = function(){
  return $.get("http://ipinfo.io", function (response) {
      return response.country;
  }, "jsonp").fail(function() {
  return false;
});
}