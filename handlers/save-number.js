function saveNumberHandler() {
  debugger;
  // read new number from user input
let num = document.getElementById('input').value;
  // read from state the data you will need for the next step
numbers.all.push(num);
 // find the new biggest and smallest values
numbers.biggest = Math.max(...numbers.all);
numbers.smallest = Math.min(...numbers.all);               
               
                
  // update state: new biggest, new smallest, new current & save the last current
  newSmall = numbers.smallest;
  newBig = numbers.biggest;
  // re-render the user interface with values stored in state
document.getElementById('biggest').innerText = newBig;
document.getElementById('smallest').innerText = newSmall;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput: num,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
