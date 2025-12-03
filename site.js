/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = Vue.createApp({
      created() {
            fetch("movies.json")
                  .then(response => response.json())
                  .then(json => this.movies = json);
      },
      data() {
            return {
                  movies: [],
                  title: "IMDB + Cooper's Top StarWars Movies",
                  owner: "Cooper",
                  github: "https://nvlahogiannis12.github.io/NJIT-3_StarterFiles/",
            };
      },
      computed: {
            groupedMovies() {
                  return [
                        this.movies.slice(0, 2),
                        this.movies.slice(2, 4),
                        this.movies.slice(4, 6),
                        this.movies.slice(6, 12)
                  ];
            }
      },
      methods: {}
});

vue_app.mount("#vue_app");
