const vue_app = Vue.createApp({
      created() {
            fetch("movies.json")
                  .then(response => response.json())
                  .then(json => {
                        // Add a currentPosterIndex for each movie (defaults to 0)
                        json.forEach(movie => {
                              movie.currentPosterIndex = 0;
                        });

                        this.movies = json;
                  });
      },

      data() {
            return {
                  movies: [],
                  title: "IMDB + Cooper's Top Movies",
                  owner: "Cooper",
                  github: "https://coppercoder227.github.io/MoviePosterGallery/",
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

      methods: {
            // Go to next poster for a movie
            nextPoster(movie) {
                  if (movie.posters && movie.posters.length > 1) {
                        movie.currentPosterIndex =
                              (movie.currentPosterIndex + 1) % movie.posters.length;
                  }
            },

            // Go to previous poster for a movie
            previousPoster(movie) {
                  if (movie.posters && movie.posters.length > 1) {
                        movie.currentPosterIndex =
                              (movie.currentPosterIndex - 1 + movie.posters.length) % movie.posters.length;
                  }
            },

            // Return text like "Poster 2 of 3"
            posterInfo(movie) {
                  if (!movie.posters || movie.posters.length <= 1) {
                        return ""; // No need to show anything if only 1 poster
                  }

                  return `Poster ${movie.currentPosterIndex + 1} of ${movie.posters.length}`;
            },
            likeMovie: function (i) {
                  this.movies[i].likes += 1;
            },

            dislikeMovie: function (i) {
                  this.movies[i].dislikes += 1;
            }
      }
});

vue_app.mount("#vue_app");
