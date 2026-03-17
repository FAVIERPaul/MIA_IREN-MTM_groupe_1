# Guide d'installation et d'utilisation de GitHub Copilot (Pack Éducation)

Ce guide est conçu pour les étudiants souhaitant utiliser **GitHub Copilot** gratuitement via le **GitHub Education Pack** dans **Visual Studio Code (VS Code)**.

---

## Table des matières
1. [Inscription au GitHub Education Pack](#1-inscription-au-github-education-pack)
2. [Installation de GitHub Copilot dans VS Code](#2-installation-de-github-copilot-dans-vs-code)
3. [Installation de l'extension LaTeX dans VS Code](#3-installation-de-lextension-latex-dans-vs-code)
4. [Guide d'utilisation de GitHub Copilot](#4-guide-dutilisation-de-github-copilot)
5. [Pipeline Zotero \(biblio\) vers LaTeX](#5-pipeline-zotero-biblio-vers-latex)
6. [Bonnes pratiques pour les étudiants](#6-bonnes-pratiques-pour-les-étudiants)
7. [Résoudre les problèmes courants](#7-résoudre-les-problèmes-courants)

---

## 1. Inscription au GitHub Education Pack

### Étape 1 : Créer un compte GitHub
- Rendez-vous sur [github.com](https://github.com/) et cliquez sur **"Sign up"**.
- Suivez les instructions pour créer un compte avec une **adresse email académique** (ex: `prenom.nom@univ-paris.fr`).

### Étape 2 : Demander le GitHub Education Pack
- Allez sur [education.github.com/pack](https://education.github.com/pack).
- Cliquez sur **"Get benefits"**, puis sur **"Request a discount"**.
- Remplissez le formulaire avec :
  - Votre adresse email académique.
  - Une preuve de statut étudiant (carte étudiante, certificat de scolarité, etc.).
- Validez la demande. **La validation peut prendre quelques heures à 2 jours.**

### Étape 3 : Activer GitHub Copilot
- Une fois le pack validé, retournez sur [education.github.com/pack](https://education.github.com/pack).
- Faites défiler jusqu’à la section **"GitHub Copilot"** et cliquez sur **"Get GitHub Copilot"**.
- Suivez les instructions pour activer votre accès gratuit.

---

## 2. Installation de GitHub Copilot dans VS Code

### Étape 1 : Installer VS Code
- Téléchargez et installez [Visual Studio Code](https://code.visualstudio.com/).

### Étape 2 : Installer l’extension GitHub Copilot
- Ouvrez VS Code.
- Allez dans l’onglet **"Extensions"** (icône en forme de carré en bas de la barre latérale).
- Recherchez **"GitHub Copilot"** et cliquez sur **"Install"**.
- Une fois installée, cliquez sur **"Sign in"** et connectez-vous avec votre compte GitHub.

### Étape 3 : Vérifier l’activation
- Après la connexion, un message devrait apparaître en bas à droite : **"GitHub Copilot is ready!"**.
- Si ce n’est pas le cas, redémarrez VS Code.

---

## 3. Installation de l'extension LaTeX dans VS Code

### Étape 1 : Installer une distribution LaTeX
- **Windows** : installez [MiKTeX](https://miktex.org/download) ou [TeX Live](https://www.tug.org/texlive/).
- Pendant l'installation, laissez l'option d'installation automatique des paquets activée si elle est proposée.

### Étape 2 : Installer l'extension LaTeX dans VS Code
- Ouvrez VS Code puis l'onglet **Extensions**.
- Recherchez **"LaTeX Workshop"** (éditeur : James Yu).
- Cliquez sur **"Install"**.

### Étape 3 : Vérifier le bon fonctionnement
- Créez un fichier `main.tex` avec un exemple minimal :

```tex
\documentclass{article}
\begin{document}
Bonjour LaTeX !
\end{document}
```

- Lancez la compilation avec la commande **LaTeX Workshop: Build LaTeX project**.
- Vérifiez que le PDF est généré correctement.

---

## 4. Guide d'utilisation de GitHub Copilot

### Fonctionnalités de base
- **Suggestions de code** : Copilot propose des lignes ou des blocs de code en temps réel pendant que vous tapez.
- **Génération de fonctions** : Décrivez ce que vous voulez faire en commentaire, et Copilot générera le code.
- **Explications de code** : Sélectionnez un bloc de code et demandez une explication.

### Exemple 1 : Générer une fonction
1. Ouvrez un fichier Python (ex: `script.py`).
2. Tapez un commentaire décrivant ce que vous voulez :
   ```python
   # Écrire une fonction qui calcule la factorielle d'un nombre
  ```
3. Appuyez sur `Entrée` puis acceptez une proposition de Copilot avec `Tab`.

### Exemple 2 : Demander une explication
- Sélectionnez un bloc de code.
- Ouvrez le chat Copilot et demandez :
  - *"Explique ce code ligne par ligne"*
  - *"Propose une version plus lisible"*

---

## 5. Pipeline Zotero (biblio) vers LaTeX

### Objectif
Utiliser Zotero pour gérer vos références, exporter automatiquement un fichier `.bib`, puis citer ces références dans vos documents LaTeX.

### Étape 1 : Installer les outils Zotero
- Installez [Zotero](https://www.zotero.org/).
- Installez l'extension **Better BibTeX for Zotero** : [https://retorque.re/zotero-better-bibtex/](https://retorque.re/zotero-better-bibtex/).

### Étape 2 : Créer l'export automatique `.bib`
- Dans Zotero, créez une collection (ex : `Mémoire` ou `Thèse`).
- Clic droit sur la collection > **Exporter la collection...**
- Choisissez **Better BibTeX**.
- Cochez **Keep updated** (mise à jour automatique).
- Enregistrez le fichier, par exemple : `references.bib` dans votre dossier projet LaTeX.

### Étape 3 : Relier le `.bib` au document LaTeX
- Dans votre `main.tex`, ajoutez par exemple :

```tex
\usepackage[backend=biber,style=apa]{biblatex}
\addbibresource{references.bib}
```

- Citez une source avec `\cite{cle_zotero}`.
- Affichez la bibliographie avec `\printbibliography`.

### Étape 4 : Compiler correctement
- Utilisez une recette de compilation avec `biber` (souvent déjà fournie par LaTeX Workshop).
- Ordre classique : `pdflatex` → `biber` → `pdflatex` → `pdflatex`.

---

## 6. Bonnes pratiques pour les étudiants

- Utilisez Copilot comme **assistant** et non comme solution unique.
- Vérifiez toujours le code généré avant de l'utiliser dans un projet académique.
- Gardez vos références bibliographiques propres dans Zotero (titre, auteurs, année, DOI).
- Sauvegardez régulièrement votre projet (`.tex` + `.bib`) sur GitHub.

---

## 7. Résoudre les problèmes courants

### Copilot ne propose rien
- Vérifiez que vous êtes bien connecté à GitHub dans VS Code.
- Vérifiez que votre accès étudiant est actif sur votre compte GitHub.
- Redémarrez VS Code.

### LaTeX ne compile pas
- Vérifiez que MiKTeX/TeX Live est bien installé.
- Ouvrez les logs de LaTeX Workshop pour identifier le paquet manquant.
- Si nécessaire, installez manuellement le paquet LaTeX demandé.

### La bibliographie Zotero ne s'affiche pas
- Vérifiez que `references.bib` est bien au bon emplacement.
- Vérifiez que la clé citée dans `\cite{...}` existe dans le `.bib`.
- Vérifiez que la compilation utilise bien `biber`.
