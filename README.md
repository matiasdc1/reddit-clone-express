# Reddit Clone Backend (BD + API)

This is a simple Express App + Docker Postgres for the Reddit Clone FrontEnd. This app will work independently, however, it was developed in order to work with the Reddit Clone app you can find in my repository.

## Installation

You must have Docker already installed on your PC.

Clone the repository to your PC. Then:

```js
npm install
npm run db:dev:restart
npm start
```

The first command will install all dependencies.

The second command will set up the Docker Postgres DB.

The third command will set up the Express App, already connected to the docker DB.

The next step is running the Reddit FrontEnd with the Android Studio AVD.

## Contributing

You can fork the project and do your own thing.

## License

[MIT](https://choosealicense.com/licenses/mit/)
