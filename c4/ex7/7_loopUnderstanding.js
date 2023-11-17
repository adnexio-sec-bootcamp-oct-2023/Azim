console.log('Start');

setTimeout(() => {
  console.log('Timeout 1 (after 2000ms)');
}, 2000);

setTimeout(() => {
  console.log('Timeout 2 (after 1000ms)');
}, 1000);

console.log('Middle');

setTimeout(() => {
  console.log('Timeout 3 (after 3000ms)');
}, 3000);

console.log('End');

/* 
Prediction:
- Start
- Middle
- End
- Timeout 2
- Timeout 1
- Timeout 3
*/
