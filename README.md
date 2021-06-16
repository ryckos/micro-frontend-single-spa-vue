# layout-app

This app is the orchestrator of the whole project. It also represente the Layout of our project.

# how it works ?

This app need two other sub-application to work: 
  . [single-spa-app-one](https://github.com/ryckos/siingle-spa-app-one)
  . [single-spa-app-two](https://github.com/ryckos/single-spa-app-two)
  
Your must run these sub-application first and if needs, change the sub-app port with the corresponding one in the 
[single-spa-config.js](https://github.com/ryckos/micro-frontend-single-spa-vue/blob/master/src/single-spa-config.js) file of the layout-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
