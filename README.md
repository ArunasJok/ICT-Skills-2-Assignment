
# ICT Skills 2 Assignment.

Name: Arunas Jokubynas

## Overview.

This is an extension of ICT Skills 2 lab "Movies fan app". 

Newly introduced features: 
+ New "TV Series" list
+ New "Actors" list
+ New "Actor bio" detail
+ New "TV Series info" detail
+ New "Similar Movies" list

## Setup requirements.

As we are using React v17, in the app's package.json file, replace the dependencies section with the following:

  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "5.0.0"
  },
Run [$ npm install] from the main directory to install needed JS modules.

Movies Fan app will communicate with The TMDB API (Note: We will use version 3 of the API). An API Key authenticates all requests to the API. Please go to https://www.themoviedb.org/signup and create and account in order to get a key.  In the project base folder, open the .env file and set REACTAPPTMDB_KEY to your new key value.

REACT_APP_TMDB_KEY=.... your API key value ...
FAST_REFRESH=false

To start the app type:
$ npm start

## App Design.
Standard tile design followed from labs.

### Routing/Navigation.

New introduced routes:

e.g.
+ /similars/:id - detailed information on a similar movie based on a selected movie.
+ /persons - lists of most popular actors at the moment.
+ /persons/:id - detailed information on a specific actor.
+ /series - list of most popular TV shows at the moment.
+ /tvs/:id - detailed information on a specific TV show.


### Views/Pages.


>The view below lists most popular TV shows. 

![][d1]

>The view below shows detailed information on a specific TV show.

![][d2]

>The view below lists most popular actors.

![][d3]

>The view below shows detailed information on a specific actor.

![][d4]

>The view below show the option to look for similar movies.

![][d5]

>The view below lists similar movies to the movie on the left side of the screen.

![][d6]

>The view below shows that pressing "See Movie" gets you to the detailed movie description.

![][d7]

## Caching.


+ Discover series

![][d8]

+ Discover popular actors

![][d9]

+ Discover similar movies

![][d10]



[d1]: ./public/listTV.PNG
[d2]: ./public/specificTV.PNG
[d3]: ./public/actorList.PNG
[d4]: ./public/actorDetail.PNG
[d5]: ./public/similar1.PNG
[d6]: ./public/similar2.PNG
[d7]: ./public/similar3.PNG
[d8]: ./public/discoverSeries.PNG
[d9]: ./public/discoverPopActors.PNG
[d10]: ./public/similarMovies.PNG
