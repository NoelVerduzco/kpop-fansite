
# Fansite Group Project

## Collaborators:
* Jeanmarie Jackman
* Noel Verduzco

## Endpoints:

#### For groups content:
* BASE URL: `http://localhost:3000/api/fansite/kpop/group`
* GET ALL: `BASE URL`
* GET w/ ID: `/{groupId}`
* POST: `BASE URL`
* DELETE: `/{groupId}`

#### For artists content:
* BASE URL: `http://localhost:3000/api/fansite/kpop/artist`
* GET ALL: `BASE URL`
* GET w/ ID: `/{artistId}`
* POST: `BASE URL`
* DELETE: `/{artistId}`

## Database Design:
* Groups
  * Can contain 0 to many artists
* Artists
  * Can be a part of only 1 group