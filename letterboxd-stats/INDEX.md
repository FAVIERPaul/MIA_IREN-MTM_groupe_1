# 📁 Index du Projet - Letterboxd Stats

## 🚀 Pour Commencer (2 minutes)

| | |
|---|---|
| **Lancer l'app** | `npm start` → http://localhost:5001 |
| **Ajouter vos données** | Modifier `data.js` → Recharger la page |
| **Voir les graphiques** | Ouvrez http://localhost:5001 dans votre navigateur |

---

## 📂 Structure des Fichiers

### 🟢 Fichiers Essentiels

#### `server.js` - Le Cœur de l'Application
- **Qu'est-ce que c'est ?** Le serveur Express.js
- **Ce qu'il fait :**
  - 🌐 Crée un serveur web sur le port 5001
  - 📊 Sert le HTML avec les graphiques
  - 🔌 Expose l'API REST
  - 📈 Rend le HTML avec les graphiques interactifs
- **À modifier si :** Vous voulez changer le port ou ajouter une nouvelle route API
- **Exemple :** 
  ```bash
  GET /api/stats → Retourne les statistiques complètes
  GET /api/genres → Retourne les stats par genre
  ```

#### `data.js` - Vos Données
- **Qu'est-ce que c'est ?** Les données des utilisateurs Letterboxd
- **Ce qu'il contient :**
  - `mockUsersData[]` : Array avec 5 utilisateurs
  - `calculateStatistics()` : Calcule les stats
  - `getCommonWatchlist()` : Trouve les films communs
- **À modifier si :** Vous voulez ajouter/modifier des utilisateurs et films
- **Format :**
  ```javascript
  {
    username: "alice",
    age: 28,
    watchedFilms: [
      { title: "Film", year: 2020, genres: ["Drama"], rating: 4.5 }
    ],
    watchlist: ["Film à voir"]
  }
  ```

#### `package.json` - Configuration du Projet
- **Qu'est-ce que c'est ?** Les dépendances et scripts npm
- **À modifier si :** Vous ajoutez une nouvelle librairie
- **Scripts disponibles :**
  - `npm start` → Lance l'app en production
  - `npm run dev` → Lance en développement

### 📘 Documentation

#### `README.md` - Guide Complet (À LIRE EN PREMIER!)
- Fonctionnalités de l'app
- Instructions d'installation
- Endpoints de l'API
- Format des données
- Personnalisation des couleurs

#### `QUICKSTART.md` - Guide Rapide (LIRE 2EME)
- Comment lancer l'app (30 secondes)
- Où accéder aux graphiques
- Comment ajouter vos données
- Commandes utiles
- Troubleshooting

#### `EXAMPLES.js` - Modèles et Exemples
- Exemple complet d'utilisateur
- Listes de genres populaires
- Films d'exemple avec genres
- Template à copier-coller
- Explications détaillées

#### `ROADMAP.md` - Avenir du Projet
- Vision et phases de développement
- Ce qui a été fait (Phase 1)
- Ce qui arrive (Phase 2-3)
- Algorithme de recommandation prévu
- Architecture future

### 🔧 Fichiers Techniques

#### `.gitignore` - Ce qui n'est pas suivi par Git
```
node_modules/    → Les dépendances npm
*.log            → Les fichiers log
.DS_Store        → Fichiers système Mac
```

#### `package-lock.json` - Lock file des dépendances
- Auto-généré par npm
- À ne pas modifier à la main

#### `start.sh` - Script de lancement Mac/Linux
```bash
chmod +x start.sh
./start.sh
```

---

## 🎯 Cas d'Usage Communs

### ✏️ Cas 1: Ajouter un nouvel utilisateur

1. Ouvrez `data.js`
2. Allez à la fin du tableau `mockUsersData`
3. Ajoutez une virgule après le dernier utilisateur
4. Copiez le template depuis `EXAMPLES.js`
5. Modifiez avec vos données
6. Sauvegardez
7. Rechargez http://localhost:5001

**Temps:** 2 minutes

### 📊 Cas 2: Modifier les graphiques

1. Ouvrez `server.js`
2. Cherchez `<canvas id="genreChart"></canvas>`
3. Modifiez les options du graphique Chart.js
4. Rechargez la page

**Temps:** 5 minutes

### 🎨 Cas 3: Changer les couleurs

Dans `server.js`, cherchez:
```javascript
const colors = {
  primary: '#667eea',      ← Changez ces hexa colors
  secondary: '#764ba2',
  // ...
};
```

