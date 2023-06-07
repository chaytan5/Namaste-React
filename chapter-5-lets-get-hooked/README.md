# Theory assignments for Chapter 5 : Let's get hooked

#### What is the difference between Named export, Default export and \* as export?

- **Named export**: This type of exports can be used to export let, var, const declarations as well as functions and classes. There can be multiple named exports in a file. The export declaration are not subject to _Temporal Dead Zone_ rules, meaning you can export a feature before it's decalaration. While importing such exports, the name of the import must be same as the export name.

The syntax to perform such export is

```
// exporting features declared anywhere in the file
export {myFunction, myVariable}

// exporting while declaration
export let newVariable = 10;

export newFunction(){
  console.log('Hello World')
}
```

- **Default export**: When using this type of export, there can only be a single export per module. A default export can be a function, a class, a variable , an object or anything else. While importing default exports, we can import it using any name.

The syntax to perform such export is

```
// exporting a function as default
export {myfunction as default}
// which is same as
export default myFunction

// can also be done while declaration
export default newFunction(){
  console.log('From default export')
}
```

#### What is the importance of config.js file?



#### What are React Hooks?

React Hooks are nothing but JavaScript functions.

#### Why do we need a useState Hook?

