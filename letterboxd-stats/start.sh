#!/bin/bash

# 📊 LETTERBOXD STATS - SCRIPT DE LANCEMENT AUTOMATIQUE

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         🎬 Letterboxd Statistics Dashboard - Launch           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé!"
    echo ""
    echo "Installation via conda:"
    echo "  conda install -c conda-forge nodejs -y"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules" ]; then
    echo "📥 Installation des dépendances..."
    npm install
    echo ""
fi

# Démarrer le serveur
echo "🚀 Démarrage du serveur..."
echo "📍 Accédez à: http://localhost:5001"
echo "🛑 Appuyez sur Ctrl+C pour arrêter"
echo ""

npm start
