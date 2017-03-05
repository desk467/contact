contact.extend('Route', function(){
  var public = {};

  var routes = [];
  var router = function(selector){
    var el = document.querySelector(selector);
    var url = location.hash.slice(1) || '/';

    el.innerHTML = routes[url].render();
  }
  public.when = function(path, component){
    routes[path] = component
  }
  public.routes = function(){
    return routes;
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);

  return public;
}, true);
