# Kaloom

This repo has projects for both front-end (KaloomUi) and backend (KaloomServer). 

## KaloomUi

___

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Kaloom Database

-------

Install docker, open terminal/command-prompt & navigate inside kaloom-local-db folder and run the following command  

```bash
docker compose up
```

If you have any other mongodb instance and want to use that instead, change the following line inside app.ts file with your url and credentials.

```javascript
await connect('mongodb://kaloom:verySecure@127.0.0.1:27017/test?authSource=admin&w=1');
```

## KaloomServer APIs

-------

### APIs for managing lobby

TODO: suraj working on it

### APIs for managing users

TODO: pending

### APIs for processing videos

TODO: pending

### APIs for testing purpose

- `/api/ping` - Type `GET`: For quick testing of Kaloom server.

- `/api/authors` - Type `GET`: To get list of author details.

- `/api/authors/add` - Type `POST`: To add a author.
