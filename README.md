# Documentacón de poiesis_api

> En la siguiente documentación se encuentran listadas las 4 principales funcionalidades de la aplicacion creada para el taller literario **Poiesis**

Para levantar el proyecto es necesario:
1. Instalar las dependencias del proyecto a través de `npm install`
2. Pedir el archivo `.env` de configuración para el mailer, base de datos y storage de archivos
3. Correr `npm start` desde la terminal

## 1. Autenticación y creacion de usuarios
*Por Alex Costa*
## 2. Autorizacion y mailer
*Por Tomás Fernández Abrevaya*
## 3. Creacion de textos
*Por Priscila E. Bey*

### Descrpción:

- Los usuarios autenticados y autorizados en la aplicacion tendrán permiso para poder subir sus textos a la plataforma. Los mismos pueden ser en forma de texto pleno o como archivo PDF. 
- Los archivos seran subidos al drive del taller y podran ser visualizados gracias a la URL publica devuelta por el mismo Drive.

### Endpoint: `POST /texts`

#### Request:
- Los textos pueden ser creados solamente por aquellos usarios autenticados por lo que es necesario enviar el token a través de header `x-access-token`
- El **body** se enviará en formato `FormData` con los siguientes datos

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| title     |  String   | No pueden repetirse los titulos de los textos |
| genre   | Enum | fiction / non_fiction / poetry |
| hasPdf | Boolean | Este campo determina si el texto será en pdf o no|
| content     |  String   | Campo opcional dependiendo del hasPdf (false) |
| demo      | Buffer | Opcional dependiendo del hasPdf (true), archivo pdf leido como stream de datos |

#### `200` Response data:

```
{
  userId: 'FTlNPqZkYvQxwtMb0DBM',
  title: 'Un nuevo cuento 109',
  genre: 'poetry',
  textId: 1,
  hasPdf: true,
  content: null,
  pdfUrl: 'https://drive.google.com/file/d/1UiBWpJR14D2MYVoz7Y-jlvi1MtEFDHDQ/view?usp=drivesdk',
  pdfFileId: '1UiBWpJR14D2MYVoz7Y-jlvi1MtEFDHDQ',
  id: 'tVnAk9Vcvjru6iTwlZRP'
}
```
- Campos extra:

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| userId     |  String   | Id del usuario que creo el texto |
| pdfUrl   | String | Url pública de drive para ver el archivo |
| pdfFileId | String | Id del archivo |
| id     |  String   | Nuevo id creado para el texto desde firebase |

### Tests: 
- El archivo de test se encuentra en la ruta `./test/Priscila/index.js`
- Para ejecutar el archivo es necesario usar el comando `npm run testCreateText` en la terminal

## 4. Paginación y filtrado de textos
*Por Adela Delgadillo*