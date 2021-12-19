[![Build Status](https://travis-ci.com/alejandrosobko/descargo-api.svg?token=TqSkHJwyFjQsqxANWfpX&branch=master)](https://travis-ci.com/alejandrosobko/descargo-api)


# Mi descargo - API

API para el proyecto Mi Descargo

## Development

- clonar el repo
- solicitar archivos .env
- instalar hooks: `cp .githooks/* .git/hooks/`
- `npm start`
- `npm run dev` -> modo watch

mongo:
- instalar cliente y servidor de mongo
- crear carpeta para db: `sudo mkdir -p /data/db`
- dar permisos: `sudo chown -R $USER /data/db`
- levantar mongo: `mongod`

## Workflow

Tomar un ticket en Trello, crear un feature branch. Cuando está listo y testeado local, crear un PR y asignarselo a alguien. Se revisa, se aprueba o solicita cambios y finalmente se mergea a master.

## Bugs?

Crear un issue!




