# learn_reactjs
This repo follows the tutorial from http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/

To use:

gulp clean

gulp

Notes:
- There are some modifications made: Not using html replace, See below.

- One of the comment clarifies an issue: I reread the blog – the change is implied but not shown. My code didn’t work until I did the same as you (requiring and adding the module.exports into the the individual components and App.js file

For others who may have the same issue:

in Child.js

var Child = React. createClass({ . . . }):

module.exports = Child; //you can technically name it what you like

in Parent.js

var Child = require(‘./Child’)

var Parent = React.createClass({ . . . })

module.exports = “Parent”;

in App.js

var Parent = require(‘./Parent’)

