#  Projet WebGL — Scène 3D interactive

Une scène 3D interactive développée avec **Three.js** et **TypeScript**, dans le cadre de mon portfolio d'ingénieure en informatique spécialisée en IA et développement web.


##  Objectif du projet

Ce projet a été réalisé pour :

- Démontrer ma maîtrise de **TypeScript** et de **Vite** dans un contexte moderne
- Explorer les bases de la **3D dans le navigateur** avec **Three.js** et **WebGL**
- Mettre en pratique les bonnes pratiques de développement front-end (structure, animation, responsive)

---

##  Fonctionnalités

- 🎥 **Caméra interactive** : rotation, zoom et déplacement avec la souris (OrbitControls)
- 💡 **Éclairage réaliste** : lumière ambiante + lumière directionnelle avec ombres
- 🧊 **Objet 3D animé** : cube avec rotation fluide et continue
- 🌑 **Ombres portées** : sol qui reçoit les ombres de l'objet
- 📱 **Responsive** : adaptation automatique à la taille de la fenêtre
- ⚡ **Hot Module Replacement** : rechargement instantané pendant le développement (Vite)

---

##  Stack technique

| Technologie | Rôle |
|---|---|
| **TypeScript** | Langage principal (typage statique) |
| **Three.js** | Bibliothèque 3D basée sur WebGL |
| **Vite** | Build tool ultra-rapide et serveur de développement |
| **WebGL** | API de rendu 3D bas niveau (utilisée par Three.js) |
| **HTML/CSS** | Structure et styles de l'interface |

---

##  Installation et lancement

### Prérequis

- **Node.js** ≥ 20.19.0 ([télécharger](https://nodejs.org))
- **npm** (inclus avec Node.js)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/nourbahloull/mon-projet-webgl.git
cd mon-projet-webgl

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
