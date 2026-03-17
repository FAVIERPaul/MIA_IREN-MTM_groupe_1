# 📊 Letterboxd Statistics Dashboard

Une application de statistiques et d'analyse pour les utilisateurs Letterboxd. Visualisez les statistiques de vos films avec des graphiques interactifs !

## ✨ Fonctionnalités

### 📈 Graphiques et Statistiques
- **Distribution des genres** : Voir quels genres sont les plus regardés
- **Analyse des notes** : Comprendre les tendances de notation
- **Profils des utilisateurs** : Visualiser les âges et préférences
- **Films communs en watchlist** : Identifier les films que plusieurs personnes veulent regarder
- **Statistiques détaillées** : Obtenir des pourcentages et moyennes pour chaque genre

### 👥 Données Multi-utilisateurs
- Support de plusieurs comptes Letterboxd
- Comparaison des préférences entre utilisateurs
- Films en watchlist communs
- Statistiques agrégées

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 14+ installé

### 1. Installer les dépendances

```bash
cd letterboxd-stats
npm install
```

### 2. Démarrer le serveur

```bash
npm start
```

Ou en mode développement :

```bash
npm run dev
```

### 3. Ouvrir l'application

Ouvrez votre navigateur et allez à :
```
http://localhost:5000
```

## 📊 Graphiques Disponibles

1. **Films par Genre** (Doughnut) : Distribution des films par catégorie
2. **Distribution des Notes** (Bar) : Nombre de films par rating
3. **Âge des Utilisateurs** (Scatter) : Visualisation des âges
4. **Top Genres** (Bar Horizontal) : Les 10 genres les plus populaires
5. **Détails par Genre** (Tableau) : Pourcentages et notes moyennes
6. **Films en Watchlist Communs** (Tableau) : Quels films intéressent plusieurs personnes

## 📁 Structure du Projet

```
letterboxd-stats/
├── server.js          # Serveur Express et HTML
├── data.js            # Données simulées et fonctions de calcul
├── package.json       # Dépendances
└── README.md          # Ce fichier
```

## 🔧 API Endpoints

- `GET /api/stats` : Statistiques complètes
- `GET /api/genres` : Statistiques par genre
- `GET /api/ratings` : Statistiques des notes
- `GET /api/ages` : Données des âges
- `GET /api/users` : Liste des utilisateurs
- `GET /api/common-watchlist` : Films communs en watchlist
- `GET /api/health` : Vérifier l'état du serveur

## 📝 Format des Données

### Objet Utilisateur

```javascript
{
  username: "alice_movies",
  age: 28,
  watchedFilms: [
    { 
      title: "Inception", 
      year: 2010, 
      genres: ["Sci-Fi", "Thriller"], 
      rating: 4.5 
    }
  ],
  watchlist: ["Killers of the Flower Moon", "Oppenheimer"]
}
```

## 🎨 Personnalisation

### Ajouter Vos Données

Modifiez le tableau `mockUsersData` dans `data.js` pour ajouter vos propres données Letterboxd :

```javascript
{
  username: "votre_nom",
  age: 30,
  watchedFilms: [
    { title: "Film", year: 2023, genres: ["Genre1", "Genre2"], rating: 4 }
  ],
  watchlist: ["Film1", "Film2"]
}
```

### Modifier les Couleurs

Les couleurs sont définies dans `server.js` au début de la section `<script>` :

```javascript
const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  // ...
};
```

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur :
- 📱 Téléphones
- 📱 Tablettes
- 💻 Ordinateurs

## 🔮 Améliorations Futures

- [ ] Intégration avec l'API Letterboxd officielle
- [ ] Algorithme de recommandation de films
- [ ] Export des données (CSV, PDF)
- [ ] Filtres et recherche avancée
- [ ] Synchronisation en temps réel
- [ ] Base de données persistante
- [ ] Interface d'import des données Letterboxd

## 📄 Licence

ISC

## 👨‍💻 Auteur

Créé pour analyser et visualiser les statistiques Letterboxd

---

🎬 **Profitez bien de votre tableau de bord !**
