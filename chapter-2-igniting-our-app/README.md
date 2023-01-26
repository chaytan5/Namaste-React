# Theory assignment for chapter 2

### What is `NPM`?

NPM is the default package manager for nodejs. Although, it's full form is **not** Node Package Manager, it basically performs the same task. It manages the installation and version tracking of the dependecies in a project.

### What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack are bundlers which are used in web-apps to make them production ready and make it easier to do development. When developing an app, we usually write code in different files which are more manageable. But, in production apps, requesting resources from different files can make our app non-performant, so to solve this issue bundlers are used which combine multiple files to one single file. Along with this, bundlers also come with multiple more features such as minification, development server, media compression and optimization etc.

### What is `.parcel-cache`

.parcel-cache is a folder which is automatically created by parcel to store cache files in order to enable fast reload and reduce the time required to refresh for changes (also called HMR).

We can also say that parcel-cache folder is parcel's own space in which it stores important files to ensure that all it's functionality runs as expected.

### What is `npx` ?

npx executes the specified command from the packages installed in the local of that project or if the package is not present, it will install it and then execute the said command.

### What is difference between `dependencies` vs `devDependencies`

Dependencies are the packages which are the core packages which we want our app to have when it is running in production. On the other hand, devDependencies are the dependencies which are required only for development purposes and are not required in production environment.

### What is Tree Shaking?

Tree shaking is nothing but removal of dead code in our app. It depends on checking the import and export statements in the different files in the app.

This task is commonly done by the bundlers such as Parcel, Webpack etc. while bundling code in a single file. This is important to make our app production ready.

### What is Hot Module Replacement?

Hot Module Replacement is the process of updating the modules in the browser at runtime without reloading the whole page. This makes reloading in development environment fast and also enables state to be same whenever small changes are made.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

Parcel is a BEAST. Parcel performs a lot of tasks and makes development easier and more efficient. It also ensures that our app remains performant and quick in production environment. Some of the superpowers of Parcel are :

1. Bundling
2. Hot Module Replacement
3. Minifying
4. Image optimization
5. Makes our app compatible with older version of browsers

- Minifying: It reduces the file size by removing whitespace, renaming variables to shorter names along with many other optimizations. Parcel has inbuilt support for JS, HTML, CSS and SVG files. This will be done by Parcel when using the build command.

- Image optimization: When building the production build, Parcel does lossless image optimization for JPEG and PNG files, which reduces their file size without reducing their quality.

- HTTPS in development: Sometimes, we need to use HTTPS in our server, Parcel offers this feature without any separate configuration. We just need to use the --https flag while executing the parcel command.

- Caching: Parcel caches everything when the build command is executed, so that when we restart the server, it only rebuilds the files that have been changed. This is done by watching all the files continuously and tracking the changes using a File Watcher algorithm.

### What is `.gitignore`? What should we add and not add into it?

.gitignore is a file in which we specify the files and folders that we don't want git to track and not upload on github.

We should add those files and folders in gitignore which can be re-generated using the information present in the files. For ex- node_modules, .parcel-cache, dist

We should never add package.json and package-lock.json file to gitignore as these files are critical to regenerate the node_modules which contains the dependencies of our project.

### What is the difference between `package.json` and `package-lock.json`

package.json file is created when we initialize our project with npm using the command `npm init`. This file is responsible for keeping track of all the dependencies with their version that our project is using. The version of the dependencies saved in this file is prefixed with `^` (caret) symbol which means that our project is compatible with that particular version of package till another major update.

Another file is created which is **package-lock.json**, this file locks the version of the dependencies that our project is currently using. This comes into play when another user clones the repo and uses `npm i` command to install the dependencies, package-lock.json file ensures that the packages install are of the same version as specified in the original repo.

### Why should I not modify `package-lock.json`?

package-lock.json file should never be changed as it contains sensitive and important information about the dependencies and their versions to be installed. It also contains the integrity hash of the package.

This file ensures that our project works seamlessly across multiple systems without any failure. This can be done because of locking of the dependency version done by this file. Everytime we install the packages, it installs the correct version which ensures that our app works as expected.

### What is `node_modules` ? Is it a good idea to push that on git?

node_modules is the folder in which all the dependency packages of our app live. Whenever packages are installed using `npm i` command, the source code of those packages is downloaded in the node_modules folder.

This folder should never be pushed to git because they become very large as our app grows in size. Also, this folder can be recreated by just reinstalling the dependencies again on any machine.

### What is the `dist` folder?

dist folder is created by Parcel(or bundlers in general) to store the development and production build files.

### What is `browserlists`

browserlists is a package which makes our code compatible with the browsers that we specify in the package.json. If some code we write is not compatible with some older version of the browser, this package will automatically create a polyfill for that and make our app run as expected. It uses multiple packages to achieve this :

- Autoprefixer
- Babel
- postcss-preset-env
- eslint-plugin-compat
- stylelint-no-unsupported-browser-features
- postcss-normalize
- obsolete-webpack-plugin

#### Read about dif bundlers: vite, webpack, parcel: Done

#### Read about: ^ - caret and ~ - tilda: Done

#### Read about Script types in html (MDN Docs): Done
