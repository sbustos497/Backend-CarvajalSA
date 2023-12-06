# Backend-CarvajalSA
Conexion node.js a backend
Se creo una base de datos MySql para el desarrollo de este ejercicio 
esta divididio en diferentes carpetes
![image](https://github.com/sbustos497/Backend-CarvajalSA/assets/78486117/422d47a2-c84c-41ff-82c2-987157b36955)

la carpeta Database posee un archivo.js (db.js) el cual conecta directamente con la base de datos y utilizando sequelize

![image](https://github.com/sbustos497/Backend-CarvajalSA/assets/78486117/0cb4e0b6-7cb2-4852-925e-a2419c4d7f9a)

La Carpeta de model contiene la arquitectura de la base de datos para los contactos:
_id : Integer_
_Nombre: VARCHAR(50)_
_Apellido: VARCHAR(50)_
_Telefono: VARCHAR(50)_
_Celular: VARCHAR(50)_
_Direccion: VARCHAR(50)_

En la carpeta Routes se encuentra contactos.routes.js un archivo que contiene los endpoints que utilizaremos para el CRUD de los contactos

![image](https://github.com/sbustos497/Backend-CarvajalSA/assets/78486117/41e65cc6-e324-4e75-b170-3cb99a4c18e0)


#Config.js
ya que el .env contiene la URL del la base de datos asi como el nombre de la table para facilitar las cosas cree un .js el cual insrta las variables del .env en variables nuevas

![image](https://github.com/sbustos497/Backend-CarvajalSA/assets/78486117/5fd2c58f-911d-4bbc-8e9d-842cc891ce81)


.env

PORT = 3000

DB_NAME= practicas

DB_USER= root

DB_PASS= 12345678

DB_HOST= localhost

DB_PORT= 3306

Despliegue

Para en despliegue del backend utilize Render.com para interactuar con la base de datos en la nube

Pagina Backend = https://node-practicas.onrender.com/contactos
