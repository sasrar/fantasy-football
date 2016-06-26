# Fantasy football app

This is a fantasy football app. It has tidbits about players that I'm interested in.

<br/>

This repo was bootstrapped from [Material-Start](https://github.com/angular/material-start) repository

<br/>

## Getting Started

#### Prerequisites

You will need **git** to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test material-start. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Clone material-start

To get you started you can simply clone `master` branch from the [fantasy-football](https://github.com/sasrar/fantasy-football.git) repository
 and install the dependencies:

Clone the repository using [git][git]:

```
git clone https://github.com/sasrar/fantasy-football.git
cd fantasy-football
```

#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We also get the AngularJS and Angular Material library code via `npm`

```
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need


## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/           		--> all app specific modules
     users/             --> package for user features
  index.html            --> app layout file (the main html template file of the app)
test/
  karma.conf.js         --> Karma-Jasmine config file (for unit tests)
  protractor-conf.js    --> Protractor config file (for e2e tests)
  unit/					--> Karma-Jasmine unit tests
  e2e/ 			        --> end-to-end tests
```


## Serving the Application Files

While AngularJS is client-side-only technology and it's possible to create AngularJS webapps that
don't require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes pre-configured with a local development web server. It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

>Run `live-server` in a Terminal window</br>
Open browser to url `http://localhost:8080/app/`


Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Run UnitTests

Simply open a Terminal window and run `npm run tests` to start all your Karma unit tests.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the
project. Now that the AngularJS framework library code and tools are acquired through package managers
(npm) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

## TODOS

```
* Open player news in new tab when clicking
* Last player news card not showing up properly
* Improve color pallette and layout
```

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
