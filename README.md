# ISS Finder

A simple app that fetches live data about the International Space Station.

## Features

* React, Babel and mapping with Leaflet
* Snapshot tests with Jest
* Javascript and css minification with webpack

## Installation and deployment

You must have an installed version of nodejs and npm.

`git clone https://github.com/AlbertoALopez/iss-finder.git` to clone the repository.

`npm install` to install dependencies.

`npm run start` starts the webpack development server. Hot module reloading is enabled to see changes to css and javsascript on the fly.

`npm run build` creates production ready minified javascript and css bundles in `/dist`.

`npm run eslint` lints all related files. For best results use an editor with an eslint plugin to lint while you write your code!