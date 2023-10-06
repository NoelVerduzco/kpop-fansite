
# Fansite Group Project

## Collaborators:
* Jeanmarie Jackman
* Noel Verduzco

## First Time Setup
* `npm install`
* `npm install -g json-server`
* `npm install react-router-dom`
* `npm install bootstrap`
* `npm install bootswatch`

## Starting The JSON Server and React App
* Start json-server in `/fansite/front-end/fansite-client/src/services` with command `json-server --watch db.json`
  * Should start on port 3000
* Start fansite-client in `/fansite/front-end/fansite-client` with command `npm start`
  * Should be prompted to start on a different port since 3000 is already in use by json-server, choose Y to use alt port

## Endpoints:

#### For groups content:
* BASE URL: `http://localhost:3000/api/fansite/kpop/group`
* GET ALL: `BASE URL`
* GET w/ ID: `/{id}`
* POST: `BASE URL`
* DELETE: `/{id}`

#### For artists content:
* BASE URL: `http://localhost:3000/api/fansite/kpop/idol`
* GET ALL: `BASE URL`
* GET w/ ID: `/{id}`
* POST: `BASE URL`
* DELETE: `/{id}`

## Database Design:
* Groups
  * Can contain 0 to many artists
* Artists
  * Can be a part of only 1 group