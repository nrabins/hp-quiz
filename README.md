# HP Quiz

## Contributing
To contribute questions, add to the `questions` array in [this file](https://github.com/nrabins/hp-quiz/blob/master/src/data/questions.ts). Questions have two components: the **prompt** and the **answers**.

The first parameter in the `Question` constructor is a string prompt.

The second parameter is an array of `Answer` objects. The `Answer` constructor takes the text of the answer as a string and a list of `Weight` objects. The `Weight` constructor takes a House (`House.Gryffindor`, `House.Slytherin`, `House.Hufflepuff`, or `House.Ravenclaw`) and a numerical weight. The weights are relative to each other within the question. I've used a scale where they total to 1 but that's not strictly necessary as they will be normalized in their usage. A `Weight` can also be created with just a House if there is only one House applicable to the answer.

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
