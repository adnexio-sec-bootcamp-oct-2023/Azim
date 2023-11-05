let globalVar = "I'm a global variable";

function scopeTest() {
  let localVar = "I'm a local variable"; 

  console.log(globalVar); 
  console.log(localVar); 
}

scopeTest();

//console.log(globalVar); 
//console.log(localVar);