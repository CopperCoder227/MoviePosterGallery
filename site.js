const vue_app = Vue.createApp({
      created() {
            fetch("movies.json")
                  .then(response => response.json())
                  .then(json => {

                        // Add missing properties safely
                        json.forEach(movie => {
                              movie.currentPosterIndex = 0;
                              movie.likes = movie.likes || 0;
                              movie.dislikes = movie.dislikes || 0;
                        });

                        this.movies = json;
                  });
      },

      data() {
            return {
                  movies: [],
                  title: "IMDB + Cooper's Top Movies",
                  owner: "Cooper",
                  github: "https://coppercoder227.github.io/MoviePosterGallery/"
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
            // ⭐ Computes the correct index in this.movies
            getGlobalIndex(groupIndex, itemIndex) {
                  let index = 0;

                  for (let g = 0; g < groupIndex; g++) {
                        index += this.groupedMovies[g].length;
                  }

                  return index + itemIndex;
            },

            posterClick(i) {
                  const movie = this.movies[i];
                  movie.currentPosterIndex++;

                  if (movie.currentPosterIndex >= movie.posters.length) {
                        movie.currentPosterIndex = 0;
                  }
            },

            likeMovie(i) {
                  this.movies[i].likes++;
            },

            dislikeMovie(i) {
                  this.movies[i].dislikes++;
            },

            getMonthText(dateArray) {
                  const monthNames = [
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                  ];

                  return `${monthNames[dateArray[1]]} ${dateArray[2]}, ${dateArray[0]}`;
            },

            timeText(minutes) {
                  let hours = Math.floor(minutes / 60);
                  let remainingMinutes = minutes % 60;
                  return `${hours}h ${remainingMinutes}m`;
            }
      }
});

vue_app.mount("#vue_app");
