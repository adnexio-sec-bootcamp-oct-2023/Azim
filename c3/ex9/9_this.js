/*Develop a function within an object that returns the object's properties using the this keyword. 
Call the function in different contexts (e.g., globally, within the object, using call/apply/bind) 
to observe changes in the value of this.*/

const myObject = {
    name: 'Jungkook',
    age: 29,
    city: 'Seoul',
    getProperties: function() {
      return {
        name: this.name,
        age: this.age,
        city: this.city,
        //name: myObject.name,
        //age: myObject.age,
        //city: myObject.city,
      };
    },
  };
  
  console.log('Within object:');
  console.log(myObject.getProperties());
  
  const globalFunction = myObject.getProperties;
  console.log('\nGlobally:');
  console.log(globalFunction());
  // this just creates a reference to getProperties without its original
  // context. No access to myObject object. Need to use call/apply/bind
  // for globalfunction to work 
  
  const anotherObject = {
    name: 'Ali',
    age: 25,
    city: 'Los Seremban',
  };
  
  console.log('\nUsing call:');
  console.log(globalFunction.call(myObject));

  console.log('\nUsing call:');
  console.log(myObject.getProperties.call(anotherObject));
  
  console.log('\nUsing apply:');
  console.log(myObject.getProperties.apply(anotherObject));
  
  const boundFunction = myObject.getProperties.bind(anotherObject);
  console.log('\nUsing bind:');
  console.log(boundFunction());
  