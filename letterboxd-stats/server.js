import express from "express";
import cors from "cors";
import {
  mockUsersData,
  calculateStatistics,
  getCommonWatchlist,
} from "./data.js";

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Route pour obtenir les statistiques complètes
app.get("/api/stats", (req, res) => {
  const stats = calculateStatistics(mockUsersData);
  res.json(stats);
});

// Route pour obtenir les films communs en watchlist
app.get("/api/common-watchlist", (req, res) => {
  const commonWatchlist = getCommonWatchlist(mockUsersData);
  res.json(commonWatchlist);
});

// Route pour obtenir les données des utilisateurs
app.get("/api/users", (req, res) => {
  res.json(mockUsersData);
});

// Route pour obtenir les statistiques par genre
app.get("/api/genres", (req, res) => {
  const stats = calculateStatistics(mockUsersData);
  res.json(stats.genres);
});

// Route pour obtenir les statistiques des notes
app.get("/api/ratings", (req, res) => {
  const stats = calculateStatistics(mockUsersData);
  res.json(stats.ratings);
});

// Route pour obtenir les statistiques des âges
app.get("/api/ages", (req, res) => {
  const stats = calculateStatistics(mockUsersData);
  res.json(stats.userAges);
});

// Route de santé
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Servir le fichier HTML
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Letterboxd Statistics Dashboard</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        h1 {
          color: white;
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5em;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .stats-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
        }
        
        .stat-card h3 {
          color: #667eea;
          font-size: 0.95em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          opacity: 0.8;
        }
        
        .stat-card .value {
          font-size: 2em;
          font-weight: bold;
          color: #333;
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .chart-container {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .chart-container h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.4em;
        }
        
        canvas {
          max-height: 400px;
        }
        
        .full-width {
          grid-column: 1 / -1;
        }
        
        .genre-list {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          grid-column: 1 / -1;
        }
        
        .genre-list h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.4em;
        }
        
        .genre-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #eee;
          transition: background 0.3s;
        }
        
        .genre-item:last-child {
          border-bottom: none;
        }
        
        .genre-item:hover {
          background: #f9f9f9;
        }
        
        .genre-name {
          font-weight: 600;
          color: #333;
        }
        
        .genre-stats {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        
        .progress-bar {
          width: 200px;
          height: 8px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
        }
        
        .genre-percentage {
          color: #667eea;
          font-weight: 600;
          min-width: 50px;
          text-align: right;
        }
        
        .genre-rating {
          color: #999;
          font-size: 0.9em;
        }
        
        .watchlist-container {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          grid-column: 1 / -1;
        }
        
        .watchlist-container h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.4em;
        }
        
        .watchlist-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #eee;
          transition: background 0.3s;
        }
        
        .watchlist-item:last-child {
          border-bottom: none;
        }
        
        .watchlist-item:hover {
          background: #f9f9f9;
        }
        
        .watchlist-title {
          font-weight: 600;
          color: #333;
          flex: 1;
        }
        
        .watchlist-users {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .user-badge {
          background: #667eea;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8em;
        }
        
        .user-count {
          color: #667eea;
          font-weight: 600;
          margin-right: 10px;
        }
        
        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
          
          h1 {
            font-size: 1.8em;
          }
          
          .genre-stats {
            flex-wrap: wrap;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📊 Letterboxd Statistics Dashboard</h1>
        
        <div class="stats-overview">
          <div class="stat-card">
            <h3>Utilisateurs</h3>
            <div class="value" id="totalUsers">-</div>
          </div>
          <div class="stat-card">
            <h3>Films Regardés</h3>
            <div class="value" id="totalFilms">-</div>
          </div>
          <div class="stat-card">
            <h3>Note Moyenne</h3>
            <div class="value" id="avgRating">-</div>
          </div>
          <div class="stat-card">
            <h3>Genres Uniques</h3>
            <div class="value" id="totalGenres">-</div>
          </div>
        </div>
        
        <div class="charts-grid">
          <div class="chart-container">
            <h2>📽️ Films par Genre</h2>
            <canvas id="genreChart"></canvas>
          </div>
          
          <div class="chart-container">
            <h2>⭐ Distribution des Notes</h2>
            <canvas id="ratingChart"></canvas>
          </div>
          
          <div class="chart-container">
            <h2>👥 Âge des Utilisateurs</h2>
            <canvas id="ageChart"></canvas>
          </div>
          
          <div class="chart-container">
            <h2>🎬 Top Genres</h2>
            <canvas id="topGenresChart"></canvas>
          </div>
        </div>
        
        <div class="genre-list" id="genreList">
          <h2>📌 Détails par Genre</h2>
          <div id="genreDetails"></div>
        </div>
        
        <div class="watchlist-container" id="watchlistContainer">
          <h2>⭐ Films Communs en Watchlist</h2>
          <div id="watchlistDetails"></div>
        </div>
      </div>
      
      <script>
        // Couleurs pour les graphiques
        const colors = {
          primary: '#667eea',
          secondary: '#764ba2',
          tertiary: '#f093fb',
          quaternary: '#4facfe',
          gradient: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'],
        };
        
        // Charger les données
        async function loadData() {
          try {
            const [statsRes, commonWatchlistRes] = await Promise.all([
              fetch('/api/stats'),
              fetch('/api/common-watchlist'),
            ]);
            
            const stats = await statsRes.json();
            const commonWatchlist = await commonWatchlistRes.json();
            
            // Remplir les cartes de statistiques
            document.getElementById('totalUsers').textContent = stats.totalUsers;
            document.getElementById('totalFilms').textContent = stats.totalFilms;
            document.getElementById('avgRating').textContent = stats.averageRating + '⭐';
            document.getElementById('totalGenres').textContent = stats.genres.length;
            
            // Créer les graphiques
            createGenreChart(stats.genres);
            createRatingChart(stats.ratings);
            createAgeChart(stats.userAges);
            createTopGenresChart(stats.genres.slice(0, 10));
            createGenreDetails(stats.genres);
            createWatchlistDetails(commonWatchlist);
            
          } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
          }
        }
        
        function createGenreChart(genres) {
          const ctx = document.getElementById('genreChart').getContext('2d');
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: genres.map(g => g.name),
              datasets: [{
                data: genres.map(g => g.count),
                backgroundColor: [
                  '#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b',
                  '#fa709a', '#fee140', '#30b0fe', '#a8edea', '#fed6e3'
                ],
                borderColor: 'white',
                borderWidth: 2,
              }],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 15,
                    font: { size: 12 },
                  },
                },
              },
            },
          });
        }
        
        function createRatingChart(ratings) {
          const ctx = document.getElementById('ratingChart').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ratings.map(r => r.rating + '⭐'),
              datasets: [{
                label: 'Nombre de films',
                data: ratings.map(r => r.count),
                backgroundColor: '#667eea',
                borderRadius: 8,
                borderSkipped: false,
              }],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: true },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { stepSize: 1 },
                },
              },
            },
          });
        }
        
        function createAgeChart(ages) {
          const ctx = document.getElementById('ageChart').getContext('2d');
          new Chart(ctx, {
            type: 'scatter',
            data: {
              datasets: [{
                label: 'Âges des utilisateurs',
                data: ages.map((a, i) => ({ x: i + 1, y: a.age })),
                backgroundColor: '#667eea',
                borderColor: '#764ba2',
                borderWidth: 2,
                pointRadius: 8,
                pointHoverRadius: 10,
              }],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: true },
              },
              scales: {
                y: {
                  beginAtZero: false,
                  min: 20,
                  max: 50,
                },
              },
            },
          });
        }
        
        function createTopGenresChart(genres) {
          const ctx = document.getElementById('topGenresChart').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: genres.map(g => g.name),
              datasets: [{
                label: 'Nombre de films',
                data: genres.map(g => g.count),
                backgroundColor: [
                  '#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b',
                  '#fa709a', '#fee140', '#30b0fe', '#a8edea', '#fed6e3'
                ],
                borderRadius: 8,
                borderSkipped: false,
              }],
            },
            options: {
              responsive: true,
              indexAxis: 'y',
              plugins: {
                legend: { display: false },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: { stepSize: 1 },
                },
              },
            },
          });
        }
        
        function createGenreDetails(genres) {
          const container = document.getElementById('genreDetails');
          container.innerHTML = genres.map(genre => \`
            <div class="genre-item">
              <div class="genre-name">\${genre.name}</div>
              <div class="genre-stats">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: \${genre.percentage}%"></div>
                </div>
                <div class="genre-percentage">\${genre.percentage}%</div>
                <div class="genre-rating">Avg: \${genre.avgRating}⭐</div>
              </div>
            </div>
          \`).join('');
        }
        
        function createWatchlistDetails(watchlist) {
          const container = document.getElementById('watchlistDetails');
          container.innerHTML = watchlist.slice(0, 10).map(item => \`
            <div class="watchlist-item">
              <div class="watchlist-title">\${item.film}</div>
              <div class="watchlist-users">
                <span class="user-count">\${item.count} utilisateur(s)</span>
                <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                  \${item.users.map(u => \`<span class="user-badge">\${u}</span>\`).join('')}
                </div>
              </div>
            </div>
          \`).join('');
        }
        
        // Charger les données au démarrage
        loadData();
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`📊 Letterboxd Stats Server running at http://localhost:\${PORT}`);
  console.log(`   Ouvrez http://localhost:\${PORT} dans votre navigateur`);
});
