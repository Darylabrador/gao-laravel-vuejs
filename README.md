# Projet de gestion d'attribution de poste information

La conception et le développement de ce projet s'est effectué dans le cadre de la formation de Simplon. 

Ce projet utilise les technologies suivantes :

- backend : Laravel 8 (API)
- frontend : VueJS

## Initialisation du projet

Après avoir fait un git clone de ce projet, vous devez effectué les actions suivantes : 

- composer install
- npm install
- php artisan migrate:refresh --seed
- php artisan passport:install --force

Après avoir fait les deux commandes utilisant "php artisan", vous devez créer et modifier le fichier .env et modifier les lignes suivantes : 

- DB_DATABASE=
- DB_USERNAME=
- DB_PASSWORD=
- PASSPORT_PERSONAL_ACCESS_CLIENT_ID=
- PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET=

Les informations concernant le passport se trouve dans votre base de données.

## Lancement du projet 

En mode développment vous devez utiliser les commandes suivantes : 

- php artisan serve
- npm run watch