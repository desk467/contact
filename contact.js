var contact = (function(){
  var public = {};

  public.extend = function(feature, code, scoped){
    public[feature] = (scoped)? code() : code;
  }

  return public;
})()
