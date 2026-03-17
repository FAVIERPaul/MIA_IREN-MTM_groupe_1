// Exemples de données Letterboxd pour votre propre application
// Copiez-collez ces exemples dans data.js pour ajouter vos propres données

// ========================================
// EXEMPLE 1: Ajouter un nouvel utilisateur
// ========================================

const newUser = {
  username: "mon_pseudo",
  age: 30,
  watchedFilms: [
    { 
      title: "Parasite", 
      year: 2019, 
      genres: ["Drama", "Thriller"], 
      rating: 5 
    },
    { 
      title: "Everything Everywhere All at Once", 
      year: 2022, 
      genres: ["Sci-Fi", "Comedy", "Drama"], 
      rating: 4.5 
    },
    { 
      title: "Barbie", 
      year: 2023, 
      genres: ["Comedy", "Romance"], 
      rating: 4 
    },
  ],
  watchlist: [
    "Oppenheimer",
    "Killers of the Flower Moon",
    "Past Lives"
  ]
};

// ========================================
// EXEMPLE 2: Listes des genres populaires
// ========================================

const genresList = [
  // Genres dramatiques
  "Drama", "Thriller", "Crime", "Mystery", "Horror",
  
  // Genres légers
  "Comedy", "Romance", "Animation", "Family",
  
  // Genres d'aventure
  "Action", "Adventure", "Fantasy", "Sci-Fi",
  
  // Genres spécialisés
  "Documentary", "Biography", "History", "War",
  
  // Genres musicaux/artistiques
  "Musical", "Music", "Dance", "Western"
];

// ========================================
// EXEMPLE 3: Films populaires avec genres
// ========================================

const filmExamples = [
  // Films dramatiques
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    rating: 5
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 4.5
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 5
  },
  
  // Films d'aventure/sci-fi
  {
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Thriller"],
    rating: 4.5
  },
  {
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    rating: 5
  },
  {
    title: "Dune",
    year: 2021,
    genres: ["Sci-Fi", "Adventure"],
    rating: 4
  },
  
  // Films de romance
  {
    title: "La La Land",
    year: 2016,
    genres: ["Musical", "Romance", "Drama"],
    rating: 4.5
  },
  {
    title: "Pride and Prejudice",
    year: 2005,
    genres: ["Drama", "Romance"],
    rating: 4
  },
  
  // Films comiques
  {
    title: "Knives Out",
    year: 2019,
    genres: ["Comedy", "Crime", "Drama"],
    rating: 4.5
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    genres: ["Adventure", "Comedy", "Crime"],
    rating: 4
  },
];

// ========================================
// EXEMPLE 4: Notes d'étoiles (ratings)
// ========================================

const ratingExamples = {
  5: "★★★★★ Excellent",
  4.5: "★★★★½ Très bon",
  4: "★★★★ Bon",
  3.5: "★★★½ Moyen",
  3: "★★★ Passable",
  2.5: "★★½ Mauvais",
  2: "★★ Très mauvais",
  1.5: "★½ Horrible",
  1: "★ Nul",
  0.5: "½ Regardable à peine",
  "-1.0": "Pas de note"
};

// ========================================
// EXEMPLE 5: Profils types d'utilisateurs
// ========================================

const userProfiles = {
  amieducinema: {
    username: "amieducinema",
    age: 28,
    preferredGenres: ["Drama", "Romance", "Musical"],
    watchedCount: 150,
    description: "Adore les films dramatiques et musicaux"
  },
  fandethrillers: {
    username: "fandethrillers",
    age: 35,
    preferredGenres: ["Thriller", "Crime", "Mystery"],
    watchedCount: 200,
    description: "Expert en films d'suspense"
  },
  gamer_movies: {
    username: "gamer_movies",
    age: 26,
    preferredGenres: ["Sci-Fi", "Action", "Fantasy"],
    watchedCount: 120,
    description: "Aime les films d'action et sci-fi"
  }
};

// ========================================
// EXEMPLE 6: Template complet d'utilisateur
// ========================================

const templateUser = {
  username: "template_user",
  age: 30,
  watchedFilms: [
    {
      title: "Titre du film",
      year: 2023,
      genres: ["Genre1", "Genre2", "Genre3"],
      rating: 4.5 // Entre 0.5 et 5
    }
    // Ajoutez plus de films...
  ],
  watchlist: [
    "Film 1 à voir",
    "Film 2 à voir",
    "Film 3 à voir"
  ]
};

// ========================================
// COMMENT UTILISER CES EXEMPLES
// ========================================

/*
1. Ouvrez le fichier data.js
2. Allez à la fin du fichier mockUsersData
3. Ajoutez une virgule après le dernier utilisateur
4. Copiez et adaptez l'EXEMPLE 1
5. Sauvegardez et rechargez la page

EXEMPLE COMPLET À COPIER:

export const mockUsersData = [
  {
    username: "alice_movies",
    age: 28,
    // ... données d'alice
  },
  // ... autres utilisateurs
  
  // VOTRE NOUVEL UTILISATEUR:
  {
    username: "votre_nom",
    age: 30,
    watchedFilms: [
      { 
        title: "Parasite", 
        year: 2019, 
        genres: ["Drama", "Thriller"], 
        rating: 5 
      },
      // Ajoutez plus de films...
    ],
    watchlist: ["Film A", "Film B"]
  }
];

*/

// ========================================
// STATISTIQUES QUI SERONT AFFICHÉES
// ========================================

/*
Après avoir ajouté vos données, l'app affichera automatiquement:

1. CARTES DE STATS:
   - Nombre total d'utilisateurs
   - Nombre total de films regardés
   - Note moyenne globale
   - Nombre de genres uniques

2. GRAPHIQUES:
   - Doughnut: Distribution des films par genre
   - Bar: Distribution des notes
   - Scatter: Âges des utilisateurs
   - Bar horizontal: Top 10 des genres

3. TABLEAUX:
   - Détails par genre avec pourcentages
   - Films communs en watchlist

*/

export { newUser, genresList, filmExamples, ratingExamples, userProfiles, templateUser };
