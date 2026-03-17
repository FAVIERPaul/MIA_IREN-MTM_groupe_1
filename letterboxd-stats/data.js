// Données simulées de plusieurs utilisateurs Letterboxd
export const mockUsersData = [
  {
    username: "alice_movies",
    age: 28,
    watchedFilms: [
      { title: "Inception", year: 2010, genres: ["Sci-Fi", "Thriller"], rating: 4.5 },
      { title: "Interstellar", year: 2014, genres: ["Sci-Fi", "Drama"], rating: 5 },
      { title: "Parasite", year: 2019, genres: ["Drama", "Thriller"], rating: 4 },
      { title: "La La Land", year: 2016, genres: ["Musical", "Romance", "Drama"], rating: 4 },
      { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"], rating: 5 },
      { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"], rating: 4.5 },
      { title: "Dune", year: 2021, genres: ["Sci-Fi", "Adventure"], rating: 4 },
      { title: "Whiplash", year: 2014, genres: ["Drama"], rating: 4.5 },
    ],
    watchlist: [
      "Killers of the Flower Moon",
      "Oppenheimer",
      "The Brutalist",
      "Nosferatu",
      "Dune: Part Two",
    ],
  },
  {
    username: "bob_cinema",
    age: 35,
    watchedFilms: [
      { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"], rating: 5 },
      { title: "Goodfellas", year: 1990, genres: ["Crime", "Drama"], rating: 4.5 },
      { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"], rating: 5 },
      { title: "Parasite", year: 2019, genres: ["Drama", "Thriller"], rating: 4.5 },
      { title: "Joker", year: 2019, genres: ["Crime", "Drama", "Thriller"], rating: 4 },
      { title: "Gladiator", year: 2000, genres: ["Action", "Adventure", "Drama"], rating: 4 },
      { title: "Oppenheimer", year: 2023, genres: ["Biography", "Drama"], rating: 4 },
    ],
    watchlist: [
      "Killers of the Flower Moon",
      "Napoleon",
      "Barbie",
      "The Brutalist",
      "American Psycho",
    ],
  },
  {
    username: "clara_films",
    age: 26,
    watchedFilms: [
      { title: "La La Land", year: 2016, genres: ["Musical", "Romance", "Drama"], rating: 5 },
      { title: "Crazy Rich Asians", year: 2018, genres: ["Comedy", "Romance"], rating: 4 },
      { title: "Parasite", year: 2019, genres: ["Drama", "Thriller"], rating: 5 },
      { title: "Everything Everywhere All at Once", year: 2022, genres: ["Sci-Fi", "Comedy", "Drama"], rating: 5 },
      { title: "Barbie", year: 2023, genres: ["Comedy", "Romance"], rating: 4.5 },
      { title: "Little Women", year: 2019, genres: ["Drama", "Romance"], rating: 4 },
      { title: "Pride and Prejudice", year: 2005, genres: ["Drama", "Romance"], rating: 4.5 },
    ],
    watchlist: [
      "Killers of the Flower Moon",
      "The Iron Claw",
      "Dune: Part Two",
      "Saltburn",
      "Past Lives",
    ],
  },
  {
    username: "david_thrillers",
    age: 42,
    watchedFilms: [
      { title: "Parasite", year: 2019, genres: ["Drama", "Thriller"], rating: 4.5 },
      { title: "Se7en", year: 1995, genres: ["Crime", "Drama", "Thriller"], rating: 4.5 },
      { title: "Zodiac", year: 2007, genres: ["Crime", "Drama", "Thriller"], rating: 4 },
      { title: "Inception", year: 2010, genres: ["Sci-Fi", "Thriller"], rating: 4.5 },
      { title: "The Silence of the Lambs", year: 1991, genres: ["Crime", "Drama", "Thriller"], rating: 5 },
      { title: "Shutter Island", year: 2010, genres: ["Drama", "Mystery", "Thriller"], rating: 4 },
      { title: "Gone Girl", year: 2014, genres: ["Drama", "Mystery", "Thriller"], rating: 4 },
    ],
    watchlist: [
      "Killers of the Flower Moon",
      "Anatomy of a Fall",
      "Past Lives",
      "American Psycho",
      "Heretic",
    ],
  },
  {
    username: "emma_comedy",
    age: 31,
    watchedFilms: [
      { title: "Everything Everywhere All at Once", year: 2022, genres: ["Sci-Fi", "Comedy", "Drama"], rating: 5 },
      { title: "Spotlight", year: 2015, genres: ["Drama"], rating: 4 },
      { title: "Barbie", year: 2023, genres: ["Comedy", "Romance"], rating: 4.5 },
      { title: "Knives Out", year: 2019, genres: ["Comedy", "Crime", "Drama"], rating: 4.5 },
      { title: "The Grand Budapest Hotel", year: 2014, genres: ["Adventure", "Comedy", "Crime"], rating: 4 },
      { title: "Jojo Rabbit", year: 2019, genres: ["Comedy", "Drama"], rating: 4.5 },
      { title: "Parasite", year: 2019, genres: ["Drama", "Thriller"], rating: 4 },
    ],
    watchlist: [
      "Killers of the Flower Moon",
      "Past Lives",
      "Bottoms",
      "Poor Things",
      "The Iron Claw",
    ],
  },
];

// Fonction pour calculer les statistiques
export function calculateStatistics(usersData) {
  const genreStats = {};
  const ratingStats = {};
  let totalFilms = 0;
  let totalRating = 0;

  usersData.forEach((user) => {
    user.watchedFilms.forEach((film) => {
      totalFilms++;
      totalRating += film.rating;

      film.genres.forEach((genre) => {
        if (!genreStats[genre]) {
          genreStats[genre] = { count: 0, totalRating: 0 };
        }
        genreStats[genre].count++;
        genreStats[genre].totalRating += film.rating;
      });

      const ratingBucket = Math.round(film.rating * 2) / 2;
      if (!ratingStats[ratingBucket]) {
        ratingStats[ratingBucket] = 0;
      }
      ratingStats[ratingBucket]++;
    });
  });

  // Convertir en tableaux triés
  const genreArray = Object.entries(genreStats)
    .map(([genre, data]) => ({
      name: genre,
      count: data.count,
      avgRating: (data.totalRating / data.count).toFixed(2),
      percentage: ((data.count / totalFilms) * 100).toFixed(1),
    }))
    .sort((a, b) => b.count - a.count);

  const ratingArray = Object.entries(ratingStats)
    .map(([rating, count]) => ({
      rating: parseFloat(rating),
      count: count,
      percentage: ((count / totalFilms) * 100).toFixed(1),
    }))
    .sort((a, b) => a.rating - b.rating);

  return {
    totalUsers: usersData.length,
    totalFilms,
    averageRating: (totalRating / totalFilms).toFixed(2),
    genres: genreArray,
    ratings: ratingArray,
    userAges: usersData.map((u) => ({ username: u.username, age: u.age })),
    watchlists: usersData.map((u) => ({ username: u.username, films: u.watchlist })),
  };
}

// Fonction pour trouver les films communs en watchlist
export function getCommonWatchlist(usersData) {
  const watchlistCounts = {};

  usersData.forEach((user) => {
    user.watchlist.forEach((film) => {
      if (!watchlistCounts[film]) {
        watchlistCounts[film] = { count: 0, users: [] };
      }
      watchlistCounts[film].count++;
      watchlistCounts[film].users.push(user.username);
    });
  });

  return Object.entries(watchlistCounts)
    .map(([film, data]) => ({
      film,
      count: data.count,
      users: data.users,
      percentage: ((data.count / usersData.length) * 100).toFixed(1),
    }))
    .sort((a, b) => b.count - a.count);
}
