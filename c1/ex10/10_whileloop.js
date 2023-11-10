let input = 5;

while (input > 0) {
  let line = '';
  for (let i = 0; i < input; i++) {
    line += '*'; //concatenate '*' on the right
    //console.log(line);
  }
  console.log(line);
  input--;
}
