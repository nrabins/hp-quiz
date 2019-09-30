# HP Quiz

## Contributing
To contribute questions, add to the `questions` array in [this file](https://github.com/nrabins/hp-quiz/blob/master/src/data/questions.ts). Questions have two components: the **prompt** and the **answers**.

The first parameter in the `Question` constructor is a string prompt.

The second parameter is an array of `Answer` objects. The `Answer` constructor takes the text of the answer as a string and a list of Weights. The `Weight` constructor takes a House (Gryffindor, Slytherin, Hufflepuff, or Ravenclaw) and a weight. The weights are relative to eachother within the question.


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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
