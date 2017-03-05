contact.extend('Component', function(properties){
  return {
    properties: properties,
    merge: function(anotherProperties){
      return Object.assign(properties, anotherProperties)
    },
    compile: function(){
      // Do some magic here ...
    },
    render: function(){
      this.compile();

      var el = document.querySelector(properties.selector);
      if(properties.template.startsWith('#')){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              el.innerHTML = properties.template;
            }
        };
        xhttp.open("GET", properties.template.slice(1), true);
        xhttp.send();
      } else {
        el.innerHTML = properties.template;
      }
    }
  }
})
