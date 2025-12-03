const vue_app = Vue.createApp({

      created() {
            fetch('movies.json')
                  .then(response => response.json())
                  .then(json => {
                        this.movies = json
                  })
      },

      data() {
            return {
                  movies: [],

                  // Step 3 Variables
                  title: "IMDB + YourName's Top 8 Movies",
                  owner: "YourName",
                  github: "https://github.com/YourRepoHere"
            }
      },

      methods: {

            // Step 7 – Convert date array to text
            getMonthText(dateArray) {
                  const [year, month, day] = dateArray;
                  let monthName = "";

                  switch (month) {
                        case 1: monthName = "January"; break;
                        case 2: monthName = "February"; break;
                        case 3: monthName = "March"; break;
                        case 4: monthName = "April"; break;
                        case 5: monthName = "May"; break;
                        case 6: monthName = "June"; break;
                        case 7: monthName = "July"; break;
                        case 8: monthName = "August"; break;
                        case 9: monthName = "September"; break;
                        case 10: monthName = "October"; break;
                        case 11: monthName = "November"; break;
                        case 12: monthName = "December"; break;
                  }

                  return `${monthName} ${day}, ${year}`;
            },

            // Step 7 – Likes
            like(index) {
                  this.movies[index].likes++;
            },

            // Step 7 – Dislikes
            dislike(index) {
                  this.movies[index].dislikes++;
            },

            // Step 7 – Poster cycling
            posterClick(index) {
                  const movie = this.movies[index];
                  movie.posterindex++;

                  if (movie.posterindex >= movie.posters.length) {
                        movie.posterindex = 0;
                  }
            },

            // Step 7 – runtime conversion
            timeText(minutes) {
                  const h = Math.trunc(minutes / 60);
                  const m = minutes % 60;
                  return `${h}h ${m}m`;
            }
      }
})

vue_app.mount("#vue_app")
