
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

![][detail]




[d1]: ./public/profile.png
[d2]: ./public/specificTV.jpg
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png