**Temps:** 1 minute

### 🔌 Cas 4: Ajouter une nouvelle API

Dans `server.js`:
```javascript
app.get('/api/my-stat', (req, res) => {
  const myStat = calculateMything(mockUsersData);
  res.json(myStat);
});
```

**Temps:** 10 minutes

---

## 🔗 Flux de Données

```
Client (http://localhost:5001)
           ↓
    [index.html + JS]
           ↓
    [Graphiques Chart.js]
           ↓
    Appels API (fetch)
           ↓
server.js [routes API]
           ↓
    data.js [fonctions de calcul]
           ↓
Retour JSON → Affichage graphiques
```

---

## 📊 Les 4 Graphiques Expliqués

### 1️⃣ Films par Genre (Doughnut)
- **Montre :** Distribution des films par catégorie
- **Utile pour :** Voir les genres les plus populaires
- **Code :** `createGenreChart(stats.genres)`

### 2️⃣ Distribution des Notes (Bar)
- **Montre :** Combien de films ont 4⭐, 4.5⭐, 5⭐
- **Utile pour :** Comprendre les tendances de notation
- **Code :** `createRatingChart(stats.ratings)`

### 3️⃣ Âges des Utilisateurs (Scatter)
- **Montre :** L'âge de chaque utilisateur
- **Utile pour :** Voir la diversité d'âge du groupe
- **Code :** `createAgeChart(stats.userAges)`

### 4️⃣ Top Genres (Bar Horizontal)
- **Montre :** Les 10 genres les plus populaires
- **Utile pour :** Identifier les tendances principales
- **Code :** `createTopGenresChart(stats.genres.slice(0, 10))`

---

## 🔌 Endpoints API

| Endpoint | Description |
|----------|-------------|
| `GET /` | Page HTML principale |
| `GET /api/stats` | **Utilisé** - Toutes les stats |
| `GET /api/genres` | **Utilisé** - Stats par genre |
| `GET /api/ratings` | **Utilisé** - Distribution des notes |
| `GET /api/ages` | **Utilisé** - Données des âges |
| `GET /api/users` | Données brutes des utilisateurs |
| `GET /api/common-watchlist` | **Utilisé** - Films en watchlist commune |

### Exemple d'appel API:
```bash
curl http://localhost:5001/api/genres | jq .
```

---

## 🐛 Troubleshooting

### Q: "npm: command not found"
**A:** Installez Node.js
```bash
conda install -c conda-forge nodejs -y
```

### Q: "Port 5001 already in use"
**A:** Modifiez dans `server.js`
```javascript
const PORT = 5002; // ou 5003, 5004...
```

### Q: Les données ne changent pas
**A:** Modifiez `data.js` puis **rechargez la page** (Cmd+R)

### Q: Les graphiques ne s'affichent pas
**A:** Ouvrez la console (F12) et cherchez les erreurs

---

## 🚀 Prochaines Étapes

1. ✅ **Lancez l'app** : `npm start`
2. ✅ **Visitez** : http://localhost:5001
3. ✅ **Explorez les graphiques**
4. ✅ **Lisez README.md** pour comprendre les données
5. ✅ **Modifiez data.js** pour ajouter vos données
6. ✅ **Consultez ROADMAP.md** pour l'avenir du projet

---

## 📞 Besoin d'Aide?

1. **Pour lancer l'app** → QUICKSTART.md
2. **Pour comprendre le code** → README.md ou ce fichier
3. **Pour ajouter des données** → EXAMPLES.js
4. **Pour les bugsQ** → Vérifiez les logs (terminal)
5. **Pour les nouvelles fonctionnalités** → ROADMAP.md

---

## ✨ Fichier par Fichier - Checklist

- [x] `server.js` - Serveur Express ✅
- [x] `data.js` - Données et calculs ✅
- [x] `package.json` - Dépendances ✅
- [x] `README.md` - Documentation complète ✅
- [x] `QUICKSTART.md` - Guide rapide ✅
- [x] `EXAMPLES.js` - Modèles ✅
- [x] `ROADMAP.md` - Avenir du projet ✅
- [x] `.gitignore` - Fichiers ignorés ✅
- [x] `start.sh` - Script de lancement ✅
- [x] `INDEX.md` - Ce fichier ✅

---

**🎬 Tout est prêt! Lancez l'app avec `npm start` et visitez http://localhost:5001!**
