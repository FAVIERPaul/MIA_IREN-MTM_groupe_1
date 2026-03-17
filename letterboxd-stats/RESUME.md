# 🎬 LETTERBOXD STATS - RÉSUMÉ VISUEL

## 🎯 C'EST PRÊT! Lancez avec:

```bash
npm start
```

Puis ouvrez: **http://localhost:5001**

---

## 📊 Ce que Vous Verrez

```
┌──────────────────────────────────────────────────────────────┐
│                   📊 Statistiques Générales                  │
├───────────────┬───────────────┬──────────────┬───────────────┤
│ 👥 Utilisateurs│ 🎬 Films      │ ⭐ Note Moy. │ 🎭 Genres     │
│      5        │      36       │    4.43     │      11       │
└───────────────┴───────────────┴──────────────┴───────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    📈 GRAPHIQUES INTERACTIFS                 │
├─────────────────────────┬─────────────────────────────────────┤
│  Films par Genre        │  Distribution des Notes             │
│  (Pie Chart)            │  (Bar Chart)                        │
│                         │                                     │
│   Drama 80.6%          │  4⭐      4.5⭐      5⭐             │
│   Thriller 36.1%        │  ▄▄▄▄▄   ▄▄▄▄▄   ▄▄▄▄▄             │
│   Crime 27.8%           │   14      13       9               │
│   ...                   │                                     │
└─────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────┬─────────────────────────────────────┐
│  Âges des Utilisateurs  │  Top 10 Genres                      │
│  (Scatter Plot)         │  (Horizontal Bar)                   │
│                         │                                     │
│    • 28  ●              │  Drama       ████████████████       │
│  • 35      ●            │  Thriller    ██████████             │
│   ● 26     ● 42         │  Crime       ███████                │
│      ● 31                │  Comedy      ██████                 │
│                         │  ...                                │
└─────────────────────────┴─────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                 📌 DÉTAILS PAR GENRE                         │
├──────────────────────────────────────────────────────────────┤
│ Drama          ███████████████████ 80.6%    Avg: 4.47⭐      │
│ Thriller       ████████████ 36.1%           Avg: 4.35⭐      │
│ Crime          ██████████ 27.8%             Avg: 4.50⭐      │
│ Comedy         ███████ 22.2%                Avg: 4.50⭐      │
│ ...                                                           │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│            ⭐ FILMS COMMUNS EN WATCHLIST ⭐                  │
├──────────────────────────────────────────────────────────────┤
│ Killers of the Flower Moon      5 utilisateurs (100%)        │
│  └─ Alice, Bob, Clara, David, Emma                           │
│                                                              │
│ Past Lives                      3 utilisateurs (60%)         │
│  └─ Clara, David, Emma                                       │
│                                                              │
│ The Brutalist                   2 utilisateurs (40%)         │
│  └─ Alice, Bob                                               │
│                                                              │
│ ...                                                          │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎯 Cas d'Usage

### 1️⃣ Vous seul(e), cherchez une recommandation
→ Sélectionnez votre mood, vos genres préférés
→ L'app vous recommande un film que vous n'avez pas encore vu

### 2️⃣ Vous êtes en groupe (2-5 personnes)
→ Fournissez vos comptes Letterboxd
→ L'app trouve les films que **tout le monde** veut voir
→ Choisissez une plateforme de streaming commune
→ Recommandation parfaite pour la soirée! 🍿

### 3️⃣ Vous analysez les tendances
→ Voyez quel genre domine dans votre groupe
→ Découvrez les films les plus appréciés ensemble
→ Comprendre les différences de goût

---

## 📋 Données Incluses

Voici ce qu'on mesure pour chaque film:

```javascript
{
  title: "Parasite",           // Titre
  year: 2019,                  // Année
  genres: ["Drama", "Thriller"],// Genres (1-3 tags)
  rating: 4.5                  // Note (0.5 à 5 étoiles)
}
```

Et pour chaque utilisateur:

```javascript
{
  username: "alice_movies",    // Pseudo Letterboxd
  age: 28,                     // Âge (pour le profiling)
  watchedFilms: [...],         // Films regardés
  watchlist: [...]             // Films à regarder
}
```

---

## 🔧 Comment Modifier Vos Données

### Ajouter un nouvel utilisateur

📝 Ouvrez: `data.js`

Cherchez: `export const mockUsersData = [`

Allez à la fin du tableau, avant la dernière `]`

Ajoutez (avec une virgule avant):
```javascript
,{
  username: "votre_pseudo",
  age: 30,
  watchedFilms: [
    { title: "Film 1", year: 2023, genres: ["Genre1"], rating: 4.5 },
    { title: "Film 2", year: 2023, genres: ["Genre1", "Genre2"], rating: 4 }
  ],
  watchlist: ["Film À Voir", "Autre Film"]
}
```

Sauvegardez → Rechargez la page → ✨ Vos données apparaissent!

---

## 🔌 API - Récupérer les Données

```bash
# Récupérer TOUT (statistiques complètes)
curl http://localhost:5001/api/stats

