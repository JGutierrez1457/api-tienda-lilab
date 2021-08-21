# API Tienda Lima Lab
## Development

- Abra un terminal
- Vaya al directorio donde desea clonar el proyecto
- Clone el proyecto:
```shell
git clone https://github.com/JGutierrez1457/api-tienda-lilab.git
```
- Ir al directorio del proyecto:
```shell
cd api-tienda-lilab
```
- Instalar dependencias:
```shell
npm install
```
- Agregar el .env file con las credenciales de MySQL que tiene, ejemplo:
```shell
PORT=3001
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_NAME=tiendalilab
```
- Generar y poblar la base de datos.
```shell
npm run populate
```
- Empezar el servidor en desarrollo y abrir [`http://localhost:3001`](http://localhost:3001).
```shell
npm run dev
```

## Author
- Jorge Alvaro Gutierrez Chochoca - Egresado Universidad Nacional de Ingeniería