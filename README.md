# ISU World Standings

## Requirements

In order to use this project [Node.js](https://nodejs.org/) should be installed. Also `grunt` and `bower` should be installed globally.
Test `node` and `npm` installation with following command: 

	node -v && npm -v
It should output 2 versions.

Install grunt and bower globally: 

	npm install -g grunt-cli bower

## Installation

Run `npm install` to install Node and Bower dependencies. It will also build the project.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## TODO

1. Create server to get data from ISU site and serve it as JSON RESTful API
2. Move HTML parsing logic from Controller to server
3. Implement data caching on client and server sites


---
This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.
