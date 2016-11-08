export default  {
  endpoint: 'auth',     // use 'auth' endpoint for the auth server
  configureEndpoints: ['auth'],  // add Authorization header to 'auth' endpoint
  facebook: {
    clientId: 'd.shamak' // set your third-party providers client ids
  }
}
