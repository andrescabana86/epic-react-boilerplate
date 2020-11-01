# React/Typescript Project
In this project I manually configured all the needed tools 
for starting a project from scratch.

## IDE Webstorm
The entire project was developed using Webstorm.

## Prettier
Following the next rules:
```json5
{
  "arrowParens": "always", // Include parentheses around a sole arrow function parameter.
  "bracketSpacing": true, // Print spaces between brackets in object literals.
  "endOfLine": "lf", // Line Feed only (\n), common on Linux and macOS
  "printWidth": 105, // Specify the line length that the printer will wrap on.
  "semi": false, // Only add semicolons at the beginning of lines that may introduce ASI failures.
  "singleQuote": true, // Use single quotes instead of double quotes.
  "tabWidth": 2, // Specify the number of spaces per indentation-level.
  "trailingComma": "all" // Print trailing commas wherever possible
}

```

## ESLint
Following the next configuration:
```json5
{
  "extends": [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint",
    "html"
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  }
}

```

## TSConfig
Following the next configuration:
```json5
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true, // allows you to write an import like pattern
    "baseUrl": "./src", // root folder where you can do absolute file resolution
    "jsx": "react", // react mode -> <div /> converts into React.createElement("div")
    "module": "ESNext", // refers to whatever the next version is at time of writing this code
    "noImplicitAny": true,
    "outDir": "./build", // files will be emitted into this directory
    "paths": { // aliases
      "@components/*": ["components/*"]
    },
    "sourceMap": true, // Enables the generation of sourcemap files
    "target": "ES6" // Modern browsers support all ES6 features
  }
}
```

## Package.json Scripts
```json5
{
  // build the entire project into /build folder
  "build": "webpack --config webpack.config.js",
  // format with prettier
  "format": "prettier --write \"**/*.+(ts|tsx|json)\"",
  // run eslint fix rules
  "lint": "eslint src/** --fix",
  // start project in develop mode "localhost:8080"
  "start": "webpack serve --progress --color --config webpack.config.js"
}
```