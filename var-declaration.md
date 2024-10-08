# Intro to JS: variables, data types, operators, JSON intro, JSON documentation

- essentially Javascript data

*who has seen JS before? What did you learn?*

## Types of variable declaration

slide 5
- var is outdated

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

  ```
    function dogKennel() {
      const dog = "Rover";
    }

    console.log(dog);
  ```

  ```
    if (true) {
      const cat = "Whiskers";
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
  
Done declaring - now how about giving them a value? 
https://github.com/LiskaC/redi-variables
