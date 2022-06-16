function test() {
    return import('./module.js')
      .then(function ({ NAME }) {
        console.log(NAME);
      })
  }
  
  test().catch(console.error);