# Récupérer par genre
curl http://localhost:5001/api/genres

# Récupérer par rating
curl http://localhost:5001/api/ratings

# Récupérer les âges
curl http://localhost:5001/api/ages

# Films en watchlist commune
curl http://localhost:5001/api/common-watchlist

# Les utilisateurs bruts
curl http://localhost:5001/api/users
```

---

## 📂 Les Fichiers Importants

| Fichier | Fonction | À Modifier Si... |
|---------|----------|------------------|
| **server.js** | Serveur + HTML | Vous voulez changer l'interface |
| **data.js** | ⭐ Vos données | Vous voulez ajouter des films/users |
| **package.json** | Dépendances | Vous ajoutez une librairie |
| **README.md** | 📖 Documentation | Vous lisez pour comprendre |
| **INDEX.md** | Map complète | Vous cherchez un fichier |

---

## ✅ Technologies Utilisées

- **Backend:** Node.js + Express.js
- **Frontend:** HTML5 + CSS3 + JavaScript Vanilla
- **Graphiques:** Chart.js 4.4 (100% open-source)
- **Responsive:** Mobile, Tablet, Desktop
- **Port:** 5001 (customisable)

---

## 🚀 Commandes Utiles

```bash
# Démarrer l'app
npm start

# Arrêter (Ctrl+C dans le terminal)

# Réinstaller les dépendances
npm install

# Vérifier si le serveur répond
curl http://localhost:5001/api/health

# Voir les logs
tail -f logs/server.log  # (si créé)
```

---

## 🎨 Personnalisation Rapide

### Changer les couleurs

Dans `server.js`, ligne ~200:
```javascript
const colors = {
  primary: '#667eea',      // 🟣 Violet
  secondary: '#764ba2',    // 🟣 Violet foncé
  tertiary: '#f093fb',     // 🟣 Rose
  quaternary: '#4facfe',   // 🟦 Bleu
  gradient: ['#667eea', '#764ba2', ...],
};
```

### Changer le titre

Dans `server.js`, cherchez `<title>`, modifiez:
```html
<title>Mes Films - Statistiques</title>
```

---

## 📊 Exemple de Résultat

Quand vous ajoutez 5 utilisateurs avec 36 films:

- **Total:** 36 films matchés
- **Genres dominants:** Drama (80.6%), Thriller (36.1%)
- **Note moyenne:** 4.43/5 ⭐
- **Films universels:** "Killers of the Flower Moon" (dans la watchlist des 5)
- **Meilleur filmage en groupe:** "Parasite" (admiré par 4/5 utilisateurs)

---

## 🎯 Roadmap Future

- [ ] Algorithme d'IA pour recommander automatiquement
- [ ] Intégration Letterboxd (scraping RSS)
- [ ] Sélection du "mood" (dramatique, amusant, peur, etc.)
- [ ] Filtrer par plateforme (Netflix, Prime, Disney+, etc.)
- [ ] Historique des films regardés ensemble
- [ ] Base de données persistante

---

## 🎬 Prêt?

**Étape 1:** Lancez l'app
```bash
npm start
```

**Étape 2:** Ouvrez votre navigateur
```
http://localhost:5001
```

**Étape 3:** Explorez les graphiques! 📊

---

**Bon film! 🍿🎬**
