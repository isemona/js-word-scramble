

> let greeting = "Hello"
undefined
> let greeting = "Hello";
SyntaxError: Identifier 'greeting' has already been declared
> console.log(greeting)
Hello
undefined
> const new_array = greeting.split();
> 
(To exit, press ^C again or type .exit)
> const new_array = greeting.split('');
undefined
> console.log(new_array);
[ 'H', 'e', 'l', 'l', 'o' ]
undefined
> mergeString = new_array.join('');
ReferenceError: mergeString is not defined
> let mergeString = new_array.join('');
undefined
> console.log(mergeString);
Hello
undefined
> const randomItem = Math.random(new_array);
undefined
> console.log(randomItem)
0.7767963093573544
undefined
> const randomLetter = new_array[Math.floor(Math.random()*new_array.length)];
undefined
> console.log(randomeLetter);
ReferenceError: randomeLetter is not defined
> console.log(randomLetter);
H
undefined
> let letter1 = new_array[Math.floor(Math.random()*new_array.length)];
undefined
> let letter2 = new_array[Math.floor(Math.random()*new_array.length)];
undefined
> console.log(swap(letter1,letter2));
ReferenceError: swap is not defined
> function swap(x,y){
...     let t = x;
...     x = y;
...     y = t;
...     return [x,y];
... }
undefined
> console.log(swap(letter1,letter2));
[ 'e', 'o' ]
undefined
> const candy = new Map();
undefined
> candy['red'] = 'apple';
'apple'
> candy['orange'] = 'orange';
'orange'
> candy['yellow'] = 'banana';
'banana'
> candy['green'] = 'lime';
'lime'
> candy['purple'] = 'grape';
'grape'
> console.log(candy);
Map {
  red: 'apple',
  orange: 'orange',
  yellow: 'banana',
  green: 'lime',
  purple: 'grape' }



for (let[color,flavor] of Object.entries(candy)){
    console.log(
        `The ${flavor}flavor is colored ${color}.`
    );
}

> Object.keys(candy);
[ 'red', 'orange', 'yellow', 'green', 'purple' ]
> Object.values(candy);
[ 'apple', 'orange', 'banana', 'lime', 'grape' ]
> Object.entries(candy);
[ [ 'red', 'apple' ],
  [ 'orange', 'orange' ],
  [ 'yellow', 'banana' ],
  [ 'green', 'lime' ],
  [ 'purple', 'grape' ] ]
> for (let[color,flavor] of Object.entries(candy)){
...     console.log(
.....         `The ${flavor}flavor is colored ${color}.`
.....     );
... }
The appleflavor is colored red.
The orangeflavor is colored orange.
The bananaflavor is colored yellow.
The limeflavor is colored green.
The grapeflavor is colored purple.
undefined


> function isCandy(key,candy){
...     if (candy.hasOwnProperty(key)){
.....         return candy[key];
.....     } else{
.....         console.log('Sorry, that color doesn’t have a flavor');
..... 
...     }
...         
... }
undefined
> console.log(isCandy('banana',candy));
Sorry, that color doesn’t have a flavor

let array = ["red","violet"];
function isCandy(array){
    let newList = [];
    
    for (key of candy) {
        if (array.includes(key)){
            newList.push(candy[key]);
        }else{
            newList.push("null");
        }
    return newList;
        
}


console.log(isCandy(array));
