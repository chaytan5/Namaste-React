# Theory assignment for Chapter 4: Talk is cheap, show me code

#### Is JSX mandatory for React?

No, JSX is not mandatory for React. JSX is just syntactic sugar for writing React code. Ultimately JSX is converted to React.CreateElement code by Babel. JSX makes our code more Readabable, Maintainable and Developer friendly.

#### IS ES6 mandatory for React?

No, ES6 is not mandatory for React, we can use ES5 syntax as well, it's all upto developers.

#### How can I write comments in React

We can write comments in React in the same way we write comments in JavaScript. In React, while writing JSX, we just need to make sure that the comments are written inside the _curly braces_ which allows to write JS inside JSX.

```
{ // This is an example comment}

{/*
* This is a multi line
* comment
*/}
```

#### What is <React.Fragment></React.Fragment> and <></>?

React.Fragment is a component provided by the React library. As we know, React components and elements can have only one parent element, React.Fragment provides exactly the same. By using this component, devs can provide a parent element without using an extra div. In other words, it is used to group elements together without using a wrapper node. It doesn't have any effect on the DOM, it works as if the elements were never grouped.

<></> is a shorthand for <React.Fragement></React.Fragment>.

#### What is Virtual DOM?

Virtual DOM is a representation of the actual DOM tree. It is used to detect the changes when the UI has to be changed or the state has changed. This enables react to render only the element which is changed and not render the other components. This results in a very fast and performant app.

#### What is Reconciliation in React?

Reconciliation is the process of finding out the difference between trees created by React before and after a props/state change. It is done using a _diffing algorithm_ which is at the core of this whole process. This algorithm basically finds out whether to rerender the component or do some changes to the same component.

#### What is React Fiber?

React fiber is the new reconciliation engine in React 16. It's primary goal is to take advantage of scheduling thereby enable incremental rendering of the Virtual DOM. To do that, React Fiber needs to be able to:

- Pause work and come back to it later.
- Assign priority to different types of work.
- Reuse previously completed work.
- Abort work if it is no longer needed.

#### Why do we need keys in React? When do we need keys in React?

While recursing the children of a DOM node, React iterates over the list of elements at the same time in both old as well as new tree. In this way, any difference generates a mutation and React is able to find out elements that need to be updated.

This may lead to unnecessary re-renders of the list of elements which have not changed if any new list item is updated in the middle or the top. This will lead to the re-render of the whole list. To solve this issue, React used _keys_ which has to be unique for each list item (only locally, not globally). By using keys, React can easily identify which elements have been updated and only that particular item will be re-rendered.

#### Can we use index as keys in React?

Yes, we can use index as keys in React, infact, if keys are not provided for list items, index is used internally. But this should only be used as a last resort because it can cause many performance and state issues. When using index as key, React will treat the new element as the previous element which was present at the index, which messes up the state for that element.

#### What is props in React?

Props are properties or information that we can pass to JSX tags. Props can include inline styles, className, id and basically whatever we wish to pass as information.

#### What is config driven UI?

Config driven UI is a type of UI in which the components are rendered according to the config done or the data received from the backend. The major benefit of this UI is that UI responds according to the data which is being sent from the backend, which means to change something in the UI, we don't have to write another component, but we can just provide other data to the frontend and the UI will get updated according to that.
