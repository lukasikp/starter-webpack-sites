## Node version

v.12.7.0

## Tools and technologies used in this project:

- [Webpack]
  <!-- - [Browserify](http://browserify.org/) -->
- [Nunjucks template engine](https://mozilla.github.io/nunjucks/)
- [Sass](http://sass-lang.com/)

## Run project:

With npm:

- development - live reload `npm run start`
- build - `npm run build`
- build for production - `npm run build:prod`

With yarn:

- development - live reload `yarn start`
- build - `yarn build`
- build for production - `yarn build:prod`

## Folder structure

```
├── _build/              * built project
├── fonts/               * fonts and icon fonts used in the project
├── images/              * images used in the project
├── media/               * other media files that can be uploaded by the user or admin (documents, videos, etc.)
├── scripts/
|   ├── site.js          * contains Site class with find and parseContent methods
|   ├── components/      * all elements in the website should be divided into independent modules, so all scripts for modules should be defined in separate files in this directory
|   ├── polyfills/       * fill the gap between the browser and technology
|   ├── utils/           * contains common functions
|   └── vendors/         * scripts required by the external libraries, loaded at each sites
|   └── outer/           * scripts required by the external libraries, copied to _build, not compiled to the main js file
├── styles/
|   ├── main.scss        * only imports of partial files described below
|   ├── base/            * all base styles of the website
|   ├── components/      * all elements in the website should be divided into independent modules, so all styles for modules should be defined in separate files in this directory
|   ├── layout/          * styles related with the main elements of the website eg.: footer, header, grid, forms, wysiwyg editor
|   ├── pages/           * styles needed by specific sub page if it can't be put into module
|   ├── utils/           * contains mixins and variables
|   └── vendors/         * all styles required by the external libraries
|   └── outer/           * all styles required by the external libraries, copied to _build, not compiled to the main css file
└── templates            * HTML templates
```
