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
            nextPoster: function (movie) {
                  if (movie.posters && movie.posters.length > 1) {
                        movie.currentPosterIndex =
                              (movie.currentPosterIndex + 1) % movie.posters.length;
                  }
            },

            // Go to previous poster for a movie
            previousPoster: function (movie) {
                  if (movie.posters && movie.posters.length > 1) {
                        movie.currentPosterIndex =
                              (movie.currentPosterIndex - 1 + movie.posters.length) % movie.posters.length;
                  }
            },

            // Return text like "Poster 2 of 3"
            posterInfo: function (movie) {
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
            },

            getMonthText: function (dateArray) {
                  const monthNames = [
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                  ];
                  let monthNumber = monthNames.indexOf(dateArray[0]) + 1;
                  monthNames[monthNumber - 1] || "Unknown";
                  let monthIndex = dateArray[1] - 1;
                  let month = monthNames[monthIndex]
                  let date = `${month}, ${dateArray[2]}, ${dateArray[1]}`
                  return date;
            },
            timeText: function (minutes) {
                  let hours = Math.floor(minutes / 60);
                  let remainingMinutes = minutes % 60;
                  let hoursMinutes = `${hours}h ${remainingMinutes}m`;
                  return hoursMinutes;
            },
      }
});

vue_app.mount("#vue_app");
