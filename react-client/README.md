# Silentium Small Fullstack Application by TS React & NodeJs

A game with 4 buttons. The UI should be responsive. The reset button is the only one that gets moved as the screen size changed.

Clone repo and install app's depnedencies for both of client and server

```bash
# install app's dependencies
$ npm install
```

## React-Client

Start web client at http://localhost:3000/ by command

```bash
# go into client's directory
$ cd react-client

# start
$ npm start
```

## Express/NodeJs Server API

Start server at http://localhost:5000/ by command

```bash
# go into server's directory
$ cd server

#start server
$ npm run server
```

## Testing the application

### Unit Test API

Using RestApi extension of Visual Studio Code and send bellow requests

```bash
GET http://localhost:5000/api/transition/init

###

POST http://localhost:5000/api/transition/green
Content-Type: application/json

{
  "currentstep": "blue",
  "disabled": false
}

###

POST http://localhost:5000/api/transition/yellow
Content-Type: application/json

{
  "currentstep": "blue",
  "disabled": false
}

###

POST http://localhost:5000/api/transition/yellow
Content-Type: application/json

{
  "currentstep": "blue",
  "disabled": true
}

###

POST http://localhost:5000/api/transition/blue
Content-Type: application/json

{
  "currentstep": "green",
  "disabled": false
}

###

POST http://localhost:5000/api/transition/blue
Content-Type: application/json

{
  "currentstep": "yellow",
  "disabled": false
}

###
```

### Integration Test

Start both client and server and do testing on web browser
