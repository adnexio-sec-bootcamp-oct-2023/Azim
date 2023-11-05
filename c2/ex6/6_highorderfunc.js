function repeatOperation(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  
  function hypingMyself() {
    console.log("Let's do this!");
  }
  
  repeatOperation(hypingMyself, 3); 
  