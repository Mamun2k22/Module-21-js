// swaping
let = first = 10;
let = second = 20;
console.log(first,second);
const temp = first;
first = second;
second = temp;
//console.log (first,second);

// approch 2 Destructor:
[first,second] = [second,first];
console.log (first,second);
