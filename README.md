# webpack-starter

Pyssion's webpack starter kit (with React ecosystem).


## features

- [ ] React with ES6 and JSX
- [ ] React-Router with code splitting
- [ ] Redux and reselect
- [ ] Rx.js for side effects
- [ ] future ready CSS
- [ ] configurable eslint
- [ ] webpack based with HMR

## TODO

- [ ] react, react-router, redux and their children
- [ ] Rx.js and more
- [ ] CSS stuff
- [ ] eslint configuration
- [ ] webpack loaders and plugins
- [ ] babel syntax preference
- [ ] standard components, containers, etc
- [ ] templates and code generation (yo?)
- [ ] test
- [ ] many other best practice

## How the code is structured

- src
  - flux: action, reducers and selectors
  - route: route configurations and layouts
  - component: components (smart ones and dumb ones)
  - store: contains basic store setup and all reducers (maybe middlewares?)

- src # route directory for all source files
  - app # app related files, including store, containers and layouts
  - components # well styled components
  - layout # page level components
