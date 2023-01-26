# Theory assignment for Chapter 3 : Laying the foundation

### What is JSX?

JSX is _HTML like_ syntax that is written in a JS file to create React elements which are eventually converted to HTML to manipulate DOM. Babel is used as transpiler to convert JSX code to the JS code which can be understood by React.

- JSX is not HTML in JS

### Superpowers of JSX

JSX has a lot of benefits such as:

1. It makes the code more **Readable**
2. Makes the code more **Maintanable**
3. Makes the writing React code easier and more _Developer Friendly_

### Role of `type` attribute in script tag? What options can I use there?

The `type` attribute in script tag denotes the type of script is represented. It can have one of the these values:

1. Attribute is not set(default) or an empty string: It indicates that the script contains normal JS code

2. module: This tells the browser that the script is a JS module. The browser will defer the processing of the contents of the script.

3. importmap: This indicates that the script contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

### `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}`

- `{TitleComponent}` is just writing the name of the component but not invoking it. This will not render the TitleComponent.

- `{<TitleComponent />}` will render the component.

- `{<TitleComponent></TitleComponent>}` will also render the component. It is just syntactically different than the above code.
