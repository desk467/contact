contact.extend('Signal', function(){
  var signals = {};

  return {
    on: function(signal, callback){
      signals[signal] = signals[signal] || [];
      signals[signal].push(callback);
    },
    dispatch: function(signal, data){
      signals[signal].map(function(callback) {
        callback(data);
      })
    }
  }
}, true);
