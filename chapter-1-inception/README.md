# Theory assignment for class 1

### Q1. What is Emmet?

Emmet is a plugin which helps to improve worflow of HTML, CSS and other programming languages also.
It helps to write code using a predefined syntax which is dynamically parsed to get the output.

### Q2. Difference between a Library and Framework?

- Library and Framework are both piece of code written by someone else that helps to write your own code in a cleaner and easier way.

- A Framework inverts the control of the program. It tells the developer what they need. On the other hand, a library doesn't do that. The programmer calls the library whenever they need it.

- The degree or amount of freedom a library or framework gives a developer decides how 'opinionated' it is.

### Q3. What is CDN? Why do we use it?

CDN is a distributed network of servers which provide fast and efficient access to web content to users without the need to connect to the origin server. It reduces the load times of a webpage reducing the load times for users. There are many benefits to use CDNs, here are some of the following-

1. Improving the perceived speed of a web app for a user.
2. Reduce the load and bandwidth of the origin server cluster. This can be done because of the caching done at the edge servers of the CDN. The cached content can be returned to the user in a very fast way without having to connect with the origin server again and again.
3. Can also transform static content into more optimized formats. Such as to minify JS files and converting image and video formats.
4. Improving the security of the service by preventing DDOS attacks. This can be done by CDNs because of the high capacity of the edge servers. The attacker can never have more capacity than the edge servers and the user can always access the service.
5. Increasing the availability of the web service. Having a huge number of edge servers can improve the availability in case of hardware failures.

### Q4. Why is React known as React?

React is known as React because of of its reactive nature. The React API reacts to any state or property changes and works with data of any form, without requiring to setup point to point listeners.

### Q5. What is crossorigin in script tag?

The crossorigin attribute in the script tag enables CORS for that particular request to the server. The values of this attribute defines how does the server responds to cross-origin requests. This attribute can have two values -

- anonymous: In this type of request, no information from the client such as cookies, SSL certificates is shared with the server.
- use-credentials: In this type of request, user credentials are always included.

### Q6. What is diference between React and ReactDOM?

React and ReactDOM both libraries are created by the same team of engineers. Initially, they were bundled together but the major reason for splitting both of them was to use the power of React into more places such as React-native, react-art, react-canvas, react-three etc.

- React is the library which creates the views

- ReactDOM is the library which binds those views to a web browser. It renders the UI to the browser.

### Q7. What is difference between react.development.js and react.production.js files via CDN?

The major difference between the development and production versions of the files is that the production version is more optimized and minified which makes the rendering of file on the user's browser quick and enhances performance.

### Q7. What is async and defer?

Async and defer are boolean attributes which are used when using external scripts.

- When we are not using async or defer, the browser will stop parsing the HTML if it encounters any script and starts fetching it. After the fetching is complete, it executes the whole script and only then starts the HTML parsing again.

- While using Async attribute, the browser will fetch the script parallely with the parsing of HTML. But after the fetching is complete, it will stop the parsing of HTML and start executing the script, only after the execution of script is complete, the HTML parsing will begin again. This attribute does **not** guarantee the order of execution of scripts.

- When using Defer attribute, the browser will fetch the script parallely but it will execute it only after the HTML parsing is done. So, it guarantees the order of exection of scripts.
