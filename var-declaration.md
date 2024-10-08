# Intro to JS: variables, data types, operators, JSON intro, JSON documentation

- essentially Javascript data

*who has seen JS before? What did you learn?*

## Types of variable declaration
 - const
 - let

 - var
var is outdated

## Scope
- const and let are also able to be scoped globally and functionally.

- useful takeaway: Global vs function vs block scope 
  https://medium.com/nerd-for-tech/function-scope-block-scope-in-js-d29c8e7cd216

**examples**

  ```
    const globallyScoped = 'I am globally scoped'

    let blockScoped = 'Block scoped'

    var functionallyScoped = 'Functionally scoped'
  ```

- Don't use `var`, avoid `let`, use `const` when possible
- You CAN modify const, just not reassign.

**Practice**
Will they print?

  ```
    function dogKennel() {
      const dog = "Rover";
    }

    console.log(dog);
    does not print
  ```

  ```
    if (true) {
      const cat = "Whiskers";
      console.log(cat);
    }

    console.log(cat);

  ```

  ```
    const parrot = "Polly";

    function birdCage() {
      console.log(parrot);
    }

    birdCage();
  ```

  ```
  const rabbit = "Thumper";

  if (true) {
    const rabbit = "Bunny";
    console.log(rabbit);
  }

  console.log(rabbit);
  ```


# NODE
This is how we run our javascript

**Check if already present**
write in your teminal :
`node -v`
`npm -v`
both should print a version number

**Install Node**
This is how we run our javascript
https://nodejs.org/en/download/package-manager

  
Done declaring - now how about giving them a value? 
https://github.com/LiskaC/redi-variables
