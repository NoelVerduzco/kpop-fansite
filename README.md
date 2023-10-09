
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
* `npm install react-player`

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

## Stretch Goals
* Search: Of this list, this item is the most "necessary" for our MVP. Results needs more information rendered. There are two options I considered:
  * Split results into two results tables, side by side, one for groups that match query and one for idols that match query, like spotify, or
  * Add a column that's called "description" or something... not sure description is the correct word, and under that would be the label of "group" or "idol" to indicate what type of result it is.
  * Correct the split table into two tables
* IdolsView:
  * "Group" needs to find the group name and list it in the table.
  * "Position" is too long on some of them, need to handle either by
    * limiting the number of characters revealed concat with "..." indicating there's more.
    * eliminating some of the columns and saving the additional information for the IdolView page
* Design: I like the bootswatch theme, colors etc. But I feel like there's too much unused real estate on the pages, design-wise. This isn't 100% necessary, but would look and feel a lot better.
  * Clicking Groups on the menu bar, instead of going to a table, it goes to a container-grid full of group-cards with only the group name and image on it, then
  * Clicking the group-card navigates to ViewGroup. which would be a full page view rather than a card on the page. The Image associated with the group could  cover full screen but be slightly transparent as a full screen background.
  * ViewIdol could be handled similarly.
* Contacts: I need to change the approach I took with this:
  * Transform/transition animation won't achieve what I hoped, the way that I applied it.
  * Contact.js would need to use state for "flipped" and "unflipped", etc.. Then in the .css, card-back needs display: none when unflipped, and card-front needs display: none when state = flipped, etc.
  * If I can't do it in the time, remove the animation and display simple static cards. I can put the images into the card "fronts".
* Favorites
  * a user can click an icon to add to favorites
  * a user can view their favorites in a ViewFavorites page
  * would need login database and handling