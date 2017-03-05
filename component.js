contact.extend('Component', function(properties){
  return {
    context: {},
    properties: properties,
    merge: function(anotherProperties){
      return Object.assign(properties, anotherProperties)
    }
  }
})
