# Theory assignment for class 1

---

### Q1. What is Emmet?

Emmet is a plugin which helps to improve worflow of HTML, CSS and other programming languages also.
It helps to write code using a predefined syntax which is dynamically parsed to get the output.

### Q2. Difference between a Library and Framework?

- Library and Framework are both piece of code written by someone else that helps to write your own code in a cleaner and easier way.

- A Framework inverts the control of the program. It tells the developer what they need. On the other hand, a library doesn't do that. The programmer calls the library whenever they need it.

- The degree or amount of freedom a library or framework gives a developer decides how 'opinionated' it is.

### Q3. What is CDN? Why do we use it?

### Q4. Why is React known as React?

### Q5. What is crossorigin in script tag?

### Q6. What is diference between React and ReactDOM?

### Q7. What is difference between react.development.js and react.production.js files via CDN?

### Q7. What is async and defer?

Async and defer are boolean attributes which are used when using external scripts.

- When we are not using async or defer, the browser will stop parsing the HTML if it encounters any script and starts fetching it. After the fetching is complete, it executes the whole script and only then starts the HTML parsing again.

- While using Async attribute, the browser will fetch the script parallely with the parsing of HTML. But after the fetching is complete, it will stop the parsing of HTML and start executing the script, only after the execution of script is complete, the HTML parsing will begin again. This attribute does **not** guarantee the order of execution of scripts.

- When using Defer attribute, the browser will fetch the script parallely but it will execute it only after the HTML parsing is done. So, it guarantees the order of exection of scripts.
