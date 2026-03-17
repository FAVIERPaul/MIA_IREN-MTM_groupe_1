# 🚀 Guide de Démarrage Letterboxd Stats

## ✅ L'app est prête!

Votre application Letterboxd Statistics Dashboard est maintenant **opérationnelle** 🎉

### 📊 Accéder à l'application

**URL** : http://localhost:5001

Ouvrez simplement cette adresse dans votre navigateur pour voir :

1. ✨ **Statistiques globales** : Nombre d'utilisateurs, de films, note moyenne
2. 📈 **4 graphiques interactifs** :
   - Films par genre (doughnut chart)
   - Distribution des notes (bar chart)
   - Âges des utilisateurs (scatter plot)
   - Top genres (horizontal bar chart)
3. 📌 **Détails par genre** : Pourcentages et notes moyennes
4. ⭐ **Films communs en watchlist** : Films que plusieurs utilisateurs veulent regarder

## 🔧 Commandes Utiles

### Démarrer l'app
```bash
cd letterboxd-stats
npm start
```

### Mode développement (auto-reload)
```bash
npm run dev
```

### Vérifier l'état du serveur
```bash
curl http://localhost:5001/api/health
```

## 📝 Ajouter Vos Propres Données

Ouvrez le fichier `letterboxd-stats/data.js` et modifiez le tableau `mockUsersData` :

```javascript
{
  username: "votre_nom",
  age: 25,
  watchedFilms: [
    { 
      title: "Le Film", 
      year: 2023, 
      genres: ["Drama", "Thriller"], 
      rating: 4.5 
    },
    // ... plus de films
  ],
  watchlist: [
    "Film A", 
    "Film B"
  ]
}
```

**Après modification**, rechargez simplement la page du navigateur pour voir les changements!

## 🔌 API Endpoints Disponibles

Vous pouvez interroger directement l'API :

| Endpoint | Description |
|----------|-------------|
| `GET /api/stats` | Toutes les statistiques |
| `GET /api/genres` | Stats par genre |
| `GET /api/ratings` | Distribution des notes |
| `GET /api/ages` | Données des âges |
| `GET /api/users` | Liste des utilisateurs |
| `GET /api/common-watchlist` | Films communs en watchlist |

### Exemple
```bash
curl http://localhost:5001/api/genres | jq
```

## 🎨 Technologie Utilisée

- **Backend** : Node.js + Express.js
- **Frontend** : HTML5 + CSS3 + JavaScript Vanilla
- **Graphiques** : Chart.js 4.4
- **Design** : Responsive (mobile, tablet, desktop)

## 📺 Données Incluses

L'app inclut 5 utilisateurs Letterboxd fictifs avec :
- ✅ 36 films regardés au total
- ✅ Distribution de genres variée
- ✅ Notes de 4 à 5 étoiles
- ✅ Watchlists personnalisées
- ✅ Films communs en watchlist

## 🚨 En Cas d'Erreur

**Port déjà utilisé?**
Modifiez le port dans `server.js` :
```javascript
const PORT = 5002; // ou un autre port libre
```

**npm ou Node.js introuvable?**
```bash
conda install -c conda-forge nodejs -y
npm install
```

## 🎯 Prochaines Étapes

L'app inclut tout ce qu'il faut pour :
1. ✅ Visualiser les statistiques Letterboxd
2. ✅ Analyser les préférences par genre
3. ✅ Voir les films populaires
4. ✅ Analyser les watchlists communes

**À venir** :
- [ ] Intégration avec l'API Letterboxd officielle
- [ ] Algorithme d'IA pour recommander des films
- [ ] Import/export de données
- [ ] Basede données persistante

## 💡 Tips

- Les graphiques sont **interactifs** : passez la souris dessus!
- Les couleurs suivent un design **moderne et épuré**
- L'app est **entièrement responsive** sur tous les appareils
- Les données se rechargent **au rafraîchissement de la page**

---

**🎬 Amusez-vous bien avec votre tableau de bord Letterboxd!**

Besoin d'aide? Consultez le `README.md` pour plus de détails.
