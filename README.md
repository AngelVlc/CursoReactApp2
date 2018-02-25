## Requisitos

#### Configuración

yarn install

## Ejecución

1. yarn run dev-server

## Para ejecutar los tests

1. yarn test -- --watch

## Extensiones para VS Code

Babel ES6/ES7

## Extensiones para el navegador

React Dev Tools
Redux Dev Tools

## Firebase rules

{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
    		".write": "$user_id === auth.uid",
      }
    }  
  }
}

## Urls
Redux -> https://redux.js.org/docs/introduction/

airbnb DatePicker -> https://github.com/airbnb/react-dates

Tests:
jest -> https://facebook.github.io/jest/
airbnb enzyme -> https://github.com/airbnb/enzyme

