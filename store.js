contact.extend('Store', function(initialState, reducers){
  var state = initialState || {};

  return {
    dispatch: function(action, payload){
      reducers.map(function(reducer){
        reducer(payload)
      })
    },
    connect: function(component, properties){
      stateProperties = {};
      properties.map(function(property){
        stateProperties[property] = state[property]
      })
      return component.merge(stateProperties)
    }
  }
}, true);
