contact.extend('Route', function(){
  var public = {};

  var routes = [];
  var fallback;

  var router = function(){
    var el = document.querySelector('app');
    var url = location.hash.slice(1) || '/';

    routes[url] = routes[url] || fallback;
    el.innerHTML = routes[url].render();
  }
  public.when = function(path, component){
    routes[path] = component
  }
  public.routes = function(){
    return routes;
  }

  public.prepare = function(selector){
    fallback = new contact.Component({
      selector: 'app',
      template: '<h1>Route not found</h1>'
    });

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
  }

  return public;
}, true);
