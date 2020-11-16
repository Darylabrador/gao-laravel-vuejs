# Projet de gestion d'attribution de poste information

La conception et le développement de ce projet s'est effectué dans le cadre de la formation de Simplon. 

Ce projet utilise les technologies suivantes :

- backend : Laravel 8 (API)
- frontend : VueJS


Identifiant du compte admin : 

- identifiant : admin@gmail.com
- mot de passe : password


## Initialisation du projet

Après avoir fait un git clone de ce projet, vous devez effectué les actions suivantes : 

- npm install
- docker-compose build
- docker-compose up
- docker-compose exec app composer install
- docker-compose exec app php artisan migrate:fresh --seed
- docker-compose exec app php artisan passport:install --force

Ensuite, vous devez créer et modifier le fichier .env pour les lignes suivantes : 

- PASSPORT_PERSONAL_ACCESS_CLIENT_ID=
- PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET=

Les informations concernant le passport se trouve dans votre base de données.